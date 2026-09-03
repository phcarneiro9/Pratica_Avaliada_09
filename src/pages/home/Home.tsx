import { GameControllerIcon, ShieldCheckIcon, ShoppingCartIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import ModalProduto from "../../components/produtos/modalproduto/ModalProduto"

function Home() {
  return (
    <div className="w-full bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:min-h-[560px] md:grid-cols-2 md:py-16 lg:px-8 lg:py-20">
          <div className="relative z-10 text-center md:text-left">
            <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">Sua próxima aventura começa aqui</span>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Games, diversão e tecnologia em um só lugar.</h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-blue-100 sm:text-lg md:mx-0">Explore nossa seleção de jogos, encontre seus favoritos e monte seu carrinho com uma experiência simples e rápida.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link to="/produtos" className="rounded-xl bg-white px-6 py-3 font-bold text-blue-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50">Ver produtos</Link>
              <div className="[&>button]:w-full sm:[&>button]:w-auto"><ModalProduto /></div>
            </div>
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
              <img src="https://ik.imagekit.io/vzr6ryejm/games/home.png?updatedAt=1705970755605" alt="Jogos em destaque" className="h-60 w-full object-contain sm:h-72 md:h-80 lg:h-96" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8 lg:py-12">
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><GameControllerIcon size={25} weight="bold" /></div>
          <h2 className="text-lg font-bold text-slate-900">Catálogo variado</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">Encontre jogos de diferentes categorias.</p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><ShoppingCartIcon size={25} weight="bold" /></div>
          <h2 className="text-lg font-bold text-slate-900">Compra simples</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">Adicione seus favoritos ao carrinho em poucos cliques.</p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><ShieldCheckIcon size={25} weight="bold" /></div>
          <h2 className="text-lg font-bold text-slate-900">Experiência segura</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">Navegação organizada e acesso protegido para sua conta.</p>
        </div>
      </section>
    </div>
  )
}
export default Home
