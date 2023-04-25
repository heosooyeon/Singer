import styled from "styled-components";
import logo from "../image/Logo.png";

function Login() {
  return (
    <div className="Login">
      <BackBox>
        <Logo alt="logo"></Logo>
        <WhiteBox>
          <InputBox>
            <Input type="text" placeholder="아이디"></Input>
            <Input type="text" placeholder="비밀번호"></Input>
            <LoginButton type="button" value="로그인"></LoginButton>
            <Signup type="button" value="회원가입"></Signup>
          </InputBox>
        </WhiteBox>
      </BackBox>
    </div>
  );
}

const BackBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 88vw;
  height: 75vh;
`;

const InputBox = styled.div`
  display: flex;
  height: 35vh;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  float: left;
`;

const Input = styled.input`
  border: solid #f849ba 3px;
  height: 7vh;
  width: 30vw;
  font-size: 25px;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.input`
  width: 25vw;
  height: 6vh;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: black;
  color: white;
  font-size: 23px;
  &:hover {
    background-color: #f849ba;
    cursor: pointer;
  }
`;

const Signup = styled.input`
  width: 25vw;
  height: 6vh;
  border-radius: 5px;
  border: none;
  background-color: black;
  color: white;
  font-size: 23px;
  &:hover {
    background-color: #f849ba;
    cursor: pointer;
  }
`;

export default Login;
