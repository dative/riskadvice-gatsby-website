import React from 'react'
import PropTypes from 'prop-types'
import { useUID } from 'react-uid'
import BlockHeader from '../BlockHeader'

const AccordionBlock = ({ title, items }) => {
  const uid = useUID()

  return (
    <div className="block block--accordion py-5">
      <div className="container-fluid container-lg">
        {title !== undefined && title.length > 0 && <BlockHeader>{title}</BlockHeader>}
        <div className="accordion accordion-flush" id={`accordion-block-${uid}`}>
          {items !== undefined &&
            items.length &&
            items.map((item, index) => (
              <div className="accordion-item" key={`accordion-item-${uid}-${index}`}>
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#accordion-item-${uid}-${index}`}
                    aria-expanded="false"
                    aria-controls={`accordion-item-${uid}-${index}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`accordion-item-${uid}-${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent={`#accordion-block-${uid}`}
                >
                  {/* eslint-disable-next-line react/no-danger */}
                  <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

AccordionBlock.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
}

export default AccordionBlock
