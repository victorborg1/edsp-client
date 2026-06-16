import axios from "axios"

export const api = axios.create({
  baseURL: "https://eigendsp-api-cth7f6byfpe0hhep.westeurope-01.azurewebsites.net/api",
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// export async function login(email: string, password: string) {
//   const res = await fetch("http://localhost:5153/api/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   })

//   if (!res.ok) throw new Error("Login failed")

//   const data = await res.json()

//   localStorage.setItem("token", data.token)

//   return data.token
// }