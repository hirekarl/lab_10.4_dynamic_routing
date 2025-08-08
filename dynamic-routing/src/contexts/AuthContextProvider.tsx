import { useState, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "./AuthContext"

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const navigate = useNavigate()

  const login = () => {
    setIsAuthenticated(true)
    navigate("/")
  }
  const logout = () => {
    setIsAuthenticated(false)
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
