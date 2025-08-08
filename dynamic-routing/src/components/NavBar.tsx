import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext)

  const handleLogout = () => {
    if (logout) {
      logout()
    }
  }

  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          🪿 My Life with Honk
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                Blog
              </NavLink>
            </li>
            {!isAuthenticated && (
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }>
                  Login
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }>
                    Admin
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
