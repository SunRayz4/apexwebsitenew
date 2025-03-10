import React from 'react'

const contactus = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className="contact section-padding" id="section_7">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <form
                className="custom-form contact-form bg-white shadow-lg"
                action="#"
                method="post"
                role="form"
              >
                <h2>Contact Us for More Information</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows={5}
                      id="message"
                      name="message"
                      placeholder="Your Message or Query"
                    ></textarea>

                    <button type="submit" className="form-control">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default contactus
