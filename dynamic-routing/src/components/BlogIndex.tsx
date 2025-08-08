import { timestampToDisplayDate } from "../utils"
import { useEffect, useState } from "react"
import type { BlogIndexProps } from "../types"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { variants } from "../animation"

const BlogIndex = ({ posts }: BlogIndexProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const postsList = posts.map((p) => (
    <li key={p.id} className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Link className="link-underline link-underline-opacity-0" to={p.slug}>
            {p.title}
          </Link>
        </div>
        <div>
          <em>
            Published&nbsp;
            <time dateTime={new Date(p.timestamp).toISOString()}>
              {timestampToDisplayDate(p.timestamp)}
            </time>
          </em>
        </div>
      </div>
    </li>
  ))

  useEffect(() => {
    setIsLoading(false)

    return () => setIsLoading(true)
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
            <h1 className="text-center mb-3">Recent Posts</h1>
            <p>
              Welcome to my little corner of rural Eastern Ontario! I'm Walter,
              and this blog started as a chronicle of my rather ambitious, and
              often hilarious, attempt to train my stubborn goose, Honk, to
              fetch the mail. What began as a simple solution to slow deliveries
              quickly turned into an unexpected adventure. Follow along as Honk
              transforms from a feathered menace into&hellip; well, you'll just
              have to read to find out! It's been a wild ride, and I'm still
              trying to make sense of it all.
            </p>
            <p>
              Oh, and a little tip from Honk himself: when you're reading a
              post, you can use your <strong>left and right arrow keys</strong>{" "}
              to easily navigate between posts. We figured it'd make the site
              easier for&hellip; well, for everyone, especially if you happen to
              have wings and less dexterous fingers. You're welcome!
            </p>
            <ul className="list-group">{postsList}</ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogIndex
