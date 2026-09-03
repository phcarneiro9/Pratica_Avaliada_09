import { PencilIcon, ShoppingCartIcon, TrashIcon } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../contexts/CartContext"
import type Produto from "../../../models/Produto"

interface CardProdutoProps { produto: Produto }

function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto } = useContext(CartContext)
  const precoFormatado = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(produto.preco))

  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-end gap-1 p-3">
        <Link to={`/editarproduto/${produto.id}`} aria-label={`Editar ${produto.nome}`} className="rounded-lg p-2 text-slate-500 hover:bg-blue-50 hover:text-blue-700"><PencilIcon size={20} /></Link>
        <Link to={`/deletarproduto/${produto.id}`} aria-label={`Deletar ${produto.nome}`} className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"><TrashIcon size={20} /></Link>
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 sm:px-5">
        <div className="flex h-44 items-center justify-center rounded-xl bg-slate-50 p-3 sm:h-48">
          <img src={produto.foto} className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105" alt={produto.nome} />
        </div>
        <div className="flex flex-1 flex-col pt-5 text-center">
          <span className="mx-auto rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{produto.categoria?.tipo ?? "Sem categoria"}</span>
          <h3 className="mt-3 line-clamp-2 text-base font-bold uppercase text-slate-800 sm:text-lg">{produto.nome}</h3>
          <p className="mt-auto pt-4 text-2xl font-black text-blue-700">{precoFormatado}</p>
        </div>
      </div>
      <button type="button" onClick={() => adicionarProduto(produto)} className="flex w-full items-center justify-center gap-2 bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700 active:bg-blue-800"><ShoppingCartIcon size={20} weight="bold" /> Adicionar ao carrinho</button>
    </article>
  )
}
export default CardProduto
