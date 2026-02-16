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
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "legal-page" }, _attrs))}><section class="legal-card"><h1>Datenschutz</h1><p>Diese Website dient der Darstellung beruflicher Inhalte. Personenbezogene Daten werden nur verarbeitet, wenn Sie aktiv Kontakt aufnehmen (z. B. per E-Mail).</p><p><strong>Verantwortlich</strong><br>Markus Tratschitt<br>Willy-Brandt-Platz 4, 55122 Mainz, Deutschland<br>E-Mail: tratschitt.m@icloud.com</p><p><strong>Hinweise</strong><br>Bitte ergänzen Sie diese Seite bei Bedarf um konkrete Angaben zu Hosting, Logfiles, Cookies und Drittanbieterdiensten, falls diese eingesetzt werden.</p></section></main>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datenschutz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const datenschutz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  datenschutz as default
};
//# sourceMappingURL=datenschutz-aPXY7CCv.js.map
