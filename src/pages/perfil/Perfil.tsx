import { useContext } from "react"
import { EnvelopeSimple, ShieldCheck, UserCircle } from "@phosphor-icons/react"
import { AuthContext } from "../../contexts/AuthContext"

function Perfil() {
	const { usuario } = useContext(AuthContext)

	return (
		<main className="container mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12">
			<section className="overflow-hidden rounded-3xl bg-white shadow-xl border border-blue-100">
				<div className="h-36 sm:h-48 bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500" />
				<div className="px-5 sm:px-10 pb-8">
					<div className="-mt-14 sm:-mt-16 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white shadow-lg flex items-center justify-center border-4 border-white">
						<UserCircle size={82} weight="duotone" className="text-blue-700" />
					</div>
					<h1 className="mt-5 text-2xl sm:text-3xl font-black text-blue-950">Meu perfil</h1>
					<p className="text-slate-500 mt-1">Informações da sua sessão atual.</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
						<div className="rounded-2xl bg-blue-50 p-5 flex items-center gap-4">
							<EnvelopeSimple size={28} className="text-blue-700 shrink-0" />
							<div className="min-w-0"><p className="text-sm text-slate-500">E-mail</p><p className="font-bold text-blue-950 break-all">{usuario.email}</p></div>
						</div>
						<div className="rounded-2xl bg-emerald-50 p-5 flex items-center gap-4">
							<ShieldCheck size={28} className="text-emerald-700 shrink-0" />
							<div><p className="text-sm text-slate-500">Status</p><p className="font-bold text-emerald-800">Sessão autenticada</p></div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Perfil
