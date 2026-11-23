"use client";

export default function DeleteButton({ action, judul }) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(`Hapus buku "${judul}"?`)) e.preventDefault();
      }}
    >
      <button type="submit" className="btn danger sm">Hapus</button>
    </form>
  );
}
