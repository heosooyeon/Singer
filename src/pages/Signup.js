import styled from "styled-components";
import logo from "../image/Logo.png";

function Signup() {
  return (
    <div className="Login">
      <BackBox>
        <Logo alt="logo"></Logo>
        <WhiteBox>
          <InputBox>
            <Set>
              <Input
                type="text"
                placeholder="닉네임"
                style={{ width: "23vw" }}
              ></Input>
              <Button type="button" value="중복확인"></Button>
            </Set>

            <Set>
              <Input
                type="text"
                placeholder="아이디"
                style={{ width: "23vw" }}
              ></Input>
              <Button type="button" value="중복확인"></Button>
            </Set>

            <Input
              type="text"
              placeholder="비밀번호"
              style={{ width: "30vw" }}
            ></Input>
            <Input
              type="text"
              placeholder="비밀번호 확인"
              margin-top="220px"
              style={{ width: "30vw" }}
            ></Input>

            <Singup type="button" value="회원가입"></Singup>
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

const Set = styled.div`
  position: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 20px;
`;

const Input = styled.input`
  position: flex;
  border: solid #f849ba 3px;
  height: 7vh;
  font-size: 25px;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.input`
  justify-content: center;
  width: 5vw;
  height: 7vh;
  margin-left: 17px;
  margin-right: 17px;
  background-color: #f849ba;
  border: none;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: white;
    border: solid 2px #f849ba;
    font-size: 15px;
    font-weight: 700;
    color: #f849ba;
  }
`;

const InputBox = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  float: left;
`;

const Singup = styled.input`
  position flex;
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

export default Signup;
