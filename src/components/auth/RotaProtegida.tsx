import { useContext, type ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"

import { AuthContext } from "../../contexts/AuthContext"

interface RotaProtegidaProps {
	children: ReactNode
}

export default function RotaProtegida({ children }: RotaProtegidaProps) {
	const { autenticado, isLoading } = useContext(AuthContext)

	if (isLoading) {
		return (
			<div className="flex min-h-[60vh] items-center justify-center">
				<ClipLoader size={48} />
			</div>
		)
	}

	if (!autenticado) {
		return <Navigate to="/" replace />
	}

	return <>{children}</>
}
