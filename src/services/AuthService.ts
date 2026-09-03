import type Usuario from "../models/Usuario"
import type UsuarioLogin from "../models/UsuarioLogin"
import api from "./api"

interface RespostaLogin {
	token: string
}

export async function cadastrarUsuario(usuario: Usuario): Promise<Usuario> {
	const resposta = await api.post<Usuario>("/auth/register", usuario)
	return resposta.data
}

export async function autenticarUsuario(usuarioLogin: UsuarioLogin): Promise<UsuarioLogin> {
	const resposta = await api.post<RespostaLogin>("/auth/login", {
		email: usuarioLogin.email,
		senha: usuarioLogin.senha,
	})

	return {
		email: usuarioLogin.email,
		senha: "",
		token: resposta.data.token,
	}
}
