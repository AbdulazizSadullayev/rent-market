import React from 'react'
import { ArrowRight } from 'lucide-react'
import { type BlogPost } from '../data'
import { useNavigate } from 'react-router-dom'
import BlogCard from './BlogCard'

interface Props {
  data: BlogPost[]
}

const BlogSection: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate()

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-[#111827]">Блог</h2>
                  <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/all-blogs')}
            className="inline-flex items-center text-lg font-medium text-[#111827] hover:text-[#22C55E] transition-colors"
          >
            <span>Показать все</span>
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </button>
        </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection