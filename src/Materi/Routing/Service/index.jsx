import { Link, Outlet } from "react-router-dom";

const Service = () => {
  return (
    <div className="main">
      <h2>Task Page</h2>
      <ul>
        <li>
          <Link to="rendering">Rendering</Link>
        </li>
        <li>
          <Link to="reusable">Reusable</Link>
        </li>
        <li>
          <Link to="portalberitafunctional">Portal Berita Functional Component</Link>
        </li>
        <li>
          <Link to="portalberitaclass">Portal Berita Class Component</Link>
        </li>
        <li>
          <Link to="komponen">komponen</Link>
        </li>
        <li>
          <Link to="formregistrasi">formregistrasi</Link>
        </li>
        <li>
          <Link to="form">form</Link>
        </li>
        <li>
          <Link to="styling">styling</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default Service;
