// import { BookmarkItem } from "@/types/bookmark";

// export async function fetchBookmarks(): Promise<BookmarkItem[]> {
//   const res = await fetch(
//     `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/bookmarks`,
//     {
//       headers: {
//         "X-API-KEY": process.env.MICROCMS_API_KEY!,
//       },
//       next: { revalidate: 60 },
//     },
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch bookmarks");
//   }

//   const data = await res.json();
//   return data.contents;
// }

// lib/fetchBookmarks.ts

import { BookmarkItem } from "@/types/bookmark";

export async function fetchBookmarks(): Promise<BookmarkItem[]> {
  const res = await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/bookmarks`,
    {
      headers: {
        "X-API-KEY": process.env.MICROCMS_API_KEY!,
      },
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch bookmarks");
  }

  const data = await res.json();

  console.log("取得したお気に入り:", data.contents);

  return data.contents;
}
