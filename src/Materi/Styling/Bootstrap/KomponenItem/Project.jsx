import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gambar1 from "../asset/projects/1.jpg";
import gambar2 from "../asset/projects/2.jpg";
import gambar3 from "../asset/projects/3.jpg";
import gambar4 from "../asset/projects/4.jpg";
import gambar5 from "../asset/projects/5.jpg";

export default class Projectcomp extends React.Component {
  render() {
    return (
      <section id="projects">
        <div className="container">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>My Projects</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={gambar1} className="card-img-top" alt="project 1" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={gambar2} className="card-img-top" alt="project 1" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={gambar3} className="card-img-top" alt="project 1" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={gambar4} className="card-img-top" alt="project 1" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={gambar5} className="card-img-top" alt="project 1" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L26.7,64C53.3,96,107,160,160,208C213.3,256,267,288,320,261.3C373.3,235,427,149,480,144C533.3,139,587,213,640,256C693.3,299,747,309,800,272C853.3,235,907,149,960,133.3C1013.3,117,1067,171,1120,192C1173.3,213,1227,203,1280,170.7C1333.3,139,1387,85,1413,58.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </section>
    );
  }
}
