import { useContext, useState } from "react"
import { ListIcon, ShoppingCartIcon, SignOutIcon, UserIcon, XIcon } from "@phosphor-icons/react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { CartContext } from "../../contexts/CartContext"
import SearchForm from "./SearchForm"

function Navbar() {
  const navigate = useNavigate()
  const { usuario, handleLogout } = useContext(AuthContext)
  const { quantidadeItems } = useContext(CartContext)
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() { setMenuAberto(false) }
  function sair() {
    fecharMenu()
    handleLogout()
    alert("Usuário desconectado com sucesso!")
    navigate("/")
  }

  if (usuario.token === "") return null

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-950 text-white shadow-lg shadow-blue-950/10">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/home" onClick={fecharMenu} className="shrink-0">
          <img src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png" alt="Logo da Loja de Games" className="h-9 w-auto sm:h-11" />
        </Link>

        <div className="hidden flex-1 md:block lg:max-w-md"><SearchForm /></div>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          <Link to="/produtos" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-900">Produtos</Link>
          <Link to="/categorias" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-900">Categorias</Link>
          <Link to="/cadastrarcategoria" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-900">Nova categoria</Link>
          <Link to="/perfil" aria-label="Minha conta" className="rounded-lg p-2 hover:bg-blue-900"><UserIcon size={25} weight="bold" /></Link>
          <Link to="/carrinho" aria-label="Carrinho de compras" className="relative rounded-lg p-2 hover:bg-blue-900">
            <ShoppingCartIcon size={25} weight="bold" />
            {quantidadeItems > 0 && <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold">{quantidadeItems}</span>}
          </Link>
          <button type="button" onClick={sair} aria-label="Sair" className="cursor-pointer rounded-lg p-2 hover:bg-blue-900"><SignOutIcon size={25} weight="bold" /></button>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Link to="/carrinho" aria-label="Carrinho" className="relative rounded-lg p-2 hover:bg-blue-900">
            <ShoppingCartIcon size={25} weight="bold" />
            {quantidadeItems > 0 && <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold">{quantidadeItems}</span>}
          </Link>
          <button type="button" className="rounded-lg p-2 hover:bg-blue-900" onClick={() => setMenuAberto(v => !v)} aria-label={menuAberto ? "Fechar menu" : "Abrir menu"} aria-expanded={menuAberto}>
            {menuAberto ? <XIcon size={27} /> : <ListIcon size={27} />}
          </button>
        </div>
      </div>

      <div className="mx-auto hidden max-w-7xl px-4 pb-3 sm:px-6 md:block lg:hidden"><SearchForm /></div>

      {menuAberto && (
        <div className="border-t border-blue-900 bg-blue-950 px-4 py-4 md:px-6 lg:hidden">
          <div className="mb-4 md:hidden"><SearchForm /></div>
          <nav className="mx-auto grid max-w-7xl grid-cols-1 gap-1 sm:grid-cols-2">
            <Link to="/produtos" onClick={fecharMenu} className="rounded-lg px-3 py-3 hover:bg-blue-900">Produtos</Link>
            <Link to="/categorias" onClick={fecharMenu} className="rounded-lg px-3 py-3 hover:bg-blue-900">Categorias</Link>
            <Link to="/cadastrarcategoria" onClick={fecharMenu} className="rounded-lg px-3 py-3 hover:bg-blue-900">Cadastrar categoria</Link>
            <Link to="/perfil" onClick={fecharMenu} className="flex items-center gap-2 rounded-lg px-3 py-3 hover:bg-blue-900"><UserIcon size={22} /> Minha conta</Link>
            <button type="button" onClick={sair} className="flex items-center gap-2 rounded-lg px-3 py-3 text-left hover:bg-blue-900"><SignOutIcon size={22} /> Sair</button>
          </nav>
        </div>
      )}
    </header>
  )
}
export default Navbar
