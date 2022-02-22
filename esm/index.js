import { createUnplugin } from "unplugin";
export const unplugin = createUnplugin((options) => {
    return {
        name: "vue-setup-name-plugin",
        transformInclude(id) {
            return id.endsWith(".vue");
        },
        transform(code) {
            console.log(code);
            return code.replace(/<template>/, `<template><div>Injected</div>`);
        },
    };
});
export const vitePlugin = unplugin.vite;
export const rollupPlugin = unplugin.rollup;
export const webpackPlugin = unplugin.webpack;
export const esbuildPlugin = unplugin.esbuild;
