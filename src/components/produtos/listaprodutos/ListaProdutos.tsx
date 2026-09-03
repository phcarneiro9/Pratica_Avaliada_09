import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"

import { AuthContext } from "../../../contexts/AuthContext"
import type Produto from "../../../models/Produto"
import { buscarProdutos } from "../../../services/ProdutoService"
import CardProduto from "../cardprodutos/CardProduto"

function ListaProdutos() {
	const navigate = useNavigate()
	const { usuario } = useContext(AuthContext)

	const [produtos, setProdutos] = useState<Produto[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (usuario.token === "") {
			navigate("/")
			return
		}

		async function carregarProdutos() {
			try {
				const resposta = await buscarProdutos()
				setProdutos(resposta)
			} catch (erro) {
				console.error("Erro ao buscar produtos:", erro)
				alert("Não foi possível carregar os produtos.")
			} finally {
				setIsLoading(false)
			}
		}

		void carregarProdutos()
	}, [usuario.token, navigate])

	if (usuario.token === "") {
		return null
	}

	if (isLoading) {
		return (
			<div className="flex justify-center items-center min-h-[50vh]">
				<ClipLoader color="#334155" size={50} />
			</div>
		)
	}

	return (
		<div className="flex justify-center mt-6 md:mt-8">
			<div className="container flex flex-col m-2 md:my-0">
				<div className="flex flex-wrap items-center justify-between gap-4 px-2 pt-2 md:px-4">
					<div>
						<h1 className="text-3xl font-bold text-slate-800">
							Produtos
						</h1>
						<p className="mt-1 text-slate-600">
							Confira os itens disponíveis na loja.
						</p>
					</div>

					<Link
						to="/cadastrarproduto"
						className="rounded bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-800"
					>
						Novo Produto
					</Link>
				</div>

				{produtos.length === 0 ? (
					<p className="py-12 text-xl text-center">
						Nenhum produto encontrado.
					</p>
				) : (
					<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 mb-4 md:mb-0 p-2 md:p-4">
						{produtos.map((produto) => (
							<CardProduto
								key={produto.id}
								produto={produto}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default ListaProdutos
