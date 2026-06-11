import { jwtDecode } from "jwt-decode"

export type DecodedToken = {
  id: string
  email: string
  exp: number
}

export function getUserFromToken(token: string | null) {
  if (!token) return null

  try {
    return jwtDecode<DecodedToken>(token)
  } catch {
    return null
  }
}