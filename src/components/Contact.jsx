import React from 'react'

function Contact() {
  return (
    <div>
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 text-center py-4 my-4">
                    <h1>Have Some Questions</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md 5 d-flex justify-centent-center">
                    <img src="/assets/about-us.svg" alt="contact us" height={"400px"} width="400px"/>
                </div>
                <div className="col-md-6">
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact