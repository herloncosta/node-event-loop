import http from 'node:http'
import fs from 'node:fs'
import url from 'node:url'
import { logger } from './logger.js'

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  const routes = ['/timers', '/microtasks', '/io', '/blocking']

  if (!routes.includes(pathname)) {
    logger(req)
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Página não encontrada!\n')
  }

  if (pathname === '/timers') {
    logger(req)
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })

    setTimeout(() => console.log('Timeout\n'), 0)
    setImmediate(() => console.log('Immediate\n'), 0)

    res.end('Fim da requisição!\n')
  }

  if (pathname === '/microtasks') {
    logger(req)
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })

    Promise.resolve().then(() => console.log('Promise\n'))
    process.nextTick(() => console.log('NextTick\n'))

    res.end('Fim da requisição!\n')
  }

  if (pathname === '/io') {
    logger(req)

    fs.readFile('data/large-json.json', (err, data) => {
      if (err) {
        res.writeHead(500)
        return res.end('Erro ao ler o arquivo!')
      }

      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end(data)
    })
  }

  if (pathname === '/blocking') {
    const start = Date.now()

    // Simulação de tarefa pesada da CPU
    while (Date.now() - start < 3000) {} // Bloqueia por 3 segundos

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Fim da tarefa pesada!\n')
  }
})

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
