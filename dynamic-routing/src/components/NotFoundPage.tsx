import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { variants } from "../animation"

const NotFoundPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
            <h1 className="text-center mb-3">404 Not Found 😵</h1>
            <p>
              Well, howdy there! Looks like you've wandered off the beaten path
              a bit. This page seems to have flown the coop, much like Honk used
              to do with my mail before he got his act together.
            </p>
            <p>
              Don't worry, it happens to the best of us. Even a future
              Postmaster General can get a little disoriented sometimes. Try
              heading back to the <Link to={"/blog"}>Blog</Link>, or maybe just
              honk really loud and see if that helps!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NotFoundPage
