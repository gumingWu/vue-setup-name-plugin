"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esbuildPlugin = exports.webpackPlugin = exports.rollupPlugin = exports.vitePlugin = exports.unplugin = void 0;
const unplugin_1 = require("unplugin");
const compiler_sfc_1 = require("@vue/compiler-sfc");
const compiler_sfc_2 = require("@vue/compiler-sfc");
exports.unplugin = (0, unplugin_1.createUnplugin)((options) => {
    return {
        name: "vue-setup-name-plugin",
        enforce: "pre",
        transformInclude(id) {
            return id.endsWith(".vue");
        },
        transform(code, id) {
            let s;
            const str = () => s || (s = new compiler_sfc_2.MagicString(code));
            const { descriptor } = (0, compiler_sfc_1.parse)(code);
            if (!descriptor.script && descriptor.scriptSetup) {
                const result = (0, compiler_sfc_1.compileScript)(descriptor, { id });
                const name = result.attrs.name;
                const lang = result.attrs.lang;
                if (name) {
                    str().appendLeft(0, `<script ${lang ? `lang="${lang}"` : ""}>
    import { defineComponent } from 'vue'
    export default defineComponent({
      name: '${name}',
    })
    </script>\n`);
                }
                return {
                    map: str().generateMap(),
                    code: str().toString(),
                };
            }
            return null;
        },
    };
});
exports.vitePlugin = exports.unplugin.vite;
exports.rollupPlugin = exports.unplugin.rollup;
exports.webpackPlugin = exports.unplugin.webpack;
exports.esbuildPlugin = exports.unplugin.esbuild;
