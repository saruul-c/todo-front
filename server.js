const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
// add custom path here
    server.post('/user/getAll', getAll);

  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('Ready on http://localhost:3000')
  })
})

function getAll(req, res) {
    try {
      const users = [/* ... user data ... */];
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  }
  