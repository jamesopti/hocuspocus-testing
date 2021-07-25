import { Server, Hocuspocus } from '@hocuspocus/server'
import * as request from 'supertest'

describe('Server (e2e)', () => {
  let server: Hocuspocus

  beforeEach(async () => {
    server = Server.configure({
      port: 0,
      extensions: [],
    })

    await server.listen()
  })

  afterEach(async () => {
    await server.destroy()
  })

  it('/ (GET)', () => {
    return request(server.httpServer).get('/').expect(200).expect('OK')
  })
})
