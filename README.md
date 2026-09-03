<div align="center">

# Prática Avaliada 09 — Loja Games

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Aplicação Online

https://pratica-avaliada-09.onrender.com

</div>

Projeto desenvolvido em **React + TypeScript**, integrado a uma API REST em **Spring Boot**.

A aplicação simula uma Loja Games com autenticação, CRUD de categorias e produtos, perfil e carrinho de compras.

---

## Funcionalidades

- Cadastro e login
- Rotas protegidas
- CRUD de categorias
- CRUD de produtos
- Busca de produtos
- Carrinho de compras
- Perfil do usuário
- Layout responsivo

---

## Tecnologias

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend

- Java
- Spring Boot
- Spring Security
- JWT
- MySQL

Backend:

https://github.com/phcarneiro9/Loja_Games_API

---

## API

Principais endpoints:

```text
POST /auth/login
POST /auth/register

GET    /produtos
POST   /produtos
PUT    /produtos
DELETE /produtos/{id}

GET    /categorias
POST   /categorias
PUT    /categorias
DELETE /categorias/{id}
```

Autenticação:

```text
Authorization: Bearer <token>
```

---

## Configuração

Crie um arquivo `.env`:

```env
VITE_API_URL=https://loja-games-api.onrender.com
```

Para ambiente local:

```env
VITE_API_URL=http://localhost:8082
```

---

## Executar

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

---

## Deploy

Frontend:

```text
https://pratica-avaliada-09.onrender.com
```

Backend:

```text
https://loja-games-api.onrender.com
```

CORS:

```text
http://localhost:5173,https://pratica-avaliada-09.onrender.com
```

---

## Autor

**Patrick Carneiro**

https://github.com/phcarneiro9
</div>
