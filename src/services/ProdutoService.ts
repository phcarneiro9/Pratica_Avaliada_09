import type Produto from "../models/Produto"
import api from "./api"

export async function buscarProdutos(): Promise<Produto[]> {
	const resposta = await api.get<Produto[]>("/produtos")
	return resposta.data
}

export async function buscarProdutoPorId(id: number): Promise<Produto> {
	const resposta = await api.get<Produto>(`/produtos/${id}`)
	return resposta.data
}

export async function cadastrarProduto(produto: Produto): Promise<Produto> {
	const resposta = await api.post<Produto>("/produtos", produto)
	return resposta.data
}

export async function atualizarProduto(produto: Produto): Promise<Produto> {
	const resposta = await api.put<Produto>("/produtos", produto)
	return resposta.data
}

export async function deletarProduto(id: number): Promise<void> {
	await api.delete(`/produtos/${id}`)
}
