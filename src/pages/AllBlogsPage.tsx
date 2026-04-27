import React from 'react'
import { type BlogPost, blogData } from '../data'
import BlogCard from '../components/BlogCard'

const AllBlogsPage: React.FC = () => {
  // Generate 9 entries by cycling the original blogData
  const items: BlogPost[] = Array.from({ length: 9 }, (_, i) =>
    blogData[i % blogData.length]
  )

  return (
    <section className="container pt-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#111827] mb-10">Все статьи</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllBlogsPage
