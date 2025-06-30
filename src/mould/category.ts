// 更新分類名稱 送後端
export class UpdateCategoryNameRequest {
  id: number = 0;
  name: string = "";
  // 分類英文翻譯 只有第一層
  nameEn?: string = "";

  constructor() {
    this.id = 0;
    this.name = "";
    this.nameEn = "";
  }
}

// 刪除分類 送後端
export class DeleteCategoryRequest {
  id: number = 0;
}

// 新增分類 送後端
export class AddCategoryRequest {
  // 第幾層
  key: number = 0;
  // 分類名稱
  name: string = "";
  // 上層分類ID
  parentId?: number;
  // 分類英文翻譯
  nameEn?: string = "";

  constructor() {
    this.key = 1;
    this.name = "";
    this.parentId = undefined;
  }
}

// 更新子分類名稱 送後端
export class UpdateSubcategoryNameRequest {
  id: number = 0;
  name: string = "";
  // 子分類英文翻譯 只有第一層
  nameEn?: string = "";
}
