import { createContext } from "react"
import type { AuthContextType } from "../types"

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: null,
  logout: null,
})

export default AuthContext
