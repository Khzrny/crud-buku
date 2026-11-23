# Perpustakaan Mini — CRUD Next.js + Prisma + SQLite

Aplikasi CRUD data buku (Create, Read, Update, Delete) untuk tugas deploy ke Vercel.

## 1. Jalankan di localhost

Prasyarat: Node.js 18.18+ (disarankan 20).

```bash
# 1) Salin file environment
cp .env.example .env          # Windows (CMD): copy .env.example .env

# 2) Install dependency
npm install

# 3) Buat database SQLite (prisma/dev.db) + generate Prisma Client
npm run setup

# 4) Jalankan
npm run dev
```

Buka http://localhost:3000

## 2. Screenshot untuk tugas (4 gambar, di localhost)

1. **Create** — buka `/buku/baru`, isi form (jangan klik Simpan dulu, atau screenshot hasil setelah tersimpan di daftar).
2. **Read** — halaman utama `/` menampilkan data buku yang baru ditambahkan.
3. **Update** — klik tombol **Edit**, ubah salah satu field, simpan, lalu screenshot hasil yang sudah berubah di daftar.
4. **Delete** — klik **Hapus**, konfirmasi, lalu screenshot daftar setelah data hilang.

Pastikan address bar `localhost:3000` terlihat di setiap screenshot.

> Tips: sebelum deploy, tambahkan 2–3 buku lewat localhost dan **biarkan tersisa di database**
> (jangan dihapus semua), supaya halaman di Vercel tidak kosong.

## 3. Push ke GitHub

`.env` sudah ada di `.gitignore` (tidak ikut ke repo). File `prisma/dev.db` **sengaja ikut**
karena Vercel tidak mendukung operasi tulis ke SQLite, jadi data dibaca dari file ini.

```bash
git init
git add .
git commit -m "CRUD buku Next.js + Prisma + SQLite"
git branch -M main
git remote add origin https://github.com/<username>/<nama-repo>.git
git push -u origin main
```

Cek di GitHub bahwa `prisma/dev.db` ada dan `.env` tidak ada.

## 4. Deploy ke Vercel

1. Buka https://vercel.com → **Add New… → Project** → import repo GitHub tadi.
2. Framework Preset: **Next.js** (terdeteksi otomatis).
3. Buka **Environment Variables**, tambahkan:
   - Key: `DATABASE_URL`
   - Value: `file:./dev.db`
   (atau klik **Import .env** dan pilih file `.env` lokal)
4. Klik **Deploy**.

Setelah selesai, link deployment (`https://<nama-project>.vercel.app`) bisa dikumpulkan.

### Catatan
- Di Vercel, halaman daftar (Read) berjalan normal. Tombol tambah/edit/hapus akan gagal karena
  SQLite di Vercel bersifat read-only — ini sesuai instruksi tugas, makanya screenshot CRUD
  diambil di localhost.
- Jika ingin mengubah data di Vercel, ubah di localhost lalu `git add . && git commit && git push`
  (file `prisma/dev.db` ikut ter-update dan Vercel otomatis redeploy).

## Struktur
```
app/
  page.js                 # Read (daftar buku) + tombol Edit/Hapus
  buku/baru/page.js       # Create (form tambah)
  buku/[id]/edit/page.js  # Update (form edit)
  actions.js              # Server Actions: create, update, delete (Prisma)
  DeleteButton.js         # Tombol hapus dengan konfirmasi
lib/prisma.js             # Prisma Client singleton
prisma/schema.prisma      # Model Buku (SQLite)
```
