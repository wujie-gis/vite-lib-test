/*
 * @Author: wuj
 * @Date: 2022-03-01 11:20:25
 * @LastEditors: wuj
 * @LastEditTime: 2022-03-01 14:39:32
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
