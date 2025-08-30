const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Endpoint POST /registrasi
router.post("/", (req, res) => {
  const { nama, email, no_telepon } = req.body;

  if (!nama || !email || !no_telepon) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  const sql = "INSERT INTO registrasi (nama, email, no_telepon) VALUES (?, ?, ?)";
  db.query(sql, [nama, email, no_telepon], (err, result) => {
    if (err) {
      console.error("Error saat insert:", err);
      return res.status(500).json({ message: "Gagal menyimpan data" });
    }
    res.status(201).json({
      message: "Registrasi berhasil",
      data: { id: result.insertId, nama, email, no_telepon }
    });
  });
});

// Endpoint GET /registrasi
router.get("/", (req, res) => {
  const sql = "SELECT * FROM registrasi";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error saat select:", err);
      return res.status(500).json({ message: "Gagal mengambil data" });
    }
    res.json({ data: results });
  });
});

module.exports = router;
