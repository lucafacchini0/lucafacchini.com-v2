export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  author: string;
  content: string;
  thumbnail?: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  tags: string[];
  date: string;
  author: string;
}
