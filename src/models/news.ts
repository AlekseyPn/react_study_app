export interface INewsItem {
  id: number;
  title: string;
  text: string;
  link: string;
  timestamp: Date;
}
export interface INewsResponse {
  status: number;
  data: INewsItem[];
  errorText?: string;
}
