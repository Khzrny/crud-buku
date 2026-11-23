"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

function ambilData(formData) {
  return {
    judul: String(formData.get("judul") || "").trim(),
    penulis: String(formData.get("penulis") || "").trim(),
    tahun: parseInt(formData.get("tahun"), 10) || new Date().getFullYear(),
    stok: parseInt(formData.get("stok"), 10) || 0,
  };
}

// CREATE
export async function createBuku(formData) {
  const data = ambilData(formData);
  if (!data.judul || !data.penulis) return;
  await prisma.buku.create({ data });
  revalidatePath("/");
  redirect("/");
}

// UPDATE
export async function updateBuku(id, formData) {
  const data = ambilData(formData);
  if (!data.judul || !data.penulis) return;
  await prisma.buku.update({ where: { id }, data });
  revalidatePath("/");
  redirect("/");
}

// DELETE
export async function deleteBuku(id) {
  await prisma.buku.delete({ where: { id } });
  revalidatePath("/");
  redirect("/");
}
