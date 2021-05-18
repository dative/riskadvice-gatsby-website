import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import BlockHeader from '../BlockHeader'

const ArticlesBlock = ({ title, items }) => (
  <div className="block block--articles py-5">
    <div className="container-fluid container-lg">
      {title !== undefined && title.length > 0 && <BlockHeader>{title}</BlockHeader>}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {items !== undefined &&
          items.length &&
          items.map((item, index) => (
            <div className="col" key={`block--articles--article-${index}`}>
              <Link to="/" className="card border-0 shadow-sm text-decoration-none">
                <img src={item.picture} className="card-img-top" alt="Article Cover" />
                <div className="card-body">
                  <p className="card-text">
                    <small className="text-muted">
                      {new Date(item.postDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </small>
                  </p>
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </Link>
            </div>
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
