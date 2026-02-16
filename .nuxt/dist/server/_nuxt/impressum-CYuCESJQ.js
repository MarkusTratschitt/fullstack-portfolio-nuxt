import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "legal-page" }, _attrs))}><section class="legal-card"><h1>Impressum</h1><p>Markus Tratschitt<br>Willy-Brandt-Platz 4<br>55122 Mainz, Deutschland</p><p><strong>Kontakt</strong><br>Telefon: +49 160 4047781<br>E-Mail: tratschitt.m@icloud.com</p><p><strong>Profile</strong><br>LinkedIn: linkedin.com/in/markus-tratschitt<br>GitHub: github.com/MarkusTratschitt</p></section></main>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impressum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const impressum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  impressum as default
};
//# sourceMappingURL=impressum-CYuCESJQ.js.map
