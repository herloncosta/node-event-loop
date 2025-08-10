# Event Loop Explorer 🌀

**Um projeto prático para entender o funcionamento do Event Loop no Node.js**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 📖 Visão Geral

Este projeto demonstra na prática como o Event Loop funciona no Node.js, com exemplos de:
- `setTimeout` vs `setImmediate`
- Microtasks (Promises e `process.nextTick`)
- Operações I/O assíncronas
- Código bloqueante vs não-bloqueante
- Worker Threads para operações CPU-intensive

## 🚀 Como Usar

### Pré-requisitos
- Node.js 18+
- NPM ou Yarn

### Instalação
```bash
git clone https://github.com/herloncosta/event-loop-explorer.git
cd event-loop-explorer
npm install
```

### Gerar Arquivos de Teste
```bash
# Cria um arquivo TXT grande para testes de I/O
npm run generate:txt

# Cria um arquivo JSON grande para testes de I/O
npm run generate:json
```

Os arquivos serão salvos na pasta `data/`.

### Executar o Projeto
```bash
npm start
```

Isso iniciará três servidores:
1. Servidor principal em http://localhost:3000

## 🔍 Rotas Disponíveis

### Servidor Principal (http://localhost:3000)
- `/timers` - Comparação entre setTimeout e setImmediate
- `/microtasks` - Demonstração de microtasks (Promise vs nextTick)
- `/io` - Operação de I/O assíncrona (leitura de arquivo)
- `/blocking` - Exemplo de código bloqueante

## 📊 Comparação de Performance

| Requisição          | Servidor Bloqueante | Servidor Não-Bloqueante |
|---------------------|---------------------|-------------------------|
| Cálculo pesado      | Bloqueia tudo       | Continua respondendo    |
| Requisições paralelas | Enfileiradas       | Processadas em paralelo |

## 🧠 Conceitos Explicados

### 1. Fases do Event Loop
![Fases do Event Loop](https://i.imgur.com/5Qz2Q0a.png)

### 2. Microtasks vs Macrotasks
```javascript
// Ordem de execução:
process.nextTick(() => {});
Promise.resolve().then(() => {});
setImmediate(() => {});
setTimeout(() => {}, 0);
```

### 3. Worker Threads
```javascript
const { Worker } = require('worker_threads');

// Código pesado roda em thread separada
const worker = new Worker('./heavy-task.js');
```

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Siga estes passos:
1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✉️ Contato

Herlon Costa - [@herlon366](https://x.com/herlon366) - herlon36@gmail.com