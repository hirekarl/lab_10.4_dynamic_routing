import type { BlogIndexProps } from "../types"
import { Link } from "react-router-dom"

import { timestampToDisplayDate } from "../utils"

const BlogIndex = ({ posts }: BlogIndexProps) => {
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
  return (
    <>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
            <h1 className="text-center mb-3">Recent Posts</h1>
            <div className="d-flex justify-content-around mb-3">
              <img
                src="/goose2-min.jpg"
                className="img-fluid w-75 rounded-3 shadow"
                alt="Honk the goose, hanging out in the park."
              />
            </div>
            <p>
              Welcome to my little corner of rural Eastern Ontario! I'm Walter,
              and this blog started as a chronicle of my rather ambitious, and
              often hilarious, attempt to train my stubborn goose, Honk, to
              fetch the mail. What began as a simple solution to slow deliveries
              quickly turned into an unexpected adventure. Follow along as Honk
              transforms from a feathered menace into&hellip; well, you'll just
              have to read to find out!
            </p>
            <p>
              It's been a wild ride, and I'm still trying to make sense of it
              all.
            </p>
            <ul className="list-group">{postsList}</ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogIndex
