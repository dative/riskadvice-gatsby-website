import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import RichTextBlock from '../components/blocks/RichTextBlock'

import { RichTextContent, FeatureImageBlockContent as FIBContent } from '../components/blocks/BlocksSampleContent'
import FeatureImageBlock from '../components/blocks/FeatureImageBlock'

const SamplePage = () => (
  <Layout>
    <Seo title="Sample Page" />
    <div className="bg-light">
      <header className="container-fluid container-lg py-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/">Personal Insurance</Link>
            </li>
          </ol>
        </nav>
        <h1 className="mb-0">Auto Insurance</h1>
      </header>

      <RichTextBlock>
        <div dangerouslySetInnerHTML={{ __html: RichTextContent }} />
      </RichTextBlock>

      <FeatureImageBlock picture={FIBContent.picture} videoUrl={FIBContent.videoUrl} content={FIBContent.content} />
    </div>
  </Layout>
)

export default SamplePage
