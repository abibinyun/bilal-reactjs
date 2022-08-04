import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

export default class TableReact extends React.Component {
  render() {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,64L26.7,106.7C53.3,149,107,235,160,240C213.3,245,267,171,320,128C373.3,85,427,75,480,64C533.3,53,587,43,640,53.3C693.3,64,747,96,800,90.7C853.3,85,907,43,960,69.3C1013.3,96,1067,192,1120,229.3C1173.3,267,1227,245,1280,213.3C1333.3,181,1387,139,1413,117.3L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
        <h3 className="text-center">PENDIDIKAN</h3>
        <Container style={{ width: "100%", border: "1px solid black" }}>
          <Row className="bg-dark text-light text-center ">
            <Col md={{ span: 6 }}>Nama Sekolah</Col>
            <Col md={{ span: 6 }}>Tahun</Col>
          </Row>
          <Row className="bg-light">
            <Col md={{ span: 6, offset: 1 }}>SDN 06 PESANGGRAHAN</Col>
            <Col md={{ span: 3, offset: 1 }}>2003 - 2008</Col>
          </Row>
          <Row className="bg-light">
            <Col md={{ span: 6, offset: 1 }}>SMPN 235 JAKARTA</Col>
            <Col md={{ span: 3, offset: 1 }}>2008 - 2011</Col>
          </Row>
          <Row className="bg-light">
            <Col md={{ span: 6, offset: 1 }}>SMK TRIKARYA JAKARTA</Col>
            <Col md={{ span: 3, offset: 1 }}>2011 - 2014</Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,64L26.7,106.7C53.3,149,107,235,160,240C213.3,245,267,171,320,128C373.3,85,427,75,480,64C533.3,53,587,43,640,53.3C693.3,64,747,96,800,90.7C853.3,85,907,43,960,69.3C1013.3,96,1067,192,1120,229.3C1173.3,267,1227,245,1280,213.3C1333.3,181,1387,139,1413,117.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}
