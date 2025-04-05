# 📝 Fube Note App

Bu proje, iki geliştiricinin birlikte çalıştığı, ortak bir SQLite veritabanı kullanan **basit bir not uygulamasıdır**.  
Backend tarafı iki farklı dille yazılmıştır:

- 🐍 Python (Flask) → Not ekleme ve güncelleme işlemleri
- 🟢 Node.js (Express) → Not listeleme ve silme işlemleri

Veritabanı: `notes.db` (otomatik olarak oluşturulur)

---

## 📁 Proje Yapısı

```
note-app/
├── notes.db               # Ortak SQLite veritabanı (ilk çalıştırmada otomatik oluşur)
├── schema.sql             # Veritabanı şeması (notes tablosu)
├── python-backend/        # Flask backend (app.py)
│   └── requirements.txt   # Flask bağımlılıkları
└── node-backend/          # Express backend (index.js)
    └── package.json       # Node bağımlılıkları
```

---

## 🚀 Kurulum Adımları

### 1. Reponun Klonlanması

```bash
git clone https://github.com/berkaygurcan/fube-note-app.git
cd fube-note-app
```

---

### 2. 🟢 Node.js (Express) Backend

```bash
cd node-backend
npm install          # bağımlılıkları yükle
node index.js        # çalıştır
```

Node.js tarafı `localhost:3000` adresinde çalışır.

---

### 3. 🐍 Python (Flask) Backend

```bash
cd ../python-backend
python -m venv venv              # sanal ortam (isteğe bağlı ama önerilir)
source venv/bin/activate         # Windows: venv\Scripts\activate
pip install -r requirements.txt  # Flask yükle
python app.py                    # çalıştır
```

Python tarafı `localhost:5000` adresinde çalışır.

---

## 🧠 Otomatik Veritabanı Kurulumu

İlk çalıştırmada her iki backend şunu kontrol eder:

- `notes.db` yoksa → `schema.sql` içeriğini okuyup otomatik olarak veritabanını oluşturur.

---

## 🎯 Kullanım Örneği (Test için)

### Not Ekle (Python üzerinden)

```bash
curl -X POST http://localhost:5000/add \
  -H "Content-Type: application/json" \
  -d '{ "title": "İlk Not", "content": "Bu bir test notudur." }'
```

### Notları Listele (Node.js üzerinden)

```bash
curl http://localhost:3000/notes
```

---

## 🤝 Katkıda Bulunanlar

- [@berkaygurcan](https://github.com/berkaygurcan) (Node.js tarafı)
- [Arkadaşın İsmi buraya yazılabilir] (Flask tarafı)

---

## 📄 Lisans

MIT Lisansı
