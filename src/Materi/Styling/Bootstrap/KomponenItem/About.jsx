import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Aboutcomp extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row justify-content-center fs-5 text-center">
            <div className="col-md-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint cum necessitatibus delectus consequuntur illo nesciunt quisquam sapiente modi dolores.</p>
            </div>
            <div className="col-md-4">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nulla suscipit illo consequatur, at optio sequi veniam eum repellat dolorum non. Suscipit quos dignissimos nobis!</p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,160L21.8,160C43.6,160,87,160,131,160C174.5,160,218,160,262,144C305.5,128,349,96,393,96C436.4,96,480,128,524,154.7C567.3,181,611,203,655,224C698.2,245,742,267,785,250.7C829.1,235,873,181,916,138.7C960,96,1004,64,1047,53.3C1090.9,43,1135,53,1178,69.3C1221.8,85,1265,107,1309,106.7C1352.7,107,1396,85,1418,74.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </section>
    );
  }
}
