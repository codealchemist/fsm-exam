import groupMocks from './group-mocks.js'

class GroupModel {
  async get (groupId) {
    // TODO: Get groups from db.
    return groupMocks[groupId]
  }
}

const groupModel = new GroupModel()
export default groupModel
