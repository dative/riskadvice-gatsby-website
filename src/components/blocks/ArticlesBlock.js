import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import BlockHeader from '../BlockHeader'
import ArticleCard from '../ArticleCard'

const ArticlesBlock = ({ title, items }) => (
  <div className="block block--articles py-5">
    <div className="container-fluid container-lg">
      {title !== undefined && title.length > 0 && <BlockHeader>{title}</BlockHeader>}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {items !== undefined &&
          items.length &&
          items.map((item, index) => (
            <ArticleCard
              key={`block--articles--article-${index}`}
              title={item.title}
              to="/blog-detail"
              postDate={item.postDate}
              coverPicture={item.picture}
            />
          ))}
      </div>
    </div>
  </div>
)

ArticlesBlock.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
}

export default ArticlesBlock
