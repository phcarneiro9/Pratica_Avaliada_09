import type Categoria from "../models/Categoria"
import api from "./api"

export async function buscarCategorias(): Promise<Categoria[]> {
	const resposta = await api.get<Categoria[]>("/categorias")
	return resposta.data
}

export async function buscarCategoriaPorId(id: number): Promise<Categoria> {
	const resposta = await api.get<Categoria>(`/categorias/${id}`)
	return resposta.data
}

export async function cadastrarCategoria(categoria: Categoria): Promise<Categoria> {
	const resposta = await api.post<Categoria>("/categorias", categoria)
	return resposta.data
}

export async function atualizarCategoria(categoria: Categoria): Promise<Categoria> {
	const resposta = await api.put<Categoria>("/categorias", categoria)
	return resposta.data
}

export async function deletarCategoria(id: number): Promise<void> {
	await api.delete(`/categorias/${id}`)
}
