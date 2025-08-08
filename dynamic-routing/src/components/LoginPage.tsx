import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import { motion } from "framer-motion"
import { variants } from "../animation"

const LoginPage = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext)

  const handleLogin = () => {
    if (login) {
      login()
    }
  }

  const handleLogout = () => {
    if (logout) {
      logout()
    }
  }

  const content = !isAuthenticated ? (
    <>
      <h2 className="text-center">Welcome to My Humble Blog!</h2>
      <p>
        Howdy! If you're looking to dive deeper into the chronicles of Honk and
        my adventures here in Eastern Ontario, you've come to the right place.
        Just click the button below to log in.
      </p>
      <p>
        It's nothing fancy, but it's where I share all the latest feathered
        updates.
      </p>
      <div className="d-flex justify-content-around">
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  ) : (
    <>
      <h2 className="text-center">Already Logged In, Eh?</h2>
      <p>
        Well, how about that! Looks like you're already settled in, just like
        Honk is in his new office in Ottawa. No need to log in again.
      </p>
      <p>
        You can head back to the <Link to={"/blog"}>Blog</Link>, or if you're
        looking to switch accounts or just take a break, feel free to{" "}
        <Link to={"/blog"} onClick={handleLogout}>
          Log Out
        </Link>
        . Glad to have you here!
      </p>
    </>
  )

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
            <h1 className="text-center mb-3">Log In</h1>
            <div>{content}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default LoginPage
