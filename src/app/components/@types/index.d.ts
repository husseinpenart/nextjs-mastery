export interface PostTypes {
  post: { title?: string; slug?: string; image: string };
}
export interface BlogPost {
  slug: string;
  title: string;
  content: string;
}
