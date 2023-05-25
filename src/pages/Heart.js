import React from "react";
import styled from "styled-components";

function Heart() {
  return (
    <div>
      <All>
        <h1>세번째 페이지</h1>
      </All>
    </div>
  );
}

const All = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  background-color: yellow;
  width: 100vw;
  height: 100vh;
`;

export default Heart;
