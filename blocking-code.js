import http from 'node:http'
import { logger } from './logger.js'

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })

  if (req.url === '/compute') {
    logger(req)
    let sum = 0
    for (let i = 0; i < 1e9; i++) sum += i
    res.end(`Result: ${sum}`)
  } else {
    logger(req)
    res.end('Ok!')
  }
}).listen(3001, () => {
  console.log('Server running at http://localhost:3001')
})