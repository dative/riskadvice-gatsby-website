import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import RichTextBlock from '../components/blocks/RichTextBlock'

import {
  RichTextContent,
  FeatureImageBlockContent as FIBContent,
  IconGridBlockContent,
  AccordionBlockContent,
  ArticlesBlockContent,
} from '../components/blocks/BlocksSampleContent'

import FeatureImageBlock from '../components/blocks/FeatureImageBlock'
import IconGridBlock from '../components/blocks/IconGridBlock'
import AccordionBlock from '../components/blocks/AccordionBlock'
import FormBlock from '../components/blocks/FormBlock'
import ArticlesBlock from '../components/blocks/ArticlesBlock'

const SamplePage = () => (
  <Layout>
    <Seo title="Sample Page" />
    <div className="bg-light">
      <header className="container-fluid container-lg py-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">
                Personal Insurance
              </Link>
            </li>
          </ol>
        </nav>
        <h1 className="mb-0">Auto Insurance</h1>
      </header>

      <RichTextBlock>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: RichTextContent }} />
      </RichTextBlock>

      <FeatureImageBlock picture={FIBContent.picture} videoUrl={FIBContent.videoUrl} content={FIBContent.content} />

      <IconGridBlock title="Example Icon Grid Block" items={IconGridBlockContent} />

      <AccordionBlock title="Example Accordion Block" items={AccordionBlockContent} />

      <FormBlock />

      <ArticlesBlock title="Related Articles & Resources" items={ArticlesBlockContent} />
    </div>
  </Layout>
)

export default SamplePage
