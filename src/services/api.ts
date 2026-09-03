import axios from "axios"

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("@lojagames:token")

	if (token) {
		config.headers.Authorization = token.toLowerCase().startsWith("bearer ")
			? token
			: `Bearer ${token}`
	}

	return config
})

export default api
