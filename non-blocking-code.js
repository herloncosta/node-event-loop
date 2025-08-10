import http from 'node:http'
import { Worker } from 'node:worker_threads'

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })

  if (req.url === '/compute') {
    const worker = new Worker('./hard-compute.js')

    worker.on('message', sum => {
      res.end(`Result: ${sum}`)
    })

    worker.on('error', () => {
      console.error(error)
      res.statusCode = 500
      res.end(`Error: ${error.message}`)
    })
  } else {
    res.end('Ok!')
  }

}).listen(3002, () => {
  console.log('Server running at http://localhost:3002')
})