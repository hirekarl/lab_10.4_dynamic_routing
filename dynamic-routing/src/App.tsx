import "./App.css"
import { Routes, Route, Link, NavLink } from "react-router-dom"
import AdminPage from "./components/AdminPage"
import BlogIndex from "./components/BlogIndex"
import BlogDetail from "./components/BlogDetail"
import LoginPage from "./components/LoginPage"
import NotFoundPage from "./components/NotFoundPage"

import posts from "./lib/posts"

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            My Life with Honk: A Canadian Mail Tale
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
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }>
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/blog" element={<BlogIndex posts={posts} />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
