import { useEffect, useState } from "react"
import { useNavigate, useParams, Navigate } from "react-router-dom"
import type { Post } from "../types"
import { timestampToDisplayDate } from "../utils"

import posts from "../lib/posts"

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [prevPostSlug, setPrevPostSlug] = useState<string | null>(null)
  const [nextPostSlug, setNextPostSlug] = useState<string | null>(null)

  useEffect(() => {
    const foundPost = posts.find((p) => p.slug === slug)
    if (foundPost) {
      setPost(foundPost)
    }
    setIsLoading(false)

    return () => setIsLoading(true)
  }, [slug])

  useEffect(() => {
    if (post) {
      const postIndex = posts.findIndex((p) => p.slug === post.slug)

      const prevPost = postIndex > 0 ? posts[postIndex - 1] : null
      setPrevPostSlug(prevPost ? prevPost.slug : null)

      const nextPost =
        postIndex < posts.length - 1 ? posts[postIndex + 1] : null
      setNextPostSlug(nextPost ? nextPost.slug : null)
    }
  }, [post, slug])

  useEffect(() => {
    const handleKeydown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prevPostSlug) {
        navigate(`/blog/${prevPostSlug}`)
      } else if (e.key === "ArrowRight" && nextPostSlug) {
        navigate(`/blog/${nextPostSlug}`)
      }
    }
    window.addEventListener("keydown", handleKeydown)

    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [navigate, nextPostSlug, prevPostSlug])

  if (isLoading) {
    return null
  }

  if (!post) {
    return <Navigate to={"/not-found"} />
  }

  return (
    <article className="container-fluid p-3">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <h1 className="text-center mb-2 fs-3">{post.title}</h1>
          <p className="text-center">
            <em>
              Published&nbsp;
              <time dateTime={new Date(post.timestamp).toISOString()}>
                {timestampToDisplayDate(post.timestamp)}
              </time>
            </em>
          </p>
          <div className="d-flex justify-content-around mb-3">
            <img
              src={post.heroImageURL}
              className="img-fluid w-75 rounded-3 shadow"
              alt={post.heroImageAltText}
            />
          </div>
          <p>{post.content}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {prevPostSlug && (
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => navigate(`/blog/${prevPostSlug}`)}>
                  <i className="bi bi-arrow-left"></i>&nbsp;Previous
                </button>
              )}
            </div>
            <div>
              {nextPostSlug && (
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => navigate(`/blog/${nextPostSlug}`)}>
                  Next&nbsp;<i className="bi bi-arrow-right"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
