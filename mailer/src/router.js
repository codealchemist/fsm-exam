import groupSendController from './controllers/group-send.js'

export default function router (fastify) {
  fastify.post('/group-send', async (req, res) => {
    const { body } = req
    console.log('GROUP-SEND BODY', body)

    const json = JSON.parse(body)
    const { response, error } = await groupSendController.send(json)

    // Error.
    if (error) {
      return res.status(500).send(error)
    }

    // OK!
    res.status(200).send(response)
  })
}
