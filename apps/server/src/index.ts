import express from 'express'
import { createServer } from 'http'

const app = express()
const server = createServer(app)
// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 4000
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`)
  // eslint-disable-next-line no-console
  console.log(`Press Ctrl+C to stop the server`)
})
