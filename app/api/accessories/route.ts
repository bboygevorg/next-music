import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const accessories = await prisma.accessories.findMany();

  return NextResponse.json(accessories);
}
