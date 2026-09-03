import { useContext, useEffect, useState } from "react"
import type { FormEvent } from "react"
import {
	useNavigate,
	useParams,
} from "react-router-dom"
import { ClipLoader } from "react-spinners"

import { AuthContext } from "../../../contexts/AuthContext"
import type Categoria from "../../../models/Categoria"
import {
	atualizarCategoria,
	buscarCategoriaPorId,
	cadastrarCategoria,
} from "../../../services/CategoriaService"

function FormCategoria() {
	const navigate = useNavigate()
	const { id } = useParams<{ id: string }>()
	const { usuario } = useContext(AuthContext)

	const estaEditando = id !== undefined

	const [categoria, setCategoria] = useState<Categoria>({
		tipo: "",
		descricao: "",
	})

	const [isLoading, setIsLoading] =
		useState(estaEditando)

	useEffect(() => {
		if (usuario.token === "") {
			navigate("/")
			return
		}

		if (!estaEditando) {
			return
		}

		const idCategoria = Number(id)

		if (Number.isNaN(idCategoria)) {
			alert("Identificação da categoria inválida.")
			navigate("/categorias")
			return
		}

		async function carregarCategoria() {
			try {
				const resposta =
					await buscarCategoriaPorId(idCategoria)

				setCategoria(resposta)
			} catch (erro) {
				console.error(
					"Erro ao buscar categoria:",
					erro,
				)
				alert("Não foi possível carregar a categoria.")
				navigate("/categorias")
			} finally {
				setIsLoading(false)
			}
		}

		void carregarCategoria()
	}, [
		estaEditando,
		id,
		usuario.token,
		navigate,
	])

	async function salvarCategoria(
		evento: FormEvent<HTMLFormElement>,
	) {
		evento.preventDefault()

		const tipoTratado = categoria.tipo.trim()

		if (
			tipoTratado.length < 3 ||
			tipoTratado.length > 100
		) {
			alert(
				"A categoria deve possuir entre 3 e 100 caracteres.",
			)
			return
		}

		const descricaoTratada =
			categoria.descricao.trim()

		if (
			descricaoTratada.length < 5 ||
			descricaoTratada.length > 255
		) {
			alert(
				"A descrição deve possuir entre 5 e 255 caracteres.",
			)
			return
		}

		const categoriaParaEnviar: Categoria = {
			...categoria,
			tipo: tipoTratado,
			descricao: descricaoTratada,
		}

		setIsLoading(true)

		try {
			if (estaEditando) {
				await atualizarCategoria(
					categoriaParaEnviar,
				)

				alert(
					"Categoria atualizada com sucesso!",
				)
			} else {
				await cadastrarCategoria(
					categoriaParaEnviar,
				)

				alert(
					"Categoria cadastrada com sucesso!",
				)
			}

			navigate("/categorias")
		} catch (erro) {
			console.error(
				"Erro ao salvar categoria:",
				erro,
			)
			alert(
				"Não foi possível salvar a categoria.",
			)
		} finally {
			setIsLoading(false)
		}
	}

	if (usuario.token === "") {
		return null
	}

	if (
		isLoading &&
		estaEditando &&
		!categoria.id
	) {
		return (
			<div className="flex justify-center items-center min-h-[50vh]">
				<ClipLoader
					color="#334155"
					size={50}
				/>
			</div>
		)
	}

	return (
		<div className="container flex flex-col items-center justify-center px-2 pt-4 mx-auto">
			<h1 className="my-8 text-3xl text-center md:text-4xl">
				{estaEditando
					? "Editar Categoria"
					: "Cadastrar Categoria"}
			</h1>

			<form
				onSubmit={salvarCategoria}
				className="flex flex-col w-full max-w-md gap-4 px-2 md:max-w-1/2"
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="tipo">
						Categoria
					</label>

					<input
						type="text"
						placeholder="Categoria"
						id="tipo"
						name="tipo"
						value={categoria.tipo}
						onChange={(evento) =>
							setCategoria({
								...categoria,
								tipo:
									evento.target.value,
							})
						}
						disabled={isLoading}
						maxLength={100}
						className="p-2 text-base bg-white border-2 rounded border-blue-900 md:text-lg"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="descricao">
						Descrição
					</label>

					<textarea
						id="descricao"
						name="descricao"
						placeholder="Descreva a categoria"
						value={categoria.descricao}
						onChange={(evento) =>
							setCategoria({
								...categoria,
								descricao:
									evento.target.value,
							})
						}
						disabled={isLoading}
						maxLength={255}
						className="p-2 text-base bg-white border-2 rounded border-blue-900 md:text-lg min-h-28 resize-y"
					/>
				</div>

				<button
					type="submit"
					disabled={isLoading}
					className="flex justify-center w-full py-2 mx-auto text-base rounded text-slate-100 bg-blue-500 hover:bg-blue-950 disabled:bg-blue-300 md:w-1/2 md:text-lg"
				>
					{isLoading ? (
						<ClipLoader
							color="#ffffff"
							size={24}
						/>
					) : (
						<span>
							{estaEditando
								? "Atualizar"
								: "Cadastrar"}
						</span>
					)}
				</button>
			</form>
		</div>
	)
}

export default FormCategoria
