// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import { defineConfig, loadEnv } from "file:///E:/workplace/LargeKQA/ui/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/workplace/LargeKQA/ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Inspect from "file:///E:/workplace/LargeKQA/ui/node_modules/vite-plugin-inspect/dist/index.mjs";
import AutoImport from "file:///E:/workplace/LargeKQA/ui/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/workplace/LargeKQA/ui/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///E:/workplace/LargeKQA/ui/node_modules/unplugin-vue-components/dist/resolvers.js";
import svgSprites from "file:///E:/workplace/LargeKQA/ui/node_modules/rollup-plugin-svg-sprites/lib/index.js";
import { viteMockServe } from "file:///E:/workplace/LargeKQA/ui/node_modules/vite-plugin-mock/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///E:/workplace/LargeKQA/ui/vite.config.ts";
var vite_config_default = defineConfig(({ command, mode }) => {
  console.log("vite.config defineConfig", command, mode);
  const env = loadEnv(mode, process.cwd(), "");
  console.log("vite.config env.NODE_ENV=", env.NODE_ENV);
  const prodMock = true;
  return {
    base: "/",
    // 注意，必须以"/"结尾，BASE_URL配置
    define: {
      "process.env": env
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    plugins: [
      vue(),
      Inspect(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      svgSprites({
        vueComponent: true,
        exclude: ["node_modules/**"],
        symbolId(filePath) {
          const filename = path.basename(filePath);
          return "icon-" + filename.substring(0, filename.lastIndexOf("."));
        }
      }),
      // https://openbase.com/js/vite-plugin-mock
      viteMockServe({
        ignore: /^_/,
        mockPath: "./mock/",
        supportTs: true,
        watchFiles: true,
        localEnabled: command === "serve",
        prodEnabled: command !== "serve" && prodMock,
        // configPath: './mock/index.js',
        logger: false,
        injectCode: `import { setupProdMockServer } from '../mock/_createProductionServer.js';
      setupProdMockServer();`
      })
    ],
    server: {
      host: "localhost",
      port: 8001,
      proxy: {
        "/api-test": {
          target: "https://api.midfar.com/dspt_test/api",
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/api-test/, ""),
          headers: {
            Cookie: env.VUE_APP_COOKIE
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx3b3JrcGxhY2VcXFxcTGFyZ2VLUUFcXFxcdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHdvcmtwbGFjZVxcXFxMYXJnZUtRQVxcXFx1aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovd29ya3BsYWNlL0xhcmdlS1FBL3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuXHJcbmltcG9ydCBJbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnO1xyXG5cclxuLy8gZWxlbWVudCBwbHVzIFx1NjgzN1x1NUYwRlx1ODFFQVx1NTJBOFx1NjMwOVx1OTcwMFx1NUJGQ1x1NTE2NVxyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xyXG5cclxuaW1wb3J0IHN2Z1Nwcml0ZXMgZnJvbSAncm9sbHVwLXBsdWdpbi1zdmctc3ByaXRlcyc7XHJcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygndml0ZS5jb25maWcgZGVmaW5lQ29uZmlnJywgY29tbWFuZCwgbW9kZSk7XHJcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJyk7XHJcbiAgY29uc29sZS5sb2coJ3ZpdGUuY29uZmlnIGVudi5OT0RFX0VOVj0nLCBlbnYuTk9ERV9FTlYpO1xyXG4gIC8vIEFjY29yZGluZyB0byB0aGUgcHJvamVjdCBjb25maWd1cmF0aW9uLiBDYW4gYmUgY29uZmlndXJlZCBpbiB0aGUgLmVudiBmaWxlXHJcbiAgY29uc3QgcHJvZE1vY2sgPSB0cnVlO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYmFzZTogJy8nLCAvLyBcdTZDRThcdTYxMEZcdUZGMENcdTVGQzVcdTk4N0JcdTRFRTVcIi9cIlx1N0VEM1x1NUMzRVx1RkYwQ0JBU0VfVVJMXHU5MTREXHU3RjZFXHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgJ3Byb2Nlc3MuZW52JzogZW52XHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4dGVuc2lvbnM6IFsnLm1qcycsICcuanMnLCAnLnRzJywgJy5qc3gnLCAnLnRzeCcsICcuanNvbicsICcudnVlJ11cclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHZ1ZSgpLFxyXG4gICAgICBJbnNwZWN0KCksXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgfSksXHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgfSksXHJcbiAgICAgIHN2Z1Nwcml0ZXMoe1xyXG4gICAgICAgIHZ1ZUNvbXBvbmVudDogdHJ1ZSxcclxuICAgICAgICBleGNsdWRlOiBbJ25vZGVfbW9kdWxlcy8qKiddLFxyXG4gICAgICAgIHN5bWJvbElkKGZpbGVQYXRoKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpO1xyXG4gICAgICAgICAgcmV0dXJuICdpY29uLScgKyBmaWxlbmFtZS5zdWJzdHJpbmcoMCwgZmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgLy8gaHR0cHM6Ly9vcGVuYmFzZS5jb20vanMvdml0ZS1wbHVnaW4tbW9ja1xyXG4gICAgICB2aXRlTW9ja1NlcnZlKHtcclxuICAgICAgICBpZ25vcmU6IC9eXy8sXHJcbiAgICAgICAgbW9ja1BhdGg6ICcuL21vY2svJyxcclxuICAgICAgICBzdXBwb3J0VHM6IHRydWUsXHJcbiAgICAgICAgd2F0Y2hGaWxlczogdHJ1ZSxcclxuICAgICAgICBsb2NhbEVuYWJsZWQ6IGNvbW1hbmQgPT09ICdzZXJ2ZScsXHJcbiAgICAgICAgcHJvZEVuYWJsZWQ6IGNvbW1hbmQgIT09ICdzZXJ2ZScgJiYgcHJvZE1vY2ssXHJcbiAgICAgICAgLy8gY29uZmlnUGF0aDogJy4vbW9jay9pbmRleC5qcycsXHJcbiAgICAgICAgbG9nZ2VyOiBmYWxzZSxcclxuICAgICAgICBpbmplY3RDb2RlOiBgaW1wb3J0IHsgc2V0dXBQcm9kTW9ja1NlcnZlciB9IGZyb20gJy4uL21vY2svX2NyZWF0ZVByb2R1Y3Rpb25TZXJ2ZXIuanMnO1xyXG4gICAgICBzZXR1cFByb2RNb2NrU2VydmVyKCk7YFxyXG4gICAgICB9KVxyXG4gICAgXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgcG9ydDogODAwMSxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICAnL2FwaS10ZXN0Jzoge1xyXG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9hcGkubWlkZmFyLmNvbS9kc3B0X3Rlc3QvYXBpJyxcclxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGktdGVzdC8sICcnKSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQ29va2llOiBlbnYuVlVFX0FQUF9DT09LSUVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUSxTQUFTLGVBQWUsV0FBVztBQUNyUyxPQUFPLFVBQVU7QUFFakIsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBRWhCLE9BQU8sYUFBYTtBQUdwQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUVwQyxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHFCQUFxQjtBQWRpSSxJQUFNLDJDQUEyQztBQWlCaE4sSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUNqRCxVQUFRLElBQUksNEJBQTRCLFNBQVMsSUFBSTtBQUNyRCxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsVUFBUSxJQUFJLDZCQUE2QixJQUFJLFFBQVE7QUFFckQsUUFBTSxXQUFXO0FBRWpCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sZUFBZTtBQUFBLElBQ2pCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3REO0FBQUEsTUFDQSxZQUFZLENBQUMsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFRLFNBQVMsTUFBTTtBQUFBLElBQ3BFO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNuQyxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNuQyxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsaUJBQWlCO0FBQUEsUUFDM0IsU0FBUyxVQUFVO0FBQ2pCLGdCQUFNLFdBQVcsS0FBSyxTQUFTLFFBQVE7QUFDdkMsaUJBQU8sVUFBVSxTQUFTLFVBQVUsR0FBRyxTQUFTLFlBQVksR0FBRyxDQUFDO0FBQUEsUUFDbEU7QUFBQSxNQUNGLENBQUM7QUFBQTtBQUFBLE1BRUQsY0FBYztBQUFBLFFBQ1osUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFFBQ1osY0FBYyxZQUFZO0FBQUEsUUFDMUIsYUFBYSxZQUFZLFdBQVc7QUFBQTtBQUFBLFFBRXBDLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQTtBQUFBLE1BRWQsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLGFBQWE7QUFBQSxVQUNYLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLFNBQVMsQ0FBQ0EsVUFBU0EsTUFBSyxRQUFRLGVBQWUsRUFBRTtBQUFBLFVBQ2pELFNBQVM7QUFBQSxZQUNQLFFBQVEsSUFBSTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
