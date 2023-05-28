import React from "react";
import styled from "styled-components";
import Table from "./Table.js";
import Input from "./Search_bar.js";

function First() {
  return (
    <div className="Search">
      <BackBox>
        <Logo alt="logo" src={require("../image/Logo.png")}></Logo>
        <WhiteBox>
          <Input></Input>
          <Table></Table>
        </WhiteBox>
      </BackBox>
    </div>
  );
}

const BackBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Logo = styled.img`
  width: 18vw;
  height: 18vh;
  margin-left: 40px;
`;

const WhiteBox = styled.div`
  background-color: white;
  width: 92vw;
  height: 90vh;
  margin: auto;
  margin-top: 10px;
  text-align: center;
`;

// const SearchBar = styled.input`
//   background-color: #f849ba;
//   margin-top: 8vh;
//   width: 25vw;
//   height: 9vh;
//   padding-left: 25px;
//   border-radius: 50px;
//   border: none;
//   font-size: 35px;
//   &:focus {
//     width: 24vw;
//     height: 8vh;
//     outline: none;
//     background-color: white;
//     color: black;
//     border: 5px solid #f849ba;
//   }
// `;

export default First;
