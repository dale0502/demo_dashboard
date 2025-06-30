/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 添加 vue-quill 模塊聲明
declare module '@vueup/vue-quill' {
  import { DefineComponent } from 'vue'
  const QuillEditor: DefineComponent<{}, {}, any>
  export { QuillEditor }
}
