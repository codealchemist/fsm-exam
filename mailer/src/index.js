import Fastify from 'fastify'
import plugins from './plugins.js'
import router from './router.js'

const port = process.env.PORT || 4000

const fastify = Fastify({
  logger: true
})

// Add plugins.
plugins(fastify)

// Set routes.
router(fastify)

fastify.listen({ port }, (err, address) => {
  if (err) throw err
  console.log(`📩 Mail service listening on ${address}:${port}`)
})
