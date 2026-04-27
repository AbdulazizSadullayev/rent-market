import React from 'react'
import { type BlogPost } from '../data'

interface Props {
  post: BlogPost
  className?: string
}

const BlogCard: React.FC<Props> = ({ post, className = '' }) => (
  <article
    className={
      `group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer ${className}`
    }
  >
    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />

    {/* gradient overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

    {/* content */}
    <div className="absolute bottom-8 left-8 right-8 text-white">
      <div className="mb-3 text-sm font-medium opacity-90">
        {post.date} • для чтения {post.readingTime}
      </div>
      <h3 className="text-2xl font-bold leading-tight group-hover:text-[#22C55E] transition-colors">
        {post.title}
      </h3>
    </div>
  </article>
)

export default BlogCard
