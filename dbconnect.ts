import mysql from "mysql";

export const conn = mysql.createPool({
  connectionLimit: 10,
  host: "sql6.freemysqlhosting.net",
  user: "sql6689713",
  password: "n7BV4ur4WD",
  database: "sql6689713",
});
