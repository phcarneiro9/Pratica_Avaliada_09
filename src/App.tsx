import type { ReactNode } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"

import RotaProtegida from "./components/auth/RotaProtegida"
import Cart from "./components/carrinho/cart/Cart"
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto"
import FormProduto from "./components/produtos/formproduto/FormProduto"
import ListaProdutos from "./components/produtos/listaprodutos/ListaProdutos"
import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"
import Cadastro from "./pages/cadastro/Cadastro"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Perfil from "./pages/perfil/Perfil"

function Protegida({ children }: { children: ReactNode }) {
	return <RotaProtegida>{children}</RotaProtegida>
}

function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<BrowserRouter>
					<Navbar />

					<main className="flex min-h-[70vh] flex-col bg-slate-50">
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/home" element={<Protegida><Home /></Protegida>} />
							<Route path="/perfil" element={<Protegida><Perfil /></Protegida>} />
							<Route path="/categorias" element={<Protegida><ListarCategorias /></Protegida>} />
							<Route path="/cadastrarcategoria" element={<Protegida><FormCategoria /></Protegida>} />
							<Route path="/deletarcategoria/:id" element={<Protegida><DeletarCategoria /></Protegida>} />
							<Route path="/editarcategoria/:id" element={<Protegida><FormCategoria /></Protegida>} />
							<Route path="/produtos" element={<Protegida><ListaProdutos /></Protegida>} />
							<Route path="/cadastrarproduto" element={<Protegida><FormProduto /></Protegida>} />
							<Route path="/deletarproduto/:id" element={<Protegida><DeletarProduto /></Protegida>} />
							<Route path="/editarproduto/:id" element={<Protegida><FormProduto /></Protegida>} />
							<Route path="/carrinho" element={<Protegida><Cart /></Protegida>} />
							<Route path="*" element={<Protegida><Home /></Protegida>} />
						</Routes>
					</main>

					<Footer />
				</BrowserRouter>
			</CartProvider>
		</AuthProvider>
	)
}

export default App
