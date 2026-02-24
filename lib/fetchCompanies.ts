import { client } from "@/lib/microcmsClient";
import { Company } from "@/types/company";

export async function fetchCompanies(limit?: number): Promise<Company[]> {
  const data = await client.get({
    endpoint: "company",
    queries: {
      limit: limit ?? 100,
    },
  });

  return data.contents;
}