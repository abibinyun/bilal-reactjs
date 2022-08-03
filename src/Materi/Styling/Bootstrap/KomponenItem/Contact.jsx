import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama Lengkap
                  </label>
                  <input type="text" className="form-control" id="name" aria-describedby="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="pesan" className="form-label">
                    Pesan
                  </label>
                  <textarea className="form-control" id="pesan" rows={3} defaultValue={""} />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#212529"
            fillOpacity={1}
            d="M0,96L40,106.7C80,117,160,139,240,133.3C320,128,400,96,480,96C560,96,640,128,720,133.3C800,139,880,117,960,101.3C1040,85,1120,75,1200,64C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </section>
    );
  }
}
