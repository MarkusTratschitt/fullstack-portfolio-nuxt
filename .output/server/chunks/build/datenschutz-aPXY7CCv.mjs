import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "legal-page" }, _attrs))}><section class="legal-card"><h1>Datenschutz</h1><p>Diese Website dient der Darstellung beruflicher Inhalte. Personenbezogene Daten werden nur verarbeitet, wenn Sie aktiv Kontakt aufnehmen (z. B. per E-Mail).</p><p><strong>Verantwortlich</strong><br>Markus Tratschitt<br>Willy-Brandt-Platz 4, 55122 Mainz, Deutschland<br>E-Mail: tratschitt.m@icloud.com</p><p><strong>Hinweise</strong><br>Bitte erg\xE4nzen Sie diese Seite bei Bedarf um konkrete Angaben zu Hosting, Logfiles, Cookies und Drittanbieterdiensten, falls diese eingesetzt werden.</p></section></main>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datenschutz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const datenschutz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);

export { datenschutz as default };
//# sourceMappingURL=datenschutz-aPXY7CCv.mjs.map
