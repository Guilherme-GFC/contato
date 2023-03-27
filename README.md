# silver-contact

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
- [Endpoints](#3-endpoints)

## 1. Visão geral

[ Voltar para o topo ](#tabela-de-conteúdos)

Uma plataforma para cadastro e gerenciamento de contatos, tecnologias utilizadas.

- Front-End
  - [ReactJS](https://legacy.reactjs.org)
  - [Chakra-ui](https://chakra-ui.com)
  - [Yup](https://www.npmjs.com/package/yup)
  - [TypeScript](https://www.typescriptlang.org)
- Back-End
  - [NodeJS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/pt-br/)
  - [TypeORM](https://typeorm.io/)
  - [Zod](https://zod.dev)
  - [PostgreSQL](https://www.postgresql.org/)

## 2 Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

Recomendo que abra um terminal para cada "parte", [front end](#21-instalando-dependências-front-end) e [back end](#22-back-end)

### 2.1 Instalando Dependências Front End

Clone o projeto em sua máquina, navegue ate a pasta do "front" e execute o comando:

```shell
yarn
```

Apos instalado as dependências, execute o comando para executar o sistema:

```shell
yarn dev
```

Será gerado um link para usar a plataforma de modo local

```shell
Local:   http://127.0.0.1:5173/
```

Para pausar a aplicação aperte Crtl + C no terminal

---

### 2.2 Instalando Dependências Back End

Agora navegue ate a pasta "back" a partir da raiz do projeto e execute o comando:

```shell
yarn
```

### 2.2.1 Variáveis de Ambiente

Crie um arquivo .env, copiando o formato do arquivo .env.example e configure suas variáreis de ambiente com suas credenciais do Postgres e uma nova datavase da sua escolha

### 2.2.2 Migrations

Execute as migrations com o comando:

```shell
yarn typeorm migration:run -d src/data-source.ts
```

Lembrando que você precisa estar na pasta "back" no seu terminal

### 2.2.3 Rodando

Apos instalado as dependências, e configurado as variaveis de ambiente e os dados do Postegres, execute o comando para executar o sistema:

```shell
yarn dev
```

O servidor estará rodando por padrão em http://localhost:3000

Para pausar a aplicação aperte Crtl + C no terminal

---

## 3. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
  - [POST - /users](#11-criação-de-usuário)
  - [GET - /users](#12-listando-usuário)
  - [PATCH - /users](#13-atualização-de-usuário)
  - [DELETE - /users](#14-deleção-de-usuário)
- [Contacts](#2-contacts)
  - [POST - /users/contacts](#21-criação-de-contato)
  - [GET - /users/contacts](#22-listando-contatos)
  - [GET - /users/contacts/id](#23-listando-contatos)
  - [PATCH - /users/contacts/id](#24-atualização-de-contato)
  - [DELETE - /users/contacts/id](#25-deleção-de-contato)
- [Login](#3-login)
  - [POST - /login](#31-realizando-login)

## 1. **Users**

O User é dfinido como:

| Campo    | Tipo   | Descrição                      |
| -------- | ------ | ------------------------------ |
| id       | string | Identificador único do usuário |
| name     | string | O nome do usuário.             |
| email    | string | O e-mail do usuário.           |
| password | string | A senha de acesso do usuário   |

### Endpoints

| Método | Rota   | Descrição                                |
| ------ | ------ | ---------------------------------------- |
| POST   | /users | Criação de um usuário                    |
| GET    | /users | Lista dados de um usuario auntenticado   |
| PATCH  | /users | Atualiza dados de um usuario autenticado |
| DELETE | /users | Deleta um usuario                        |

### 1.1 **Criação de Usuário**

[ Voltar para os Endpoints ](#3-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Host: localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"name": "guilherme",
	"email": "guilherme@mail.com",
	"password": "1234",
	"phone": "12345678911"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"name": "guilherme",
	"email": "guilherme@mail.com",
	"phone": "12345678911",
	"id": "15458a19-38e6-44aa-9479-57a5922deadd",
	"createdAt": "2023-03-26T20:38:45.132Z",
	"updatedAt": "2023-03-26T20:38:45.132Z",
	"deletedAt": null
}
```

---

### 1.2 **Listando Usuário**

[Voltar aos Endpoints](#3-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NDcyMDEsImV4cCI6MTY4MDAzMzYwMSwic3ViIjoiYTdiMWRkYTMtNjc0OC00MmRhLTg0NTUtNzY5OWNkNDQ0NTAxIn0.avRCVXpgFlYX60AAfttTm-5L40Y3aRxkA462XhCV0Ik
Content-type: application/json
```

É necessário passar token para capturar seu usuário

### Corpo da requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"name": "guilherme",
	"email": "guilherme@mail.com",
	"phone": "12345678911",
	"id": "15458a19-38e6-44aa-9479-57a5922deadd",
	"createdAt": "2023-03-26T20:38:45.132Z",
	"updatedAt": "2023-03-26T20:38:45.132Z",
	"deletedAt": null
}
```

---

### 1.3 **Atualização de Usuário**

[ Voltar para os Endpoints ](#3-endpoints)

### `/users`

### Exemplo de Request:

```
PATCH /users
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NDcyMDEsImV4cCI6MTY4MDAzMzYwMSwic3ViIjoiYTdiMWRkYTMtNjc0OC00MmRhLTg0NTUtNzY5OWNkNDQ0NTAxIn0.avRCVXpgFlYX60AAfttTm-5L40Y3aRxkA462XhCV0Ik
Content-type: application/json
```

É necessário passar token para capturar seu usuário

### Corpo da Requisição, Todos os campos são opcionais:

```json
{
	"name": "guilhermeatt",
	"email": "guilhermeatt@mail.com",
	"phone": "98765432111"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
	"name": "guilhermeatt",
	"email": "guilhermeatt@mail.com",
	"phone": "98765432111",
	"id": "a7b1dda3-6748-42da-8455-7699cd444501",
	"createdAt": "2023-03-23T20:55:50.852Z",
	"updatedAt": "2023-03-27T20:10:40.371Z",
	"deletedAt": null
}
```

---

### 1.4 **Deleção de Usuário**

[ Voltar para os Endpoints ](#3-endpoints)

### `/users`

### Exemplo de Request:

```
DELETE /user
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NDcyMDEsImV4cCI6MTY4MDAzMzYwMSwic3ViIjoiYTdiMWRkYTMtNjc0OC00MmRhLTg0NTUtNzY5OWNkNDQ0NTAxIn0.avRCVXpgFlYX60AAfttTm-5L40Y3aRxkA462XhCV0Ik
Content-type: application/json
```

É necessário passar token para capturar seu usuário

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 Ok
```

```
Vazio
```

---

## 2. **Contacts**

O Contato é dfinido como:

| Campo | Tipo   | Descrição                      |
| ----- | ------ | ------------------------------ |
| id    | string | Identificador único do contato |
| name  | string | O nome do contato.             |
| email | string | O e-mail do contato.           |

### Endpoints

| Método | Rota               | Descrição                                  |
| ------ | ------------------ | ------------------------------------------ |
| POST   | /users/contacts    | Criação de um contato                      |
| GET    | /users/contacts    | Lista contatos de um usuario auntenticado  |
| GET    | /users/contacts/id | Lista contatos de um usuario auntenticado  |
| PATCH  | /users/contacts/id | Atualiza contato de um usuario autenticado |
| DELETE | /users/contacts/id | Deleta um contato                          |

### 2.1 **Criação de Contato**

[ Voltar para os Endpoints ](#3-endpoints)

### `/users/contacts`

### Exemplo de Request:

```
POST /users/contacts
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NDcyMDEsImV4cCI6MTY4MDAzMzYwMSwic3ViIjoiYTdiMWRkYTMtNjc0OC00MmRhLTg0NTUtNzY5OWNkNDQ0NTAxIn0.avRCVXpgFlYX60AAfttTm-5L40Y3aRxkA462XhCV0Ik
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"name": "guilherme1",
	"email": "guilherme1@mail.com",
	"phone": "12345678911"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"name": "guilherme1",
	"email": "guilherme1@mail.com",
	"phone": "12345678911",
	"id": "13779d74-21cf-469f-b4a9-b13a34b78a01",
	"createdAt": "2023-03-27T20:16:08.200Z",
	"updatedAt": "2023-03-27T20:16:08.200Z",
	"deletedAt": null,
	"user": {
		"name": "guilherme",
		"email": "guilherme@mail.com",
		"phone": "12345678911",
		"id": "43a369ae-2353-4150-a8cd-f93e3a6a3ea0",
		"createdAt": "2023-03-27T20:15:08.328Z",
		"updatedAt": "2023-03-27T20:15:08.328Z",
		"deletedAt": null
	}
}
```

---

### 2.2 **Listando Contatos**

[Voltar aos Endpoints](#3-endpoints)

### `/users/contacts`

### Exemplo de Request:

```
GET /users/contacts
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NDcyMDEsImV4cCI6MTY4MDAzMzYwMSwic3ViIjoiYTdiMWRkYTMtNjc0OC00MmRhLTg0NTUtNzY5OWNkNDQ0NTAxIn0.avRCVXpgFlYX60AAfttTm-5L40Y3aRxkA462XhCV0Ik
Content-type: application/json
```

### Corpo da requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"name": "guilherme1",
		"email": "guilherme1@mail.com",
		"phone": "12345678911",
		"id": "13779d74-21cf-469f-b4a9-b13a34b78a01",
		"createdAt": "2023-03-27T20:16:08.200Z",
		"updatedAt": "2023-03-27T20:16:08.200Z",
		"deletedAt": null
	},
	{
		"name": "guilherme2",
		"email": "guilherme2@mail.com",
		"phone": "12345678911",
		"id": "34491721-cb14-4834-b7c2-57a72454ac3c",
		"createdAt": "2023-03-27T20:21:29.489Z",
		"updatedAt": "2023-03-27T20:21:29.489Z",
		"deletedAt": null
	}
]
```

---

### 2.3 **Listando Contatos**

[Voltar aos Endpoints](#3-endpoints)

### `/users/contacts/id`

### Exemplo de Request:

```
GET /users/contacts/13779d74-21cf-469f-b4a9-b13a34b78a01
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NDcyMDEsImV4cCI6MTY4MDAzMzYwMSwic3ViIjoiYTdiMWRkYTMtNjc0OC00MmRhLTg0NTUtNzY5OWNkNDQ0NTAxIn0.avRCVXpgFlYX60AAfttTm-5L40Y3aRxkA462XhCV0Ik
Content-type: application/json
```

### Corpo da requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"name": "guilherme1",
	"email": "guilherme1@mail.com",
	"phone": "12345678911",
	"id": "13779d74-21cf-469f-b4a9-b13a34b78a01",
	"createdAt": "2023-03-27T20:16:08.200Z",
	"updatedAt": "2023-03-27T20:16:08.200Z",
	"deletedAt": null,
	"user": {
		"name": "guilherme",
		"email": "guilherme@mail.com",
		"phone": "12345678911",
		"id": "43a369ae-2353-4150-a8cd-f93e3a6a3ea0",
		"createdAt": "2023-03-27T20:15:08.328Z",
		"updatedAt": "2023-03-27T20:15:08.328Z",
		"deletedAt": null
	}
}
```

---

### 2.4 **Atualização de Contato**

[ Voltar para os Endpoints ](#3-endpoints)

### `/users/contacts/id`

### Exemplo de Request:

```
PATCH /users/contacts/13779d74-21cf-469f-b4a9-b13a34b78a01
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NDcyMDEsImV4cCI6MTY4MDAzMzYwMSwic3ViIjoiYTdiMWRkYTMtNjc0OC00MmRhLTg0NTUtNzY5OWNkNDQ0NTAxIn0.avRCVXpgFlYX60AAfttTm-5L40Y3aRxkA462XhCV0Ik
Content-type: application/json
```

### Corpo da Requisição, Todos os campos são opcionais:

```json
{
	"name": "guilherme2- att"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
	"name": "guilherme2- att",
	"email": "guilherme1@mail.com",
	"phone": "12345678911",
	"id": "13779d74-21cf-469f-b4a9-b13a34b78a01",
	"createdAt": "2023-03-27T20:16:08.200Z",
	"updatedAt": "2023-03-27T20:28:01.503Z",
	"deletedAt": null,
	"user": {
		"name": "guilherme",
		"email": "guilherme@mail.com",
		"phone": "12345678911",
		"id": "43a369ae-2353-4150-a8cd-f93e3a6a3ea0",
		"createdAt": "2023-03-27T20:15:08.328Z",
		"updatedAt": "2023-03-27T20:15:08.328Z",
		"deletedAt": null
	}
}
```

---

### 2.5 **Deleção de Contato**

[ Voltar para os Endpoints ](#3-endpoints)

### `/users/contacts/id`

### Exemplo de Request:

```
DELETE /users/contacts/13779d74-21cf-469f-b4a9-b13a34b78a01
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NDcyMDEsImV4cCI6MTY4MDAzMzYwMSwic3ViIjoiYTdiMWRkYTMtNjc0OC00MmRhLTg0NTUtNzY5OWNkNDQ0NTAxIn0.avRCVXpgFlYX60AAfttTm-5L40Y3aRxkA462XhCV0Ik
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 Ok
```

```
Vazio
```

---

## 3. **Login**

O Login é dfinido como:

| Campo    | Tipo   | Descrição                    |
| -------- | ------ | ---------------------------- |
| email    | string | O e-mail do usuário.         |
| password | string | A senha de acesso do usuário |

### Endpoints

| Método | Rota   | Descrição                     |
| ------ | ------ | ----------------------------- |
| POST   | /login | Criação uma sessão de usuário |

### 3.1 **Realizando Login**

[ Voltar para os Endpoints ](#3-endpoints)

### `/login`

### Exemplo de Request:

```
POST /login
Host: localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"email": "guilherme@mail.com",
	"password": "1234"
}
```

### Exemplo de Response:

```
200 Created
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NDgxMTEsImV4cCI6MTY4MDAzNDUxMSwic3ViIjoiNDNhMzY5YWUtMjM1My00MTUwLWE4Y2QtZjkzZTNhNmEzZWEwIn0.uBT2_HWzejF6ITzt0aDvifsnZws4fZAv6F0nbyplhoY"
}
```

---
