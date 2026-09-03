import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"

import type Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/AuthService"

function Cadastro() {
	const navigate = useNavigate()

	const [usuario, setUsuario] = useState<Usuario>({
		nome: "",
		email: "",
		senha: "",
		idade: 18,
	})

	const [confirmarSenha, setConfirmarSenha] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	function atualizarEstado(evento: ChangeEvent<HTMLInputElement>) {
		const { name, value } = evento.target

		setUsuario((estadoAnterior) => ({
			...estadoAnterior,
			[name]: name === "idade" ? Number(value) : value,
		}))
	}

	function validarFormulario(): boolean {
		if (usuario.senha.length < 8) {
			alert("A senha deve possuir pelo menos 8 caracteres.")
			return false
		}

		if (usuario.senha !== confirmarSenha) {
			alert("As senhas não são iguais.")
			return false
		}

		if (usuario.idade < 18) {
			alert("É necessário ter 18 anos ou mais.")
			return false
		}

		return true
	}

	async function cadastrarNovoUsuario(evento: FormEvent<HTMLFormElement>) {
		evento.preventDefault()

		if (!validarFormulario()) return

		setIsLoading(true)

		try {
			await cadastrarUsuario(usuario)
			alert("Usuário cadastrado com sucesso!")
			navigate("/")
		} catch (erro) {
			console.error("Erro ao cadastrar usuário:", erro)
			alert("Não foi possível cadastrar o usuário.")
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen place-items-center font-bold bg-slate-50">
			<div className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 lg:flex hidden w-full min-h-screen items-center justify-center p-12 text-white">
				<div className="max-w-lg">
					<p className="text-blue-200 uppercase tracking-[0.25em] text-sm mb-4">Blue Games</p>
					<h1 className="text-5xl font-black leading-tight mb-5">
						Sua próxima aventura começa aqui.
					</h1>
					<p className="text-blue-100 text-lg">
						Crie sua conta e explore produtos, categorias e seu carrinho em uma experiência moderna e responsiva.
					</p>
				</div>
			</div>

			<form
				onSubmit={cadastrarNovoUsuario}
				className="flex justify-center items-center flex-col w-full max-w-md px-6 sm:px-8 py-10 gap-4"
			>
				<h2 className="text-blue-950 text-3xl sm:text-4xl text-center">
					Criar conta
				</h2>

				<div className="flex flex-col w-full gap-1">
					<label htmlFor="nome">Nome</label>
					<input
						type="text"
						id="nome"
						name="nome"
						placeholder="Seu nome"
						value={usuario.nome}
						onChange={atualizarEstado}
						className="border-2 border-blue-200 focus:border-blue-600 outline-none rounded-lg p-2.5 w-full"
						required
					/>
				</div>

				<div className="flex flex-col w-full gap-1">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="voce@email.com"
						value={usuario.email}
						onChange={atualizarEstado}
						className="border-2 border-blue-200 focus:border-blue-600 outline-none rounded-lg p-2.5 w-full"
						required
					/>
				</div>

				<div className="flex flex-col w-full gap-1">
					<label htmlFor="idade">Idade</label>
					<input
						type="number"
						id="idade"
						name="idade"
						min={18}
						value={usuario.idade}
						onChange={atualizarEstado}
						className="border-2 border-blue-200 focus:border-blue-600 outline-none rounded-lg p-2.5 w-full"
						required
					/>
				</div>

				<div className="flex flex-col w-full gap-1">
					<label htmlFor="senha">Senha</label>
					<input
						type="password"
						id="senha"
						name="senha"
						placeholder="Mínimo de 8 caracteres"
						value={usuario.senha}
						onChange={atualizarEstado}
						className="border-2 border-blue-200 focus:border-blue-600 outline-none rounded-lg p-2.5 w-full"
						required
					/>
				</div>

				<div className="flex flex-col w-full gap-1">
					<label htmlFor="confirmarSenha">Confirmar senha</label>
					<input
						type="password"
						id="confirmarSenha"
						name="confirmarSenha"
						placeholder="Repita sua senha"
						value={confirmarSenha}
						onChange={(evento) => setConfirmarSenha(evento.target.value)}
						className="border-2 border-blue-200 focus:border-blue-600 outline-none rounded-lg p-2.5 w-full"
						required
					/>
				</div>

				<div className="flex flex-col sm:flex-row w-full gap-3 pt-2">
					<button
						type="button"
						onClick={() => navigate("/")}
						className="rounded-lg text-blue-900 border-2 border-blue-200 hover:bg-blue-50 w-full py-2.5"
					>
						Cancelar
					</button>

					<button
						type="submit"
						disabled={isLoading}
						className="rounded-lg text-white bg-blue-600 hover:bg-blue-800 disabled:bg-blue-300 w-full py-2.5 flex justify-center"
					>
						{isLoading ? (
							<ClipLoader color="#ffffff" size={24} />
						) : (
							<span>Cadastrar</span>
						)}
					</button>
				</div>
			</form>
		</div>
	)
}

export default Cadastro