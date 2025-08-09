import fs from 'node:fs'

function createLargeObject(sizeInBytes) {
  const object = {}
  let currentSize = 0
  let keyIndex = 0

  while (currentSize < sizeInBytes) {
    const key = `key_${keyIndex++}`
    const value = 'a'.repeat(1024) // Cria strings de 1KB para simular dados maiores
    object[key] = value
    currentSize += key.length + value.length // Tamanho aproximado da chave e valor
  }

  return object
}

function generateJsonFile(filePath, sizeInBytes) {
  const largeObject = createLargeObject(sizeInBytes)
  const jsonString = JSON.stringify(largeObject)

  fs.writeFile(filePath, jsonString, 'utf8', err => {
    if (err) {
      console.error('Erro ao escrever o arquivo:', err)
    } else {
      console.log('Arquivo JSON gerado com sucesso!')
    }
  })
}

const filePath = 'data/large-json.json'
const fileSizeInBytes = 100 * 1024 * 1024 // 100MB

generateJsonFile(filePath, fileSizeInBytes)
