import templateMocks from './template-mocks.js'

class TemplateModel {
  async get (templateId) {
    // TODO: Get templates from db.
    return templateMocks[templateId]
  }
}

const templateModel = new TemplateModel()
export default templateModel
