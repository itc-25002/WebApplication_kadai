import { SelectionItem } from "@/types/selection";

export async function fetchSelectionStatus(): Promise<SelectionItem[]> {
  const res = await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/selection-status`,
    {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY! },
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();
  return data.contents;
}
