import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Client from "./Client";
// import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
// import Service from "./Service";
// import Post from "./Post";
import Rendering from "../Rendering";
import Reusable from "../Reausable";
import AppPortal from "../PortalBerita";
import PortalBeritaApp from "../PortalBeritaApp";
import Komponen from "../komponen";
import FormRegistrasi from "../FormRegistrasi";
import Form from "../Form";
import Styling from "../Styling";

const Routing = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/service" element={<Service />}>
          <Route path={"rendering"} element={<Rendering />} />
          <Route path={"reusable"} element={<Reusable />} />
          <Route path={"portalberitafunctional"} element={<AppPortal />} />
          <Route path={"portalberitaclass"} element={<PortalBeritaApp />} />
          <Route path={"komponen"} element={<Komponen />} />
          <Route path={"formregistrasi"} element={<FormRegistrasi />} />
          <Route path={"form"} element={<Form />} />
          <Route path={"styling"} element={<Styling />} />
        </Route> */}
        <Route path="/rendering" element={<Rendering />} />
        <Route path="/reusable" element={<Reusable />} />
        <Route path="/portalberitafunctional" element={<AppPortal />} />
        <Route path="/portalberitaclass" element={<PortalBeritaApp />} />
        <Route path="/komponen" element={<Komponen />} />
        <Route path="/formregistrasi" element={<FormRegistrasi />} />
        <Route path="/form" element={<Form />} />
        <Route path="/styling" element={<Styling />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/post" element={<Post />} /> */}
      </Routes>
    </Router>
  );
};

export default Routing;
