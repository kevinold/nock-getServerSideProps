// server.js
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const nock = require('nock')

app.prepare().then(() => {
  const server = express()

  server.use(express.json());

  server.post("/nock", (req, res) => {
    const { hostname, method, path, statusCode, body } = req.body
    lcMethod = method.toLowerCase()
    nock(hostname)[lcMethod](path).reply(statusCode, body)
    res.status(200);
  });

  /*server.get("/clearNock", (req, res) => {
    nock.restore()
    nock.cleanAll()
    res.status(200);
  });*/

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})



