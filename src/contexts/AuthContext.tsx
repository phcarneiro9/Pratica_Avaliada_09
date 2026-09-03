import { createContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

import type UsuarioLogin from "../models/UsuarioLogin"
import { autenticarUsuario } from "../services/AuthService"

interface AuthContextData {
	usuario: UsuarioLogin
	isLoading: boolean
	autenticado: boolean
	handleLogin(usuarioLogin: UsuarioLogin): Promise<void>
	handleLogout(): void
}

interface AuthProviderProps {
	children: ReactNode
}

const usuarioInicial: UsuarioLogin = {
	email: "",
	senha: "",
	token: "",
}

const CHAVE_TOKEN = "@lojagames:token"
const CHAVE_USUARIO = "@lojagames:usuario"

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
	const [usuario, setUsuario] = useState<UsuarioLogin>(usuarioInicial)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const usuarioSalvo = localStorage.getItem(CHAVE_USUARIO)
		const tokenSalvo = localStorage.getItem(CHAVE_TOKEN)

		if (usuarioSalvo && tokenSalvo) {
			try {
				const dados = JSON.parse(usuarioSalvo) as UsuarioLogin
				setUsuario({ ...dados, senha: "", token: tokenSalvo })
			} catch {
				localStorage.removeItem(CHAVE_USUARIO)
				localStorage.removeItem(CHAVE_TOKEN)
			}
		}

		setIsLoading(false)
	}, [])

	async function handleLogin(usuarioLogin: UsuarioLogin): Promise<void> {
		setIsLoading(true)

		try {
			const usuarioAutenticado = await autenticarUsuario(usuarioLogin)
			localStorage.setItem(CHAVE_TOKEN, usuarioAutenticado.token)
			localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuarioAutenticado))
			setUsuario(usuarioAutenticado)
		} finally {
			setIsLoading(false)
		}
	}

	function handleLogout() {
		localStorage.removeItem(CHAVE_TOKEN)
		localStorage.removeItem(CHAVE_USUARIO)
		setUsuario(usuarioInicial)
	}

	return (
		<AuthContext.Provider
			value={{
				usuario,
				isLoading,
				autenticado: Boolean(usuario.token),
				handleLogin,
				handleLogout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
