import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateBuku } from "@/app/actions";

export const dynamic = "force-dynamic";

export default async function EditBuku({ params }) {
  const id = parseInt(params.id, 10);
  const buku = await prisma.buku.findUnique({ where: { id } });
  if (!buku) notFound();

  return (
    <>
      <h1>Edit Buku</h1>
      <p className="sub">Ubah data buku lalu simpan perubahan.</p>

      <div className="card">
        <form action={updateBuku.bind(null, buku.id)} className="field-group">
          <label>
            Judul
            <input name="judul" defaultValue={buku.judul} required />
          </label>
          <label>
            Penulis
            <input name="penulis" defaultValue={buku.penulis} required />
          </label>
          <label>
            Link Gambar Cover (opsional)
            <input name="cover" type="url" defaultValue={buku.cover ?? ""} placeholder="https://contoh.com/cover.jpg" />
          </label>
          <div className="row">
            <label>
              Tahun Terbit
              <input name="tahun" type="number" min="1000" max="2100" defaultValue={buku.tahun} required />
            </label>
            <label>
              Stok
              <input name="stok" type="number" min="0" defaultValue={buku.stok} required />
            </label>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn">Simpan Perubahan</button>
            <Link href="/" className="btn ghost">Batal</Link>
          </div>
        </form>
      </div>
    </>
  );
}