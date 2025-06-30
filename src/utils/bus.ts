import mitt from "mitt";
import { useQuasar } from "quasar";

const emitter = mitt();

// 創建通知方法
export const notify = (options: {
  type: string;
  message: string;
  position: string;
  timeout?: number;
}) => {
  emitter.emit("notify", options);
};

// 在 Vue 組件中使用這個方法來監聽通知
export const useNotification = () => {
  const $q = useQuasar();

  emitter.on("notify", (options: any) => {
    $q.notify(options);
  });
};
