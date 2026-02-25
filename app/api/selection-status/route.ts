// import { fetchSelectionStatus } from "@/lib/fetchSelectionStatus";
// import { NextResponse } from "next/server";
// export async function GET() {
//   const data = await fetchSelectionStatus();
//   return NextResponse.json(data);
// }
import { fetchCompanies } from "@/lib/fetchCompanies"; // 全企業を取る関数に変更
import { NextResponse } from "next/server";

export async function GET() {
  // 特定のステータス付きデータではなく、全企業データを取得する
  const data = await fetchCompanies();
  return NextResponse.json(data);
}
