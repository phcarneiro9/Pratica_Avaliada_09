# Prática Avaliada 09 — Loja Games

Projeto React + TypeScript desenvolvido para a Prática Avaliada 09, reunindo CRUD de categorias e produtos, autenticação, perfil e carrinho de compras.

## Funcionalidades

- Cadastro e login de usuários
- Persistência da sessão no `localStorage`
- Rotas protegidas para áreas autenticadas
- CRUD completo de categorias
- CRUD completo de produtos
- Busca de produtos
- Modal de produto
- Carrinho de compras
- Perfil do usuário
- Feedback visual com loaders e alertas
- Layout responsivo com Tailwind CSS

## Organização

A comunicação com a API foi separada por responsabilidade:

- `services/api.ts`: instância Axios e interceptor do token
- `services/AuthService.ts`: autenticação e cadastro
- `services/CategoriaService.ts`: operações de categorias
- `services/ProdutoService.ts`: operações de produtos

O token é incluído automaticamente nas requisições autenticadas pelo interceptor do Axios.

## Configuração

Crie um arquivo `.env` na raiz usando o `.env.example` como referência:

```env
VITE_API_URL=http://localhost:8082
```

Ajuste a URL conforme o endereço do backend.

## Executar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```


## Integração com o backend Loja_Games_API

Este frontend foi alinhado com o backend `phcarneiro9/Loja_Games_API`:

- Login: `POST /auth/login`
- Cadastro: `POST /auth/register`
- Produtos: `/produtos`
- Categorias: `/categorias`
- Autenticação: JWT no header `Authorization: Bearer <token>`
- Backend local: porta `8082`

Para rodar localmente, crie um arquivo `.env` com:

```env
VITE_API_URL=http://localhost:8082
```

Para deploy, troque o valor pela URL pública do backend.
