import fs from 'node:fs'

if (!fs.existsSync('data')) {
  fs.mkdirSync('data')
}

function generateTxtFile(filename, bytesSize) {
  const chunkSize = 1024 * 1024 // 1MB
  const numChunks = bytesSize / chunkSize
  const chunk = 'a'.repeat(chunkSize) // String de 1MB para otimizar
  const stream = fs.createWriteStream(filename, { flags: 'w' })

  for (let i = 0; i < numChunks; i++) {
    stream.write(chunk)
  }

  stream.end()

  stream.on('finish', () => {
    console.log(`File ${filename} generated successfully!`)
  })

  stream.on('error', err => {
    console.error(`Error while generating file ${filename}: ${err}`)
  })
}

const filePath = 'data/large-txt.txt'
const fileSize = 100 * 1024 * 1024 // 100MB

generateTxtFile(filePath, fileSize)
