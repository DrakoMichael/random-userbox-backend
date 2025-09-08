# random-userbox-backend

## Descrição

Este projeto é uma API Node.js/Express desenvolvida em TypeScript, que serve como exemplo de arquitetura modular e boas práticas para aplicações backend. O principal objetivo é fornecer endpoints para manipulação e consulta de usuários fictícios, utilizando a API pública randomuser.me para simular dados reais. O projeto também demonstra integração com banco de dados SQLite via TypeORM, além de exemplos de organização de rotas, modelos, interfaces e configuração de ambiente.

## Funcionalidades

- Endpoints REST para consulta de usuários aleatórios
- Integração com a API randomuser.me
- Suporte a múltiplos usuários por requisição
- Organização modular (rotas, modelos, interfaces, configs)
- Exemplo de uso de TypeORM com SQLite
- Pronto para deploy e debug no VS Code

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/DrakoMichael/simpleRandomProject_00.git
   cd simpleRandomProject_00
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o arquivo `.env` conforme necessário (opcional para SQLite).

## Uso

- Para rodar em modo desenvolvimento:
  ```sh
  npm run start:dev
  ```
- Para rodar em produção (após build):
  ```sh
  npm run build
  npm start
  ```

## Endpoints principais

- `GET /api/v1/users/` — Retorna um usuário aleatório
- `GET /api/v1/users/:qtd` — Retorna múltiplos usuários aleatórios (qtd = quantidade)

## Estrutura do Projeto

```
src/
  app.ts
  app/
    config/
    database/
    interfaces/
    models/
    routes/
```

## Tecnologias

- Node.js
- Express
- TypeScript
- TypeORM
- SQLite

## Autor

DrakoMichael

---

Este projeto é um exemplo didático e pode ser expandido para fins de estudo ou como base para aplicações reais.
