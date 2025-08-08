import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import { motion } from "framer-motion"
import { variants } from "../animation"

const AdminPage = () => {
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) return <Navigate to={"/login"} />

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
            <h1 className="text-center mb-3">Admin Dashboard</h1>
            <p>
              Welcome to the Admin page, Walter! This is where you can manage
              Honk's official Postmaster General duties, update blog posts, and
              perhaps approve new types of goose-friendly mailboxes.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AdminPage
