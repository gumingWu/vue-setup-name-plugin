import { createUnplugin } from "unplugin";

export const unplugin = createUnplugin((options) => {
  return {
    name: "vue-setup-name-plugin",
    transformInclude(id: string) {
      return id.endsWith(".vue");
    },
    transform(code: string) {
      const show = code.slice(0, 50);
      console.log(show);
      return code;
    },
  };
});

export const vitePlugin = unplugin.vite;
export const rollupPlugin = unplugin.rollup;
export const webpackPlugin = unplugin.webpack;
export const esbuildPlugin = unplugin.esbuild;
