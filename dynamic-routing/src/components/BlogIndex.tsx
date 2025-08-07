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
            <ul className="list-group">{postsList}</ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogIndex
