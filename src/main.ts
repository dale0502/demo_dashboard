import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Loading, Notify } from "quasar";
import router from "./router";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

// Import Quasar css
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

// Import your css
import "./style.css";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(Quasar, {
  plugins: {
    Loading,
    Notify,
  },
  config: {
    brand: {
      primary: "#1976D2",
      secondary: "#26A69A",
      accent: "#9C27B0",
      dark: "#1D1D1D",
      positive: "#21BA45",
      negative: "#C10015",
      info: "#31CCEC",
      warning: "#F2C037",
    },
  },
});
app.use(router);

// 全局註冊 QuillEditor 組件
app.component('QuillEditor', QuillEditor)

app.mount("#app");
