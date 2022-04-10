import { Liquid } from 'liquidjs'
const engine = new Liquid()

class Parser {
  async parse ({ template, data }) {
    const { subject, text, html } = template
    const parsedSubject = await engine.parseAndRender(subject, data)
    const parsedText = await engine.parseAndRender(text, data)
    const parsedHtml = await engine.parseAndRender(html, data)

    return {
      subject: parsedSubject,
      text: parsedText,
      html: parsedHtml
    }
  }
}

const parser = new Parser()
export default parser
