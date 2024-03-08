import mysql from "mysql";
// import bodyParser from "body-parser";
import formDataStore from "./store";

const connectToMariaDB = (
  serverHost: string,
  databaseName: string,
  username: string,
  password: string
) => {
  return new Promise((resolve, reject) => {
    // MariaDB 연결 정보
    const connection = mysql.createConnection({
      host: serverHost,
      user: username,
      password: password,
      database: databaseName,
      port: 3306, // Mariadb 포트 (기본값: 3306)
    });

    // Mariadb 연결
    connection.connect((err) => {
      if (err) {
        console.error("MariaDB connection failed: " + err.stack);
        reject("Mariadb connection failed");
      }

      console.log("Connected to MariaDB as id " + connection.threadId);

      // 연결 테스트 쿼리
      connection.query("SELECT 1", (error, results, fields) => {
        if (error) {
          console.error("Mariadb query failed: " + error);
          reject("Mariadb query failed");
        }

        // 연결 및 쿼리 성공 시 결과 전송
        resolve(results);

        // 연결 종료
        connection.end();
      });
    });
  });
};

const handleTestRequest = async (req: any, res: any) => {
  const { serverHost, databaseName, username, password } = formDataStore; // MobX Store에서 데이터를 받아옵니다.

  try {
    const result = await connectToMariaDB(serverHost, databaseName, username, password);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export { handleTestRequest };
