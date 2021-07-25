import { Server } from '@hocuspocus/server'

const instance = Server.configure({
  port: 7000,
  async onListen(data) {
    console.log(`Server is listening on port "${data.port}"!`)
  },

  // Order matters!
  extensions: [],
})

instance.listen()
