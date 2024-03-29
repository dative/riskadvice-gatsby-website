import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import RichTextBlock from '../components/blocks/RichTextBlock'

import { RichTextContent } from '../components/blocks/BlocksSampleContent'
import FormBlock from '../components/blocks/FormBlock'

const BlogDetail = () => (
  <Layout>
    <Seo title="Sample Page" />
    <div className="bg-light">
      <header className="container-fluid container-lg py-4">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/blog" className="text-decoration-none">
                    Blog
                  </Link>
                </li>
              </ol>
            </nav>
            <img src="/images/article-cover.jpg" alt="Blog cover" className="w-100 mb-4" />

            <time dateTime="2021-4-15">Apr 15, 2021</time>
            <h1 className="mb-0 fs-2">Protect Yourself Against Distracted Drivers</h1>
          </div>
        </div>
      </header>

      <RichTextBlock>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: RichTextContent }} />
      </RichTextBlock>

      <FormBlock />
    </div>
  </Layout>
)

export default BlogDetail
