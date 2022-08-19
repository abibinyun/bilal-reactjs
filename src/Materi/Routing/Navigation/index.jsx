import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";

const Navigation = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="home">
        <i className="fa fa-fw fa-home"></i> Home
      </Link>
      <NavDropdown title="Materi" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Link to="/komponen">Komponen</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/styling">Styling</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/form">Form</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/formregistrasi">Form Registrasi</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/portalberitaclass">Portal Berita class</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/portalberitafunctional">Portal Berita function</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/reusable">Reusable</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/rendering">Rendering</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/todolist">Todo list</Link>
        </NavDropdown.Item>
      </NavDropdown>
      {/* <Link to="/service">
        <i class="fa-solid fa-list-check"></i> Tugas
      </Link>
      <Link to="/Client">
        <i className="fa fa-fw fa-user"></i> Clients
      </Link>
      <Link to="/Contact">
        <i className="fa fa-fw fa-envelope"></i> Contact
      </Link>
      <Link to="/Post">
        <i className="fa fa-fw fa-envelope"></i> Post
      </Link> */}
    </div>
  );
};

export default Navigation;
