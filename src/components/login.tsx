import React, { useState } from "react";
import SignDataStore from "./signstore";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    // 이미 생성된 SignDataStore 인스턴스 사용
    const storedUsername = SignDataStore.username;
    const storedPassword = SignDataStore.password;

    // 입력한 아이디와 비밀번호와 저장된 아이디와 비밀번호를 비교
    if (username === storedUsername && password === storedPassword) {
      setMessage("로그인 성공");
      alert("로그인 성공");
      onLogin(username, password);
    } else if (username !== storedUsername) {
      setMessage("존재하지 않는 아이디입니다.");
    } else {
      setMessage("잘못된 비밀번호입니다.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
