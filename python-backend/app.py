import os
import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)
DB_PATH = "../notes.db"
SCHEMA_PATH = "../schema.sql"

# Veritabanı otomatik oluşturma
if not os.path.exists(DB_PATH):
    with open(SCHEMA_PATH, "r") as f:
        conn = sqlite3.connect(DB_PATH)
        conn.executescript(f.read())
        conn.close()

# Buraya senin API endpoint'lerin gelecek

if __name__ == '__main__':
    app.run(port=5000)
