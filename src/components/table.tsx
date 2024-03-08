import React, { useState } from "react";
import { styled } from "styled-components";
import { observer } from "mobx-react-lite";
import formDataStore from "./store";

const Table = styled.table`
  margin: 0 auto;
  padding-top: 20px;
  width: 80%
`

const Ddiv = styled.div`
  border: 1px solid black;
`;

const Ddiv2 = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-right: 5px;
`;

const CustomTable: React.FC<{ onConnect: (status: boolean) => void }> = (
  props
) => {
  const [validationError, setValidationError] = useState("");

  const handleConnect = () => {
    // 입력값이 비어있는지 확인
    if (
      formDataStore.serverHost === "" ||
      formDataStore.databaseName === "" ||
      formDataStore.username === "" ||
      formDataStore.password === ""
    ) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // MobX 상태를 업데이트하여 데이터 저장
    formDataStore.formData = {
      serverHost: formDataStore.serverHost,
      databaseName: formDataStore.databaseName,
      username: formDataStore.username,
      password: formDataStore.password,
    };

    // 연결 성공 시 상태 업데이트
    console.log("Connecting to:", formDataStore.serverHost, formDataStore.databaseName, formDataStore.username, formDataStore.password);
    props.onConnect(true);
  };

  const handleReset = () => {
    formDataStore.resetFields();
    setValidationError("");
  };

  return (
    <form action="">
      <Table>
        <thead>
          <tr>
            <td colSpan={6}>
              <Ddiv>
                <h1>Main</h1>
              </Ddiv>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan={6}>
              <Ddiv>
                <h3>MariaDB</h3>
                <div>
                  <span>Server Host : </span>
                  <input
                    type="text"
                    placeholder="IP 또는 도메인 주소"
                    value={formDataStore.serverHost}
                    onChange={(e) => formDataStore.setServerHost(e.target.value)}
                  />
                </div>
                <div>
                  <span>Database : </span>
                  <input
                    type="text"
                    placeholder="DB 이름"
                    value={formDataStore.databaseName}
                    onChange={(e) => formDataStore.setDatabaseName(e.target.value)}
                  />
                </div>
              </Ddiv>
            </td>
          </tr>

          <tr>
            <td colSpan={6}>
              <Ddiv>
                <h3>User</h3>
                <div>
                  <span>User : </span>
                  <input
                    type="text"
                    placeholder="root"
                    value={formDataStore.username}
                    onChange={(e) => formDataStore.setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <span>Password : </span>
                  <input
                    type="text"
                    placeholder="Password"
                    value={formDataStore.password}
                    onChange={(e) => formDataStore.setPassword(e.target.value)}
                  />
                </div>
                {/* <div>
                  <input type="checkbox" /> Save password locally
                </div> */}
              </Ddiv>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={6}>
              <Ddiv2>
                <Button type="button" onClick={handleConnect}>
                  연결
                </Button>
                <Button type="button" onClick={handleReset}>
                  취소
                </Button>
              </Ddiv2>
            </td>
          </tr>
        </tfoot>
      </Table>
      {validationError && <p>{validationError}</p>}
    </form>
  );
};

export default observer(CustomTable);
