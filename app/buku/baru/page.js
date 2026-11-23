import Link from "next/link";
import { createBuku } from "@/app/actions";

export default function TambahBuku() {
  return (
    <>
      <h1>Tambah Buku</h1>
      <p className="sub">Isi data buku baru lalu simpan.</p>

      <div className="card">
        <form action={createBuku} className="field-group">
          <label>
            Judul
            <input name="judul" placeholder="Contoh: Laskar Pelangi" required />
          </label>
          <label>
            Penulis
            <input name="penulis" placeholder="Contoh: Andrea Hirata" required />
          </label>
          <div className="row">
            <label>
              Tahun Terbit
              <input name="tahun" type="number" min="1000" max="2100" defaultValue={2024} required />
            </label>
            <label>
              Stok
              <input name="stok" type="number" min="0" defaultValue={1} required />
            </label>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn">Simpan</button>
            <Link href="/" className="btn ghost">Batal</Link>
          </div>
        </form>
      </div>
    </>
  );
}
