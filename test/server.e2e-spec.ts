import HPServer from '@hocuspocus/server'

describe('Server (e2e)', () => {
  let server: HPServer.Hocuspocus

  beforeEach(async () => {
    server = HPServer.Server.configure({
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
