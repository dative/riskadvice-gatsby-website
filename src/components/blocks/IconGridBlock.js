import React from 'react'
import PropTypes from 'prop-types'

const IconGridBlock = ({ title, items }) => (
  <div className="block block--icon-grid py-5">
    <div className="container-fluid container-lg">
      {title !== undefined && title.length > 0 && <h2 className="text-center fw-bold mb-5">{title}</h2>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 g-lg-3">
        {items !== undefined &&
          items.length &&
          items.map((item, index) => (
            <div className="col" key={`icon-grid-item-${index}`}>
              <div className="p-3 bg-white d-flex align-items-center">
                {item.icon && (
                  <div className="block--icon-grid--icon icon-square flex-shrink-0 me-3">
                    <img className="bi" width="64" height="64" src={`/images/${item.icon}`} alt="Card Icon" />
                  </div>
                )}
                <div className="block--icon-grid--content">
                  {item.title && <h4 className="fw-bold">{item.title}</h4>}
                  {item.content && <p className="fw-normal mb-0">{item.content}</p>}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
)

IconGridBlock.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
}

export default IconGridBlock
