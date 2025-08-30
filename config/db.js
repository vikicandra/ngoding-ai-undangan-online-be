const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // ganti dengan user mysql kamu
  password: "vikcan13",      // ganti dengan password mysql kamu
  database: "ngodingai" // ganti dengan nama database kamu
});

// Tes koneksi
db.connect((err) => {
  if (err) {
    console.error("Koneksi database gagal:", err);
  } else {
    console.log("Terhubung ke database MySQL");
  }
});

module.exports = db;
