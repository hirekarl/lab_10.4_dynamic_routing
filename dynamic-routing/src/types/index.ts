export interface Post {
  id: string
  slug: string
  title: string
  content: string
  timestamp: number
}

export interface BlogIndexProps {
  posts: Post[]
}

export interface BlogDetailProps {
  post: Post
}
