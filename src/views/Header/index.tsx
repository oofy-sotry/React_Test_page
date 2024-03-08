import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Header from "./Header";
import styled from "styled-components";
import backgroundImage from "../../images/해사진.jpg";
import Login from "../../components/login";
import Sign from "../../components/sign";

const Ddiv = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 162px;
  height: 162px;
  border: 1px solid black;
`;

const H1 = styled.h1`
  margin: 0 auto;
  line-height: 162px;
`;

const Button = styled.button`
  width: 70px;
  height: 50px;
  text-align: center;
  margin-top: 10px;
  margin-right: 10px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 999;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const Main = observer(() => {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const handleLogin = (username: string, password: string) => {
    // 로그인 로직 처리
    console.log("Logging in with:", username, password);
    setLoginModalVisible(false); // 모달 닫기
    // 아이디와 비밀번호를 alert로 표시
    alert(`아이디: ${username}\n비밀번호: ${password}`);
  };

  const handleCloseLoginModal = () => {
    setLoginModalVisible(false);
  };

  const [isSignModalVisible, setSignModalVisible] = useState(false);
  const handleSign = (username: string, password: string) => {
    // 회원가입 로직 처리
    console.log("Sign in with:", username, password);
    setSignModalVisible(false); // 모달 닫기
    // 아이디와 비밀번호를 alert로 표시
    alert(`아이디: ${username}\n비밀번호: ${password}`);
  };

  const handleCloseSignModal = () => {
    setSignModalVisible(false);
  };

  return (
    <Header title="페이지 제목">
      <Ddiv></Ddiv>
      <H1>테스트 페이지</H1>
      <div>
        <Button onClick={() => setLoginModalVisible(true)}>Login</Button>
        {isLoginModalVisible && (
          <>
            <ModalOverlay onClick={handleCloseLoginModal} />
            <ModalContainer>
              <Login onLogin={handleLogin} onClose={handleCloseLoginModal} />
            </ModalContainer>
          </>
        )}

        <Button onClick={() => setSignModalVisible(true)}>Sign</Button>
        {isSignModalVisible && (
          <>
            <ModalOverlay onClick={handleCloseSignModal} />
            <ModalContainer>
              <Sign onSign={handleSign} />
            </ModalContainer>
          </>
        )}
      </div>
    </Header>
  );
});

export default Main;
