const mailerUrl = 'http://localhost:4000'

class Mailer {
  async groupSend ({ mailServiceId, templateId, groupId, templateProps }) {
    try {
      const body = JSON.stringify({
        mailServiceId,
        templateId,
        groupId,
        templateProps
      })
      const response = await fetch(`${mailerUrl}/group-send`, {
        method: 'POST',
        body
      })

      if (response.status !== 200) {
        return { error: response }
      }
      return { response }
    } catch (error) {
      this.log('Error', error)
      return { error }
    }
  }

  log () {
    console.log('[ Mailer ]', ...arguments)
  }
}

const mailer = new Mailer()
export default mailer
