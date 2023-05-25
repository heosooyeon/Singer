import React from "react";
import styled from "styled-components";

function Second() {
  return (
    <div>
      <All>
        <h1>두번째 페이지</h1>
      </All>
    </div>
  );
}

const All = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  background-color: blue;
  width: 100vw;
  height: 100vh;
`;

export default Second;
