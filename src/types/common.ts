// API 響應數據的基本接口
export interface ApiResponse<T> {
  data: T;
  msg: string;
  code: number;
}
