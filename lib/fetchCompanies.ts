import { client } from "@/lib/microcmsClient";
import { Company } from "@/types/company";

export async function fetchCompanies(): Promise<Company[]> {
  const data = await client.get({
    endpoint: "company",
    queries: {
      limit: 20,
    },
  });

  return data.contents;
}
