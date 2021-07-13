/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'
import { Link } from 'gatsby'
import { useForm } from 'react-hook-form'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Contact = () => {
  const { register, handleSubmit } = useForm()

  // eslint-disable-next-line no-console
  const onSubmit = data => console.log(JSON.stringify(data))
  return (
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
            </ol>
          </nav>
          <h1 className="mb-0">Contact Us</h1>
        </header>

        <div className="block block--form py-5">
          <div className="container-fluid container-lg">
            <div className="d-flex flex-column flex-md-row shadow-sm rounded">
              <div className="block--form--content w-25">
                <div className="block--form--content--wraper p-4 p-md-5">
                  <h5 className="fw-bold fs-4">Call Us</h5>
                  <p className="fs-5">
                    Call or Text <br />
                    <strong>800-800-8990</strong>
                  </p>
                  <p className="fs-5">
                    Local <br />
                    <strong>508-540-2400</strong>
                  </p>
                  <p className="fs-5">
                    Fax <br />
                    <strong>508-289-4111</strong>
                  </p>
                </div>
              </div>
              <div className="block--form--form-fields bg-white w-75">
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
      </div>
    </Layout>
  )
}

export default Contact
