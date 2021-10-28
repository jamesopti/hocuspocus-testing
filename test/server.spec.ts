import { Server, Hocuspocus } from '@hocuspocus/server'

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
    expect(1).toBe(1)
  })
})
