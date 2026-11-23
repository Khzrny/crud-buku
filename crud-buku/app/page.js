import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteBuku } from "./actions";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

export default async function Home() {
  const daftar = await prisma.buku.findMany({ orderBy: { id: "asc" } });

  return (
    <>
      <div className="head">
        <div>
          <h1>Daftar Buku</h1>
          <p className="sub">{daftar.length} buku tersimpan</p>
        </div>
        <Link href="/buku/baru" className="btn">+ Tambah Buku</Link>
      </div>

      <div className="card">
        {daftar.length === 0 ? (
          <p className="empty">Belum ada data buku. Klik “Tambah Buku” untuk memulai.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Cover</th>
                <th>Judul</th>
                <th>Penulis</th>
                <th>Tahun</th>
                <th>Stok</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {daftar.map((b, i) => (
                <tr key={b.id}>
                  <td>{i + 1}</td>
                  <td>
                    {b.cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={b.cover} alt={`Cover ${b.judul}`} className="thumb" />
                    ) : (
                      <div className="thumb placeholder">📖</div>
                    )}
                  </td>
                  <td><strong>{b.judul}</strong></td>
                  <td>{b.penulis}</td>
                  <td>{b.tahun}</td>
                  <td>{b.stok}</td>
                  <td>
                    <div className="actions">
                      <Link href={`/buku/${b.id}/edit`} className="btn warn sm">Edit</Link>
                      <DeleteButton action={deleteBuku.bind(null, b.id)} judul={b.judul} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
