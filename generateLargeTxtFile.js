import fs from 'node:fs'

function gerarArquivoTxt(nomeArquivo, tamanhoBytes) {
  const chunkSize = 1024 * 1024 // 1MB
  const numChunks = tamanhoBytes / chunkSize
  const chunk = 'a'.repeat(chunkSize) // String de 1MB para otimizar
  const stream = fs.createWriteStream(nomeArquivo, { flags: 'w' })

  for (let i = 0; i < numChunks; i++) {
    stream.write(chunk)
  }

  stream.end()

  stream.on('finish', () => {
    console.log(`Arquivo ${nomeArquivo} gerado com sucesso!`)
  })

  stream.on('error', err => {
    console.error(`Erro ao gerar o arquivo: ${err}`)
  })
}

const filePath = 'data/large-txt.txt'
const fileSize = 100 * 1024 * 1024 // 100MB

gerarArquivoTxt(filePath, fileSize)
