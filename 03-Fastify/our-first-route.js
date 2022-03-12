async function routes (fastify, options) {
    fastify.get('/route', async (request, reply) => {
      return { routes: 'on module' }
    })
  }
  
module.exports = routes