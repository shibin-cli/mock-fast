import Fastify from 'fastify'
import mocks from './mock'

const fastify = Fastify()

function sleep(second: number) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * second)
  })
}

mocks.forEach(item => {
  const { method, url, response } = item
  fastify[method](url, async (request, reply) => {
    await sleep(1)
    reply.send(await response())
  })
})

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3001 }, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}`)
})
