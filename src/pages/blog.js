import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import ArticleCard from '../components/ArticleCard'
import Pagination from '../components/Pagination'

const Blog = () => (
  <Layout>
    <Seo title="Blog" />
    <div className="bg-light">
      <header className="container-fluid container-lg py-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </li>
          </ol>
        </nav>
        <h1 className="mb-0">Blog</h1>
      </header>

      <div className="block block--articles pb-4">
        <div className="container-fluid container-lg">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <ArticleCard
                key={`block--articles--article-${index}`}
                title="Protect Yourself Against Distracted Drivers"
                to="/blog-detail"
                postDate="2021-4-15"
                coverPicture="/images/article-cover.jpg"
              />
            ))}
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  </Layout>
)

export default Blog
