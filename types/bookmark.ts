
export type BookmarkItem = {
  companyId: string;
  id: string;
  company: {
    id: string;
    name: string;
    tags: string[];
    hpurl: string;
    mynaviurl?: string;
  };
};
