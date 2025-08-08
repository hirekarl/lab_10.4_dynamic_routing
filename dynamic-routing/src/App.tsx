import "./App.css"
import { Navigate, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import AdminPage from "./components/AdminPage"
import BlogIndex from "./components/BlogIndex"
import BlogPost from "./components/BlogPost"
import LoginPage from "./components/LoginPage"
import NotFoundPage from "./components/NotFoundPage"

import AuthContextProvider from "./contexts/AuthContextProvider"

import posts from "./lib/posts"

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<BlogIndex posts={posts} />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
