import api from "./index";
import type { Category, CategoryChildren } from "@/types/category";
import {
  UpdateCategoryNameRequest,
  DeleteCategoryRequest,
  AddCategoryRequest,
  UpdateSubcategoryNameRequest,
} from "@/mould/category";
import type { ApiResponse } from "@/types/common";
import { notify } from "@/utils/bus";

const useCommonApi = {
  // 獲取所有分類(第一層)
  getFirstLevelCategoriesApi: async () => {
    try {
      const response = (await api.get(
        "/api/admin/getCategories"
      )) as ApiResponse<Category[]>;
      return response;
    } catch (error) {
      console.error("獲取類別列表失敗:", error);
      throw error;
    }
  },
  // 更新分類名稱
  updateCategoryNameApi: async (params: UpdateCategoryNameRequest) => {
    try {
      const response = await api.post("/api/admin/updateCategoryName", params);
      notify({
        type: "positive",
        message: "更新分類名稱成功",
        position: "top",
        timeout: 3000,
      });
      return response;
    } catch (error) {
      console.error("更新分類名稱失敗:", error);
      throw error;
    }
  },
  // 刪除分類(第一層)
  deleteFirstLevelCategoryApi: async (params: DeleteCategoryRequest) => {
    try {
      const response = await api.post(`/api/admin/deleteCategory`, params);
      notify({
        type: "positive",
        message: "刪除分類成功",
        position: "top",
        timeout: 3000,
      });
      return response;
    } catch (error) {
      console.error("刪除分類失敗:", error);
      notify({
        type: "negative",
        message: (error as any).response?.data?.msg,
        position: "top",
        timeout: 3000,
      });
      throw error;
    }
  },
  // 新增分類
  addCategoryApi: async (params: AddCategoryRequest) => {
    try {
      const response = await api.post("/api/admin/addCategory", params);
      notify({
        type: "positive",
        message: "新增分類成功",
        position: "top",
        timeout: 3000,
      });
      return response;
    } catch (error) {
      console.error("新增分類失敗:", error);
      throw error;
    }
  },
  // 獲取子分類(第二層)
  getSubcategoriesApi: async (parentId: number) => {
    try {
      const response = (await api.get(
        `/api/admin/getSubcategories/${parentId}`
      )) as ApiResponse<CategoryChildren[]>;
      return response;
    } catch (error) {
      console.error("獲取子分類失敗:", error);
      throw error;
    }
  },
  // 更新子分類名稱
  updateSubcategoryNameApi: async (params: UpdateSubcategoryNameRequest) => {
    try {
      const response = await api.post(
        `/api/admin/updateSubcategoryName`,
        params
      );
      notify({
        type: "positive",
        message: "更新子分類名稱成功",
        position: "top",
        timeout: 3000,
      });
      return response;
    } catch (error) {
      console.error("更新子分類名稱失敗:", error);
      throw error;
    }
  },
  // 刪除分類(第二層)
  deleteSubcategoryApi: async (params: DeleteCategoryRequest) => {
    try {
      const response = await api.post(`/api/admin/deleteSubcategory`, {
        id: params,
      });
      notify({
        type: "positive",
        message: "刪除子分類成功",
        position: "top",
        timeout: 3000,
      });
      return response;
    } catch (error) {
      console.error("刪除子分類失敗:", error);
      notify({
        type: "negative",
        message: (error as any).response?.data?.msg,
        position: "top",
        timeout: 3000,
      });
      throw error;
    }
  },
  // 獲取第三層分類
  getTertiaryCategoriesApi: async (subId: number) => {
    try {
      const response = (await api.get(
        `/api/admin/getTertiaryCategories/${subId}`
      )) as ApiResponse<CategoryChildren[]>;
      return response;
    } catch (error) {
      console.error("獲取第三層分類失敗:", error);
      throw error;
    }
  },
  // 更新第三層分類名稱
  updateTertiaryCategoryNameApi: async (
    params: UpdateSubcategoryNameRequest
  ) => {
    try {
      const response = await api.post(
        `/api/admin/updateTertiaryCategoryName`,
        params
      );
      notify({
        type: "positive",
        message: "更新第三層分類名稱成功",
        position: "top",
        timeout: 3000,
      });
      return response;
    } catch (error) {
      console.error("更新第三層分類名稱失敗:", error);
      throw error;
    }
  },
  // 刪除第三層分類
  deleteTertiaryCategoryApi: async (params: DeleteCategoryRequest) => {
    try {
      const response = await api.post(`/api/admin/deleteTertiaryCategory`, {
        id: params,
      });
      notify({
        type: "positive",
        message: "刪除第三層分類成功",
        position: "top",
        timeout: 3000,
      });
      return response;
    } catch (error) {
      console.error("刪除第三層分類失敗:", error);
      notify({
        type: "negative",
        message: (error as any).response?.data?.msg,
        position: "top",
        timeout: 3000,
      });
      throw error;
    }
  },
  // 獲取所有分類
  getAllCategoriesApi: async () => {
    const response = (await api.get("/api/getAllCategories")) as ApiResponse<
      Category[]
    >;
    return response;
  },
};

export default useCommonApi;
