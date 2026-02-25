import { fetchCompanies } from "@/lib/fetchCompanies";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const companies = await fetchCompanies();
    return NextResponse.json(companies);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
