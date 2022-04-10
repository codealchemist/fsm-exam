import mailServices from '../mail-services/index.js'
import templateModel from '../models/template.js'
import groupModel from '../models/group.js'
import templateParser from '../template-parser.js'

class GroupSendController {
  getMailService (mailServiceId) {
    this.log(`Load mail service: ${mailServiceId}`)
    return mailServices[mailServiceId]
  }

  async send (params = {}) {
    this.log('PARAMS', params)
    const { mailServiceId, templateId, groupId, templateProps } = params

    try {
      const template = await templateModel.get(templateId)
      const group = await groupModel.get(groupId)
      const mailService = this.getMailService(mailServiceId)
      this.log('GROUP', group)

      const responses = []
      for (const member of group) {
        this.log('MEMBER', member)
        const parsedTemplate = await templateParser.parse({
          template,
          data: { ...member, ...templateProps }
        })
        const { name, email } = member
        const { subject, text, html } = parsedTemplate
        const to = `${name} <${email}>`
        this.log(`ᐧ Sending group email to ${to}...`)
        const response = await mailService.send({
          to,
          subject,
          text,
          html
        })
        responses.push({ ...response })
      }

      return { response: responses }
    } catch (error) {
      this.log('Error', error.message)
      return { error }
    }
  }

  log () {
    console.log('[ GroupSendController ]', ...arguments)
  }
}

const groupsendController = new GroupSendController()
export default groupsendController
