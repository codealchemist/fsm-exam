import fastifyCors from 'fastify-cors'

export default function plugins (fastify) {
  // CORS.
  fastify.register(fastifyCors, {
    origin: (origin, cb) => {
      const hostname = new URL(origin).hostname
      if (hostname === 'localhost') {
        //  Request from localhost will pass
        cb(null, true)
        return
      }
      // Generate an error on other origins, disabling access
      cb(new Error('Not allowed'))
    }
  })
}
