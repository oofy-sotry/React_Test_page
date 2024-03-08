import React, { useState } from "react";
import SignDataStore from "./signstore";

interface SignProps {
  onSign: (username: string, password: string) => void;
}

const Sign: React.FC<SignProps> = ({ onSign }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSign = () => {
    if (username === "" || password === "") {
      alert("아이디와 패스워드를 입력해주세요");
      return;
    }
    // 기존의 SignDataStore 인스턴스 사용
    SignDataStore.setUsername(username);
    SignDataStore.setPassword(password);
    onSign(username, password);
  };

  return (
    <div>
      <h2>Sign</h2>
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
        <button type="button" onClick={handleSign}>
          Sign
        </button>
      </form>
    </div>
  );
};

export default Sign;
