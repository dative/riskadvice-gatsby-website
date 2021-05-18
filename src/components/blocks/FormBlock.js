/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useForm } from 'react-hook-form'

const FormBlock = () => {
  const { register, handleSubmit } = useForm()

  // eslint-disable-next-line no-console
  const onSubmit = data => console.log(JSON.stringify(data))

  return (
    <div className="block block--form py-5">
      <div className="container-fluid container-lg">
        <div className="d-flex flex-column flex-md-row shadow-sm rounded">
          <div className="block--form--content">
            <div className="block--form--content--wraper p-4 p-md-5">
              <h5 className="fw-bold fs-4">What’s your risk?</h5>
              <p className="fs-5">Fill in the form and a specialist from our team will contact you within 24 hours.</p>
            </div>
          </div>
          <div className="block--form--form-fields bg-white">
            <div className="block--form--form-fields--wraper px-3 py-4 p-md-5">
              <form className="row g-3" onSubmit={handleSubmit(onSubmit)} method="post">
                <div className="col-12">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" {...register('fullname', { required: true })} />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input type="email" className="form-control" {...register('email', { required: true })} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input type="text" className="form-control" {...register('phone', { required: true })} />
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea className="form-control" rows="3" {...register('message', { required: true })} />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-lg btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormBlock
