export interface Post {
  id: string
  slug: string
  title: string
  content: string
  timestamp: number
  heroImageURL: string
  heroImageAltText: string
}

export interface BlogIndexProps {
  posts: Post[]
}

export interface BlogDetailProps {
  post: Post
}
