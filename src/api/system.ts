import api from "@/api";
import { SystemSettingRequest } from "@/mould/system";
import type { ApiResponse } from "@/types/common";
import type { ContactInfo } from "@/types/system";
import { ContactListRequest } from "@/mould/system";

const useSystemApi = {
  // 取得系統設置
  getSystemSettingApi: async () => {
    try {
      const response = (await api.get(
        "/api/admin/getSystemSetting"
      )) as ApiResponse<SystemSettingRequest>;
      return response;
    } catch (error) {
      console.error("獲取系統設置失敗:", error);
      throw error;
    }
  },
  // 更新系統設置
  updateSystemSettingApi: async (params: SystemSettingRequest) => {
    try {
      const response = (await api.post(
        "/api/admin/updateSystemSetting",
        params
      )) as ApiResponse<string>;
      return response;
    } catch (error) {
      console.error("更新系統設置失敗:", error);
      throw error;
    }
  },
  // 取得聯絡我們列表
  getContactListApi: async (params: ContactListRequest) => {
    const response = (await api.get("/api/admin/getContactList", {
      params,
    })) as ApiResponse<ContactInfo>;
    return response;
  },
};
export default useSystemApi;
