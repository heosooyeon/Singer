import styled from "styled-components";
import logo from "../image/Logo.png";

function Signin() {
  return (
    <div className="Login">
      <BackBox>
        <Logo alt="logo"></Logo>
        <WhiteBox>
          <Input
            type="text"
            placeholder="아이디"
            style={{ marginTop: "120px" }}
          ></Input>
          <Input
            type="text"
            placeholder="비밀번호"
            margin-top="220px"
            style={{ marginTop: "220px" }}
          ></Input>
          <Button style={{ marginTop: "350px" }}>로그인</Button>
          <Button style={{ marginTop: "410px" }}>회원가입</Button>
        </WhiteBox>
      </BackBox>
    </div>
  );
}

const BackBox = styled.div`
  position: fixed;
  margin: auto 0;
  background-color: black;
  width: 100vw;
  height: 100vh;
`;

const Logo = styled.img`
  position: fixed;
  left: 67px;
  top: -18px;
  background-image: url(${logo});
  width: 18vw;
  height: 18vh;
  background-size: cover;
`;

const WhiteBox = styled.div`
  position: fixed;
  top: 18%;
  margin: 0 auto;
  left: 0;
  right: 0;
  background-color: white;
  width: 88vw;
  height: 75vh;
`;

const Input = styled.input`
  position fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  border : solid #F849BA 3px;
  width : 30vw;
  height : 7vh;
  font-size : 25px;
  border-radius : 8px;
  &:focus{
    outline : none;
  }
`;

const Button = styled.button`
  position fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  width : 25vw;
  height : 6vh;
  border-radius : 5px;
  border : none;
  background-color : black;
  color : white;
  font-size : 23px;
  &:hover{
    background-color : #F849BA;
    cursor : pointer;
  }
`;
export default Signin;
