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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,128L26.7,149.3C53.3,171,107,213,160,218.7C213.3,224,267,192,320,192C373.3,192,427,224,480,229.3C533.3,235,587,213,640,170.7C693.3,128,747,64,800,48C853.3,32,907,64,960,112C1013.3,160,1067,224,1120,261.3C1173.3,299,1227,309,1280,282.7C1333.3,256,1387,192,1413,160L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
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
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,128L26.7,149.3C53.3,171,107,213,160,218.7C213.3,224,267,192,320,192C373.3,192,427,224,480,229.3C533.3,235,587,213,640,170.7C693.3,128,747,64,800,48C853.3,32,907,64,960,112C1013.3,160,1067,224,1120,261.3C1173.3,299,1227,309,1280,282.7C1333.3,256,1387,192,1413,160L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </section>
    );
  }
}
