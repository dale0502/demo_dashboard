import api from "@/api";
import type { ApiResponse } from "@/types/common";
import type { ArticleInfo, ArticleListResponse } from "@/types/article";
// import { CreateArticleRequest, UpdateArticleRequest } from "@/mould/article";
import type { CreateAndEditArticleResponse } from "@/types/article";

interface SearchArticleParams {
  title?: string;
  status?: number;
  date?: string;
  page: number;
  limit: number;
}

const useArticleApi = {
  // 取得文章列表
  getArticleListApi: async () => {
    try {
      const response = (await api.get(
        "/api/admin/getAllArticles"
      )) as ApiResponse<ArticleInfo[]>;
      return response;
    } catch (error) {
      console.error("獲取文章列表失敗:", error);
      throw error;
    }
  },
  // 新增文章
  createArticleApi: async (formData: FormData) => {
    try {
      const response = (await api.post("/api/admin/addArticle", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })) as ApiResponse<CreateAndEditArticleResponse>;
      return response;
    } catch (error) {
      console.error("新增文章失敗:", error);
      throw error;
    }
  },
  // 取得單一文章
  getArticleApi: async (id: number) => {
    const response = (await api.get(
      `/api/admin/getArticle/${id}`
    )) as ApiResponse<ArticleInfo>;
    return response;
  },
  // 更新文章
  updateArticleApi: async (formData: FormData) => {
    const response = (await api.post(`/api/admin/updateArticle`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })) as ApiResponse<CreateAndEditArticleResponse>;
    return response;
  },
  // 刪除文章
  deleteArticleApi: async (id: number) => {
    const response = await api.delete(`/api/admin/article/${id}`);
    return response;
  },
  // 搜尋文章列表（帶分頁）
  searchArticleListApi: async (params: SearchArticleParams) => {
    try {
      const response = (await api.get("/api/admin/searchArticleList", {
        params
      })) as ApiResponse<ArticleListResponse>;
      return response;
    } catch (error) {
      console.error("搜尋文章列表失敗:", error);
      throw error;
    }
  },
};

export default useArticleApi;
