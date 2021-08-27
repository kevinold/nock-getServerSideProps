// server.js
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { cypressMockMiddleware } = require('@cypress/mock-ssr')

// export small express middleware (connect middleware)
// exporting __cypress_server_mock 
// server.use(cypressMockMiddleware(configOpts))

// write nock in a way where it could be mocked once or indefinitely triggered by a flag

/*
const cypressMockMiddleware = connect();

cypressMockMiddleware.use('/__cypress_server_mock', function cypressServerMock(req, res) {
  const chunks = []

  req.on("data", (chunk) => {
    chunks.push(chunk)
  });

  req.on("end", () => {
    const reqBody = JSON.parse(Buffer.concat(chunks).toString());
    console.log('reqBody', reqBody)

    const { hostname, method, path, statusCode, body } = reqBody
    lcMethod = method.toLowerCase()
    nock(hostname)[lcMethod](path).reply(statusCode, body)
  });
  res.sendStatus(200);
});

cypressMockMiddleware.use('/__cypress_clear_mocks', function cypressClearServerMock(req, res) {
  nock.restore()
  nock.cleanAll()
  nock.activate()
  res.sendStatus(200);
})
*/

app.prepare().then(() => {
  const server = express()

  server.use(cypressMockMiddleware);

  server.get("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})



