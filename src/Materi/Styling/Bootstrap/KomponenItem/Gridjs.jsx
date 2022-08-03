import React, { useState, useEffect } from "react";
import "gridjs/dist/theme/mermaid.min.css";
import { Grid } from "gridjs-react";
import styled from "styled-components";

const GridDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin-top: -15rem;
`;
export default function Gridjs() {
  let [data, setData] = useState([
    ["SD N", "06 Pesanggrahan Jakarta Selatan", "2003 - 2008"],
    ["SMP N", "235 Jakarta Selatan", "2008 - 2011"],
    ["SMK", "TRIKARYA Jakarta Selatan", "2011 - 2014"],
  ]);

  useEffect(() => {
    setTimeout(() => {
      setData([
        ["SD N", "06 Pesanggrahan Jakarta Selatan", "2003 - 2008"],
        ["SMP N", "235 Jakarta Selatan", "2008 - 2011"],
        ["SMK", "TRIKARYA Jakarta Selatan", "2011 - 2014"],
      ]);
    }, 3000);
  });

  return (
    <GridDiv>
      <div className="container lg-8 md-8">
        <h1>Grid.js React</h1>
        <div>
          <Grid columns={["Pendidikan", "Nama Sekolah", "Tahun"]} data={data} />
        </div>
      </div>
    </GridDiv>
  );
}
