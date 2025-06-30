// 新增文章
export class CreateArticleRequest {
  // 分類ID
  categoryId: number | null = null;
  // 內容
  content: string = "";
  // 封面圖片
  coverImage: string = "";
  // 狀態
  status: number = 0;
  // 子分類ID
  subcategoryId: number | null = null;
  // 第三層分類ID
  tertiaryCategoryId: number | null = null;
  // 標題
  title: string = "";
  // 是否置頂
  isTop: boolean = false;

  constructor(data: Partial<CreateArticleRequest> = {}) {
    this.categoryId = data.categoryId ?? null;
    this.content = data.content ?? "";
    this.coverImage = data.coverImage ?? "";
    this.status = data.status ?? 0;
    this.subcategoryId = data.subcategoryId ?? null;
    this.tertiaryCategoryId = data.tertiaryCategoryId ?? 0;
    this.title = data.title ?? "";
    this.isTop = data.isTop ?? false;
  }
}

// 更新文章
export class UpdateArticleRequest {
  categoryId: number | null = null;
  content: string = "";
  id: number | null = null;
  subcategoryId: number | null = null;
  tertiaryCategoryId: number | null = null;
  title: string = "";
  status: number = 0;
  coverImage: string = "";
  isTop: boolean = false;

  constructor(data: Partial<UpdateArticleRequest> = {}) {
    this.categoryId = data.categoryId ?? null;
    this.content = data.content ?? "";
    this.id = data.id ?? null;
    this.subcategoryId = data.subcategoryId ?? null;
    this.tertiaryCategoryId = data.tertiaryCategoryId ?? null;
    this.title = data.title ?? "";
    this.status = data.status ?? 0;
    this.coverImage = data.coverImage ?? "";
    this.isTop = data.isTop ?? false;
  }
}
