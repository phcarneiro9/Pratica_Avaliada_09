import { ShoppingCartIcon } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { CartContext } from "../../../contexts/CartContext"
import CardCart from "../cardcart/CardCart"

function formatarPreco(valor: number) {
	return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(valor)
}

function Cart() {
	const { items, quantidadeItems, valorTotal, limparCarrinho } =
		useContext(CartContext)

	function finalizarCompra() {
		alert("Compra finalizada com sucesso!")
		limparCarrinho()
	}

	return (
		<div className="min-h-screen bg-gray-100 py-8">
			<div className="container mx-auto px-4">
				<h1 className="text-3xl md:text-4xl text-center text-gray-800 mb-8">
					Carrinho de Compras
				</h1>

				{items.length === 0 ? (
					<div className="flex flex-col items-center rounded-lg bg-white px-6 py-16 text-center shadow-sm">
						<ShoppingCartIcon
							size={64}
							className="text-gray-300"
						/>
						<h2 className="mt-4 text-2xl font-bold text-gray-800">
							Seu carrinho está vazio
						</h2>
						<p className="mt-2 text-gray-600">
							Adicione alguns jogos para começar.
						</p>
						<Link
							to="/produtos"
							className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-900"
						>
							Ver produtos
						</Link>
					</div>
				) : (
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2 space-y-4">
							{items.map((item) => (
								<CardCart key={item.id} item={item} />
							))}
						</div>

						<div className="lg:col-span-1">
							<div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
								<h2 className="text-xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
									Resumo da Compra
								</h2>

								<div className="space-y-3 mb-6">
									<div className="flex justify-between text-gray-600">
										<span>
											Produtos ({quantidadeItems})
										</span>
										<span className="font-semibold text-gray-800">
											{formatarPreco(valorTotal)}
										</span>
									</div>

									<div className="flex justify-between text-gray-600">
										<span>Frete</span>
										<span className="font-semibold text-green-600">
											Grátis
										</span>
									</div>

									<div className="flex justify-between text-gray-600">
										<span>Desconto</span>
										<span className="font-semibold text-gray-800">
											{formatarPreco(0)}
										</span>
									</div>
								</div>

								<div className="flex justify-between items-center text-lg font-bold py-4 mb-6 border-t border-gray-200">
									<span className="text-gray-800">Total</span>
									<span className="text-2xl text-blue-600">
										{formatarPreco(valorTotal)}
									</span>
								</div>

								<div className="mb-4 pb-4 border-b border-gray-200">
									<p className="text-sm text-gray-600 mb-3">
										Formas de pagamento:
									</p>
									<div className="flex flex-wrap gap-2 justify-center">
										<div className="flex flex-row bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img
												src="https://ik.imagekit.io/vzr6ryejm/ecommerce/credit-card.png"
												alt="Cartão de crédito"
												className="w-10"
											/>
										</div>
										<div className="flex flex-row items-center gap-1 bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img
												src="https://ik.imagekit.io/vzr6ryejm/ecommerce/pix-svgrepo-com.svg"
												alt="PIX"
												className="w-4"
											/>
											<span>PIX</span>
										</div>
										<div className="flex flex-row bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img
												src="https://ik.imagekit.io/vzr6ryejm/ecommerce/google-pay-svgrepo-com.svg"
												alt="Google Pay"
												className="w-8"
											/>
										</div>
										<div className="flex flex-row bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img
												src="https://ik.imagekit.io/vzr6ryejm/ecommerce/apple-pay-svgrepo-com.svg"
												alt="Apple Pay"
												className="w-8"
											/>
										</div>
										<div className="bg-gray-100 p-2 rounded text-xs font-semibold text-gray-700">
											<img
												src="https://ik.imagekit.io/vzr6ryejm/ecommerce/boleto-logo.svg"
												alt="Boleto bancário"
												className="w-10"
											/>
										</div>
									</div>
								</div>

								<button
									type="button"
									onClick={finalizarCompra}
									className="w-full bg-blue-500 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition-colors"
								>
									Finalizar Compra
								</button>

								<p className="text-xs text-gray-500 text-center mt-4">
									Frete grátis para todo o Brasil
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
