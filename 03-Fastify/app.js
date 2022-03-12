const root = '/';
const port = 3000;

const fastify = require('fastify')();
//validation
const options = {
    schema: {
      body: {
        type: 'object',
        properties: {
          someKey: { type: 'string' },
          someOtherKey: { type: 'number' }
        }
      }
    }
}
//serialization
const opts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            post: { type: 'string' }
          }
        }
      }
    }
}
//parsing
const plain = {};

//Normal usage
fastify.get(root, (request, response) => {
    response.send({ hello: 'world'})
});

fastify.listen(port, (error, address) => {
    if(error) {
        fastify.log.error(error);
        process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
});
//------------------------------------------------
//async/await usage
fastify.get(`${ root }async`, async (request, response) => {
    response.send({ asynch: 'await' });
});

const start = async () => {
    try {
        await fastify.listen(port);
    } catch( error ) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();
//-----------------------------------------------
fastify.register(require('./our-first-route'));

//post
fastify.post(root, options, async (request, response) => {
    return { post: 'validation example'};
});

fastify.post(`${root}serialization`, opts, async (request, response) => {
    return { post: 'serialization example'};
});

//request loads parsing
fastify.post(`${root}parsing`, plain, async (request, reply) => {
    return request.body;
});
