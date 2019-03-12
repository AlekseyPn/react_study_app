export interface INewsResponse {
  status: number;
  data: INewsItem[];
  errorText?: string;
}

export interface INewsItem {
  id: number;
  title: string;
  text: string;
  link: string;
  timestamp: Date;
}
