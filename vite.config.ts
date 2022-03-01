/*
 * @Author: wuj
 * @Date: 2022-03-01 11:20:25
 * @LastEditors: wuj
 * @LastEditTime: 2022-03-01 17:21:24
 * @Description:
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// 发布库的设置
const lib = defineConfig({
  plugins: [vue()],
  // 打包配置
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/utils.js"), // 设置入口文件
      name: "bm-tool-test", // 起个名字，安装、引入用
      fileName: (format) => `bm-tool-test.${format}.js`, // 打包后的文件名
    },
    sourcemap: false, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "element-plus"], // 注意看这里
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "element-plus": "elementPlus",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});

// 开发模式、生产模式
const project = (url) => {
  return defineConfig({
    plugins: [vue()],
    // devtools: true,
    resolve: {
      alias: {
        "/@": resolve(__dirname, ".", "src"),
      },
    },
    base: url,
    // 打包配置
    build: {
      sourcemap: false,
      outDir: "distp", //指定输出路径
      assetsDir: "static/img/", // 指定生成静态资源的存放路径
      rollupOptions: {
        output: {
          chunkFileNames: "static/js1/[name]-[hash].js",
          entryFileNames: "static/js2/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
        // brotliSize: false, // 不统计
        // target: "esnext",
        // minify: "esbuild", // 混淆器，terser构建后文件体积更小
      },
    },
  });
};

// 判断模式，返回对应的 defineConfig

export default ({ mode }) => {
  const url = loadEnv(mode, process.cwd()).VITE_BASEURL;
  switch (url) {
    case "lib": // 打包库文件
      return lib;
      break;

    default:
      // 开发模式、生产模式
      return project(url);
      break;
  }
};
