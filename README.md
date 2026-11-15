# Aplikasi Kasir & Perhitungan Diskon Otomatis (Mini POS)

Proyek ini dibuat untuk memenuhi Tugas Team-Based Project (TBP) **Praktik Pipeline CI** pada mata kuliah Rekayasa Perangkat Lunak (RPL).

## Anggota Kelompok & Pembagian Peran
| Nama Anggota | NIM | Peran | Tanggung Jawab |
| :--- | :--- | :--- | :--- |
| IKHTIAR M | F5512520044 | Lead Developer | Membuat fungsi utama aplikasi (`kasir.js`) dan memperbaiki bug perhitungan. |
| Nazwa Alifiah Bustaman | F5512520050 | QA / Test Engineer | Membuat unit test (`kasir.test.js`) serta skenario pengujian gagal dan sukses. |
| Putri Arti Dinanti | F5512520048 | DevOps & Technical Writer | Mengatur repository, konfigurasi GitHub Actions (`ci.yml`), dan dokumentasi laporan. |

## Cara Menjalankan Proyek & Pengujian (CI) Secara Lokal
Pastikan **Node.js** sudah terinstal di komputer, lalu jalankan perintah berikut di terminal:

1. Clone repository ini ke komputer lokal:
   ```bash
   git clone [https://github.com/nazwaalfh05/aplikasi-kasir-ci.git](https://github.com/nazwaalfh05/aplikasi-kasir-ci.git)
   cd aplikasi-kasir-ci
   ```

2. Install dependencies yang dibutuhkan:
   ```bash
   npm install
   ```

3. Jalankan pengujian otomatis (unit test):
   ```bash
   npm test
   ```

## Alur Otomatisasi CI
Pipeline dikonfigurasi menggunakan **GitHub Actions** pada berkas `.github/workflows/ci.yml` yang berjalan otomatis setiap kali terdapat aktivitas `push` atau `pull_request` ke branch `main`.
