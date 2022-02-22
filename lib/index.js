"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esbuildPlugin = exports.webpackPlugin = exports.rollupPlugin = exports.vitePlugin = exports.unplugin = void 0;
const unplugin_1 = require("unplugin");
exports.unplugin = (0, unplugin_1.createUnplugin)((options) => {
    return {
        name: "vue-setup-name-plugin",
        transformInclude(id) {
            return id.endsWith(".vue");
        },
        transform(code) {
            const show = code.slice(0, 50);
            console.log(show);
            return code;
        },
    };
});
exports.vitePlugin = exports.unplugin.vite;
exports.rollupPlugin = exports.unplugin.rollup;
exports.webpackPlugin = exports.unplugin.webpack;
exports.esbuildPlugin = exports.unplugin.esbuild;
