import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import formDataStore from "./store";

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const DDiv = styled.div`
  border: 1px solid black;
  overflow-y: auto; /* 세로 스크롤이 필요할 때만 스크롤 생성 */
  max-height: 200px; /* 내용의 최대 높이를 설정 */
`;

const Table = observer(() => {
  const { formData, handleInputChange } = formDataStore;
  const [data, setData] = useState<
    {
      serverHost: string;
      databaseName: string;
      username: string;
      password: string;
      id: number;
    }[]
  >([]);

  const handleAddRow = () => {
    setData([
      ...data,
      {
        serverHost: formData.serverHost,
        databaseName: formData.databaseName,
        username: formData.username,
        password: formData.password,
        id: data.length + 1,
      },
    ]);
    formDataStore.resetFields(); // 추가 후 폼 데이터를 재설정합니다.
  };

  return (
    <Container>
      <DDiv>
        <StyledTable>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Server Host</TableHeaderCell>
              <TableHeaderCell>Database</TableHeaderCell>
              <TableHeaderCell>User</TableHeaderCell>
              <TableHeaderCell>Password</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.serverHost}</TableCell>
                <TableCell>{row.databaseName}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </DDiv>
      <div>
        <label>Server Host:</label>
        <input
          type="text"
          name="serverHost"
          value={formData.serverHost}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Database:</label>
        <input
          type="text"
          name="databaseName"
          value={formData.databaseName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>User:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <button type="button" onClick={handleAddRow}>
        Add Row
      </button>
    </Container>
  );
});

export default Table;
