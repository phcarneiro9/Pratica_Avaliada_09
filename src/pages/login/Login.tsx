import { useContext, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"

import { AuthContext } from "../../contexts/AuthContext"
import type UsuarioLogin from "../../models/UsuarioLogin"

function Login() {
	const navigate = useNavigate()

	const { handleLogin, isLoading } = useContext(AuthContext)

	const [usuarioLogin, setUsuarioLogin] =
		useState<UsuarioLogin>({
			email: "",
			senha: "",
			token: "",
		})

	function atualizarEstado(
		evento: ChangeEvent<HTMLInputElement>,
	) {
		const { name, value } = evento.target

		setUsuarioLogin((estadoAnterior) => ({
			...estadoAnterior,
			[name]: value,
		}))
	}

	async function fazerLogin(
		evento: FormEvent<HTMLFormElement>,
	) {
		evento.preventDefault()

		try {
			await handleLogin(usuarioLogin)

			alert("Usuário logado com sucesso!")
			navigate("/home")
		} catch (erro) {
			console.error("Erro ao realizar login:", erro)
			alert("Usuário ou senha inválidos.")
		}
	}

	return (
		<div
			className="grid grid-cols-1 lg:grid-cols-2
				min-h-screen place-items-center font-bold"
		>
			<form
				onSubmit={fazerLogin}
				className="flex justify-center items-center flex-col w-full max-w-sm px-6 sm:px-8 py-10 lg:py-3 gap-4"
			>
				<h2 className="text-blue-950 text-3xl sm:text-4xl lg:text-5xl text-center">
					Entrar
				</h2>

				<div className="flex flex-col w-full">
					<label htmlFor="email">E-mail</label>

					<input
						type="email"
						id="email"
						name="email"
						placeholder="E-mail"
						value={usuarioLogin.email}
						onChange={atualizarEstado}
						required
						className="border-2 border-blue-900 rounded p-2 w-full"
					/>
				</div>

				<div className="flex flex-col w-full">
					<label htmlFor="senha">Senha</label>

					<input
						type="password"
						id="senha"
						name="senha"
						placeholder="Senha"
						value={usuarioLogin.senha}
						onChange={atualizarEstado}
						required
						className="border-2 border-blue-900 rounded p-2 w-full"
					/>
				</div>

				<button
					type="submit"
					disabled={isLoading}
					className="rounded bg-blue-500 hover:bg-blue-950 disabled:bg-blue-300 flex justify-center text-white w-full sm:w-2/3 py-2"
				>
					{isLoading ? (
						<ClipLoader color="#ffffff" size={24} />
					) : (
						<span>Entrar</span>
					)}
				</button>

				<hr className="border-slate-800 w-full" />

				<p className="text-center">
					Ainda não tem uma conta?{" "}
					<Link
						to="/cadastro"
						className="text-blue-700 hover:underline"
					>
						Cadastre-se
					</Link>
				</p>
			</form>

			<div
				className="bg-[url('https://i.imgur.com/2jDMgHn.jpg')]
					lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"
			/>
		</div>
	)
}

export default Login
