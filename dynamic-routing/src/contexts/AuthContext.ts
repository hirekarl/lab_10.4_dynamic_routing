import { createContext } from "react"

export interface AuthContextType {
  isAuthenticated: boolean
  login: (() => void) | null
  logout: (() => void) | null
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: null,
  logout: null,
})
