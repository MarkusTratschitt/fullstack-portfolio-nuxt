import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "/home/runner/work/fullstack-portfolio-nuxt/fullstack-portfolio-nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/runner/work/fullstack-portfolio-nuxt/fullstack-portfolio-nuxt/node_modules/hookable/dist/index.mjs";
import "/home/runner/work/fullstack-portfolio-nuxt/fullstack-portfolio-nuxt/node_modules/unctx/dist/index.mjs";
import "/home/runner/work/fullstack-portfolio-nuxt/fullstack-portfolio-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/runner/work/fullstack-portfolio-nuxt/fullstack-portfolio-nuxt/node_modules/defu/dist/defu.mjs";
import "/home/runner/work/fullstack-portfolio-nuxt/fullstack-portfolio-nuxt/node_modules/ufo/dist/index.mjs";
function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-CfYWog8m.js.map
