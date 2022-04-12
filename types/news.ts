export interface NewsResponseType<T> {
  news: {
    next: null | string;
    previous: null | string;
    results: T[];
    count: number;
  };
}

export interface Tag {
  title: string;
}

export interface NewsType {
  comments: any[];
  content: string;
  cover_image: string;
  created_at: string;
  file_abs_url: string;
  id: number;
  news_images: string[];
  owner: string;
  short_desc: string;
  slug: string;
  tag: Tag[];
  title: string;
  videos_images?: string | null;
  type: string;
  video_link: null | string;
  views: number;
}
