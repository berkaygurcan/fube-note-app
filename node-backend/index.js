const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const app = express();
const PORT = 3000;
const DB_PATH = "../notes.db";
const SCHEMA_PATH = "../schema.sql";

// Veritabanı otomatik oluşturma
if (!fs.existsSync(DB_PATH)) {
  const schema = fs.readFileSync(SCHEMA_PATH, "utf8");
  const db = new sqlite3.Database(DB_PATH);
  db.exec(schema);
}

app.use(express.json());

// Buraya senin API endpoint'lerin gelecek

app.listen(PORT, () => {
  console.log(`Node.js backend running on http://localhost:${PORT}`);
});
