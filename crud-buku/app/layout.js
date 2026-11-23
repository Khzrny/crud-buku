import "./globals.css";

export const metadata = {
  title: "Perpustakaan Mini",
  description: "Aplikasi CRUD data buku — Next.js, Prisma, SQLite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <header className="topbar">
          <div className="wrap">
            <a href="/" className="brand">📚 Perpustakaan Mini</a>
          </div>
        </header>
        <main className="wrap">{children}</main>
      </body>
    </html>
  );
}
