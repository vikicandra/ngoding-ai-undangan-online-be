const express = require("express");
const bodyParser = require("body-parser");

const registrasiRoutes = require("./routes/registrasi");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api/registrasi", registrasiRoutes);

// Jalankan server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
