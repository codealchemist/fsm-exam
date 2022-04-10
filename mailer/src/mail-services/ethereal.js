import nodemailer from 'nodemailer'

// Create reusable transporter object using the default SMTP transport.
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'lavonne.jakubowski48@ethereal.email',
    pass: 'k4wy6esMTUhCceYVyh'
  }
})
const defaultFrom = '"Lavonne Jakubowski" <lavonne.jakubowski48@ethereal.email>'

class Ethereal {
  async send ({ to, from, subject, text, html } = {}) {
    from = from || defaultFrom

    if (!to || !from || !subject || !text || !html) {
      return { error: 'Missing required params' }
    }

    try {
      const response = await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html
      })

      const previewUrl = nodemailer.getTestMessageUrl(response)
      this.log(`Message sent: ${response.messageId}`)
      this.log(`Preview URL: ${previewUrl}`)
      return { response: { ...response, previewUrl } }
    } catch (error) {
      this.log('Error', error.message)
      return { error }
    }
  }

  log () {
    console.log('[ Mailer.Ethereal ]', ...arguments)
  }
}

const ethereal = new Ethereal()
export default ethereal
