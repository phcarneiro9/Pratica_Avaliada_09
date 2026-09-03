# Prática Avaliada 09 — Loja Games

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

</div>

<br>

Projeto desenvolvido em **React + TypeScript** para a **Prática Avaliada 09**, com integração a uma API REST desenvolvida em Spring Boot.

A aplicação simula uma **Loja de Games**, permitindo o gerenciamento de categorias e produtos, autenticação de usuários, controle de sessão, perfil e carrinho de compras.

---

## Funcionalidades

- Cadastro e login de usuários
- Persistência da sessão com `localStorage`
- Rotas protegidas para usuários autenticados
- CRUD completo de categorias
- CRUD completo de produtos
- Busca de produtos
- Visualização de produtos em modal
- Carrinho de compras
- Perfil do usuário
- Feedback visual com loaders
- Alertas para ações e erros
- Layout responsivo
- Interface estilizada com Tailwind CSS

---

## Tecnologias utilizadas

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Spinners
- React Number Format

### Backend

O frontend está integrado ao projeto **Loja Games API**.

Repositório:

https://github.com/phcarneiro9/Loja_Games_API

Backend desenvolvido com:

- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT
- MySQL
- Maven

---

## Integração com a API

A aplicação consome os seguintes endpoints principais:

| Recurso | Método | Endpoint |
|---|---|---|
| Login | `POST` | `/auth/login` |
| Cadastro | `POST` | `/auth/register` |
| Listar Produtos | `GET` | `/produtos` |
| Cadastrar Produto | `POST` | `/produtos` |
| Atualizar Produto | `PUT` | `/produtos` |
| Excluir Produto | `DELETE` | `/produtos/{id}` |
| Listar Categorias | `GET` | `/categorias` |
| Cadastrar Categoria | `POST` | `/categorias` |
| Atualizar Categoria | `PUT` | `/categorias` |
| Excluir Categoria | `DELETE` | `/categorias/{id}` |

As requisições protegidas utilizam autenticação JWT através do header:

```text
Authorization: Bearer <token>
```

---

## Organização do projeto

```text
src/
├── components/
│   ├── auth/
│   ├── carrinho/
│   ├── categorias/
│   ├── footer/
│   ├── navbar/
│   └── produtos/
│
├── contexts/
│   ├── AuthContext.tsx
│   └── CartContext.tsx
│
├── models/
│   ├── Categoria.ts
│   ├── Produto.ts
│   ├── Usuario.ts
│   └── UsuarioLogin.ts
│
├── pages/
│   ├── cadastro/
│   ├── home/
│   ├── login/
│   └── perfil/
│
├── services/
│   ├── api.ts
│   ├── AuthService.ts
│   ├── CategoriaService.ts
│   └── ProdutoService.ts
│
├── App.tsx
└── main.tsx
```

### Services

- `api.ts` — configuração da instância Axios e interceptor JWT
- `AuthService.ts` — autenticação e cadastro de usuários
- `CategoriaService.ts` — comunicação com endpoints de categorias
- `ProdutoService.ts` — comunicação com endpoints de produtos

O token salvo no `localStorage` é adicionado automaticamente às requisições autenticadas através do interceptor do Axios.

---

## Configuração

Na raiz do projeto, crie um arquivo `.env`.

Utilize o `.env.example` como referência.

### Backend local

```env
VITE_API_URL=http://localhost:8082
```

### Backend em produção

```env
VITE_API_URL=https://loja-games-api.onrender.com
```

> O arquivo `.env` não deve ser enviado para o GitHub.

---

## Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/phcarneiro9/Pratica_Avaliada_09.git
```

Entre na pasta:

```bash
cd Pratica_Avaliada_09
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta:

```text
dist/
```

---

## Deploy

### Backend

O backend está publicado no Render:

```text
https://loja-games-api.onrender.com
```

### Frontend

O frontend pode ser publicado utilizando o **Render Static Site**.

Configuração:

```text
Build Command:
npm install && npm run build

Publish Directory:
dist
```

Variável de ambiente:

```env
VITE_API_URL=https://loja-games-api.onrender.com
```

---

## Autenticação

Após realizar o login, o backend retorna um token JWT.

O token é armazenado no `localStorage` e enviado automaticamente nas requisições protegidas:

```text
Authorization: Bearer <token>
```

As páginas protegidas verificam o estado de autenticação antes de permitir o acesso.

---

## Responsividade

A interface foi desenvolvida para funcionar em diferentes tamanhos de tela:

- Desktop
- Notebook
- Tablet
- Smartphone

A responsividade foi implementada utilizando **Tailwind CSS**.

---

## Autor

**Patrick Carneiro**

[GitHub — phcarneiro9](https://github.com/phcarneiro9)

---

<div align="center">

Desenvolvido para a <strong>Prática Avaliada 09 — Loja Games</strong>

</div>
