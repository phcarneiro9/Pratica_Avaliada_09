import { Link } from "react-router-dom"

import type Categoria from "../../../models/Categoria"

interface CardCategoriasProps {
	categoria: Categoria
}

function CardCategorias({
	categoria,
}: CardCategoriasProps) {
	return (
		<div className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-sm border-blue-100">
			<header className="py-2 px-6 bg-blue-900 text-white font-bold text-2xl">
				Categoria
			</header>

			<div className="p-6 bg-white h-full">
				<p className="text-2xl font-bold text-blue-950">{categoria.tipo}</p>
				<p className="mt-2 text-slate-600">{categoria.descricao}</p>
			</div>

			<div className="flex">
				<Link
					to={`/editarcategoria/${categoria.id}`}
					className="w-full text-slate-100 bg-blue-600 hover:bg-blue-700 flex items-center justify-center py-2"
				>
					Editar
				</Link>

				<Link
					to={`/deletarcategoria/${categoria.id}`}
					className="w-full text-slate-100 bg-red-400 hover:bg-red-700 flex items-center justify-center py-2"
				>
					Deletar
				</Link>
			</div>
		</div>
	)
}

export default CardCategorias