import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Chart from "./Chart";
import Heart from "./Heart";

function Main() {
  return (
    <div>
      <Outer scrolling="no">
        <Search />
        <Chart />
        <Heart />
      </Outer>
    </div>
  );
}

const Outer = styled.div`
  overflow: hidden;
  height: 100%;
`;

export default Main;
