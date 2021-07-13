import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ArticleCard = ({ to, coverPicture, postDate, title }) => (
  <div className="col">
    <Link to={to} className="card border-0 shadow-sm text-decoration-none">
      <img src={coverPicture} className="card-img-top" alt="Article Cover" />
      <div className="card-body">
        <p className="card-text">
          <small className="text-muted">
            {new Date(postDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </small>
        </p>
        <h5 className="card-title">{title}</h5>
      </div>
    </Link>
  </div>
)

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  coverPicture: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
}

export default ArticleCard
