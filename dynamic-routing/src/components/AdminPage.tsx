import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

const AdminPage = () => {
  const { isAuthenticated, login } = useContext(AuthContext)

  const handleLogin = () => {
    if (login) {
      login()
    }
  }

  const content = isAuthenticated ? (
    <p>
      Welcome to the Admin page, Walter! This is where you can manage Honk's
      official Postmaster General duties, update blog posts, and perhaps approve
      new types of goose-friendly mailboxes.
    </p>
  ) : (
    <p>
      Hold on there, partner! Looks like you've wandered into the administrative
      part of the blog. This area is reserved for official Postmaster General
      business (and for me, Walter, to manage things). You'll need to be{" "}
      <Link to={"/blog"} onClick={handleLogin}>
        logged in
      </Link>{" "}
      to access this page.
    </p>
  )

  return (
    <>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
            <h1 className="text-center mb-3">Admin Dashboard</h1>
            {content}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPage
