import { defineComponent, ref, computed, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3-CqxsX-Dk.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const radius = 1280;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PrototypeCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = ref("de");
    const theme = ref("dark");
    const copy = {
      de: {
        seoTitle: "Markus Tratschitt \u2013 Full Stack Engineer aus Mainz | Nuxt 3, TypeScript, Node.js",
        seoDesc: "Full Stack Engineer aus Mainz f\xFCr skalierbare Web-Apps mit Nuxt 3, TypeScript und Node.js. Voll typisierte Datenfl\xFCsse, stabile APIs und saubere Releases.",
        prev: "Vorherige Seite",
        next: "N\xE4chste Seite",
        navAria: "Unternavigation",
        subpage: "Bereich",
        languageSwitch: "Sprachauswahl",
        modeSwitch: "Darstellungsmodus",
        carouselRegion: "Startseiten-Carousel",
        carouselRole: "Karussell",
        carouselLabel: "3D-Karussell mit Unterseiteninhalten",
        tooltips: {
          langDe: "Zur deutschen Version wechseln",
          langEn: "Zur englischen Version wechseln",
          prev: "Eine Karte nach links drehen",
          next: "Eine Karte nach rechts drehen",
          goTo: "Gehe zu",
          light: "Light Mode aktivieren",
          dark: "Dark Mode aktivieren"
        },
        legal: {
          privacy: "Datenschutz",
          imprint: "Impressum"
        },
        form: {
          firstName: "Vorname",
          lastName: "Name",
          email: "E-Mail",
          subject: "Betreff",
          cta: "E-Mail mit diesen Angaben \xF6ffnen"
        },
        pages: [
          {
            id: "home",
            label: "Home",
            title: "Full Stack Engineer f\xFCr skalierbare Web-Apps & Nuxt 3 L\xF6sungen",
            text: "Ich verwandle komplexe Gesch\xE4ftsideen in digitale Realit\xE4t. Als Full Stack Developer aus Mainz spezialisiere ich mich auf hochperformante Webanwendungen mit Nuxt 3, TypeScript und Node.js. Mein Fokus liegt auf voll typisierten Datenfl\xFCssen und stabiler Architektur, damit Ihre Software nicht nur heute funktioniert, sondern auch morgen noch problemlos skalierbar bleibt."
          },
          {
            id: "about",
            label: "\xDCber mich",
            title: "Enterprise-Erfahrung trifft auf pragmatische L\xF6sungskompetenz",
            text: "Nach meiner Ausbildung zum Fachinformatiker habe ich 18 Monate lang komplexe Webprojekte in Enterprise-Umgebungen end-to-end begleitet. Ich wei\xDF, wie man Anforderungen direkt aus dem Business aufnimmt und in belastbaren Code \xFCbersetzt. Ich kombiniere technisches Tiefenwissen mit der notwendigen Hands-on-Mentalit\xE4t, um Projekte termingerecht und sicher in die Produktion zu bringen."
          },
          {
            id: "services",
            label: "Leistungen",
            title: "Full-Stack Development: Von der Konzeption bis zum stabilen Release",
            text: "Ich biete die vollst\xE4ndige Umsetzung Ihrer Webprojekte aus einer Hand. Mein Fokus liegt auf voll typisierten Frontend-Architekturen mit Vue/Nuxt, robusten Node.js-Backends und einer sauberen API-Struktur. Ich sorge f\xFCr eine technische Basis, die wartbar bleibt, technische Schulden minimiert und auch bei wachsendem Funktionsumfang performant bleibt."
          },
          {
            id: "projects",
            label: "Projekte",
            title: "Praxiserprobte L\xF6sungen f\xFCr kritische Business-Logik",
            text: "In produktiven Live-Systemen habe ich bewiesen, dass ich komplexe Features wie sichere Payment-Integrationen (PayPal), Terminbuchungs-Logiken und automatisierte Workflows stabil implementieren kann. Meine Spezialit\xE4t ist die \u201EUpdate-H\xE4rtung\u201C bestehender Plattformen sowie die Durchf\xFChrung von schnellen, regressionsfreien Bugfixes unter Realbedingungen."
          },
          {
            id: "collab",
            label: "Zusammenarbeit",
            title: "Transparente Prozesse f\xFCr messbare Fortschritte",
            text: "Ich arbeite eng mit Produktverantwortlichen und UX-Teams zusammen, um technische Exzellenz mit gesch\xE4ftlichem Nutzen zu vereinen. Durch iterative Lieferzyklen, klare Kommunikation und Git-basierte Workflows schaffe ich volle Transparenz. Mein Ziel ist es, als verl\xE4sslicher Partner Momentum in Ihre Entwicklung zu bringen und Risiken fr\xFChzeitig zu minimieren."
          },
          {
            id: "quality",
            label: "Qualit\xE4t & Standards",
            title: "Sicherheit, Stabilit\xE4t und Barrierefreiheit nach Ma\xDF",
            text: "Sicherheit und Accessibility sind f\xFCr mich integrale Bestandteile der Architektur. Ich setze auf klare API-Vertr\xE4ge, kontrolliertes Error-Handling und WCAG-orientierte UI-Standards. Ob Tastaturbedienbarkeit oder robuste Update-Prozesse \u2013 ich sorge daf\xFCr, dass Ihre Anwendung f\xFCr alle Nutzer zug\xE4nglich und technologisch auf dem neuesten Stand ist."
          },
          {
            id: "contact",
            label: "Kontakt",
            title: "Lassen Sie uns Ihr Projekt gemeinsam realisieren",
            text: "Sie planen eine neue Webanwendung, m\xF6chten ein bestehendes System stabilisieren oder Ihre Plattform skalieren? Ich unterst\xFCtze Sie von der ersten technischen Konzeption bis zur sauberen Produktion. Kontaktieren Sie mich f\xFCr ein unverbindliches Gespr\xE4ch \xFCber Ihre Ziele."
          }
        ]
      },
      en: {
        seoTitle: "Scalable Full Stack Development | Nuxt 3 & Node.js Expert",
        seoDesc: "Mainz-based Full Stack Developer for TypeScript-driven web applications with Nuxt 3 and Node.js. Clean architecture, stable APIs, and scalable delivery.",
        prev: "Previous page",
        next: "Next page",
        navAria: "Sub navigation",
        subpage: "Section",
        languageSwitch: "Language switch",
        modeSwitch: "Display mode",
        carouselRegion: "Homepage carousel",
        carouselRole: "Carousel",
        carouselLabel: "3D carousel with subpage content",
        tooltips: {
          langDe: "Switch to German version",
          langEn: "Switch to English version",
          prev: "Rotate one card to the left",
          next: "Rotate one card to the right",
          goTo: "Go to",
          light: "Enable light mode",
          dark: "Enable dark mode"
        },
        legal: {
          privacy: "Privacy",
          imprint: "Imprint"
        },
        form: {
          firstName: "First name",
          lastName: "Last name",
          email: "Email",
          subject: "Subject",
          cta: "Open email with these details"
        },
        pages: [
          {
            id: "home",
            label: "Home",
            title: "Scalable Full Stack Development | Nuxt 3 & Node.js Expert",
            text: "Turning complex requirements into high-performance digital products. I am a Mainz-based Full Stack Developer specializing in TypeScript-driven web applications. I build software that scales, ensuring your business stays ahead with clean code, stable APIs, and seamless production delivery."
          },
          {
            id: "about",
            label: "About",
            title: "Practical Expertise for Demanding Tech Environments",
            text: "With 18 months of intensive end-to-end delivery in enterprise contexts, I have a proven track record of launching and maintaining live systems. I bridge the gap between business goals and technical execution, focusing on predictable results, long-term maintainability, and software that grows with your needs."
          },
          {
            id: "services",
            label: "Services",
            title: "End-to-End Engineering: From Initial Concept to Production",
            text: "I take full ownership of your tech stack. Whether it\u2019s crafting responsive Nuxt 3 frontends or architecting secure Node.js backends, I ensure every component is fully typed and future-proof. My approach eliminates technical debt early on, allowing for rapid iteration and stable service layers."
          },
          {
            id: "projects",
            label: "Projects",
            title: "Real-World Solutions for Business-Critical Logic",
            text: "My portfolio includes high-stakes features like PayPal payment flows, complex scheduling engines, and regression-free system upgrades. I thrive on stabilizing existing platforms and building new ones that handle real-world traffic with ease, ensuring zero downtime and maximum reliability."
          },
          {
            id: "collab",
            label: "Collaboration",
            title: "Partnering with Product and UX for Maximum Impact",
            text: "I collaborate closely with stakeholders, product owners, and UX teams to translate business needs into practical technical solutions. With clear communication, iterative delivery, and Git-based workflows, I provide full visibility and momentum throughout the entire development process."
          },
          {
            id: "quality",
            label: "Quality & Standards",
            title: "Top-Tier Accessibility and Practical Security",
            text: "Security and accessibility are core engineering requirements, not afterthoughts. I implement clear API contracts, robust error handling, and WCAG-oriented UI standards. From keyboard support to stable update processes, I ensure your application is accessible, secure, and technologically advanced."
          },
          {
            id: "contact",
            label: "Contact",
            title: "Let\u2019s Build Your Next Digital Product",
            text: "Looking for a developer who prioritizes momentum and code quality? Whether you\u2019re starting from scratch or need to scale an existing system, I\u2019m here to support you from initial concept to reliable production delivery. Reach out today and let\u2019s get started."
          }
        ]
      }
    };
    const t = computed(() => copy[locale.value]);
    const pages = computed(() => t.value.pages);
    const themeClass = computed(() => theme.value === "light" ? "theme-light" : "theme-dark");
    const activeIndex = ref(0);
    const rotationStepCount = ref(0);
    const rotationDirection = ref(1);
    ref(false);
    const contactForm = ref({ firstName: "", lastName: "", email: "", subject: "" });
    const step = computed(() => 360 / 7);
    const ringStyle = computed(() => ({
      transform: `translateZ(-${radius}px) rotateY(${-rotationStepCount.value * step.value}deg)`
    }));
    const normalizedDelta = (idx) => {
      const len = pages.value.length;
      let d = idx - activeIndex.value;
      if (d > len / 2) d -= len;
      if (d < -len / 2) d += len;
      return d;
    };
    const cardStyle = (idx) => {
      const d = normalizedDelta(idx);
      const abs = Math.abs(d);
      const hidden = abs > 2;
      return {
        transform: `rotateY(${idx * step.value}deg) translateZ(${radius}px)`,
        opacity: hidden ? "0" : d === 0 ? "1" : abs === 1 ? ".78" : ".42",
        pointerEvents: hidden ? "none" : "auto",
        zIndex: String(100 - abs)
      };
    };
    const cardClass = (idx) => ({
      "is-active": idx === activeIndex.value,
      "is-hidden": Math.abs(normalizedDelta(idx)) > 2
    });
    watch(locale, () => {
      activeIndex.value = 0;
      rotationStepCount.value = 0;
      rotationDirection.value = 1;
    });
    useHead(() => ({
      htmlAttrs: { lang: locale.value },
      title: t.value.seoTitle,
      meta: [{ name: "description", content: t.value.seoDesc }]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["proto", themeClass.value],
        "data-theme": theme.value,
        role: "region",
        "aria-label": t.value.carouselRegion
      }, _attrs))}><div class="carousel" role="group"${ssrRenderAttr("aria-roledescription", t.value.carouselRole)}${ssrRenderAttr("aria-label", t.value.carouselLabel)}><div class="mode-switch" role="group"${ssrRenderAttr("aria-label", t.value.modeSwitch)}><button type="button" class="${ssrRenderClass([{ "is-current": theme.value === "light" }, "mode-btn"])}"${ssrRenderAttr("title", t.value.tooltips.light)}${ssrRenderAttr("aria-label", t.value.tooltips.light)}>Light</button><button type="button" class="${ssrRenderClass([{ "is-current": theme.value === "dark" }, "mode-btn"])}"${ssrRenderAttr("title", t.value.tooltips.dark)}${ssrRenderAttr("aria-label", t.value.tooltips.dark)}>Dark</button></div><div class="lang-switch" role="group"${ssrRenderAttr("aria-label", t.value.languageSwitch)}><button type="button" class="${ssrRenderClass([{ "is-current": locale.value === "de" }, "lang-btn"])}"${ssrRenderAttr("title", t.value.tooltips.langDe)}${ssrRenderAttr("aria-label", t.value.tooltips.langDe)}>DE</button><button type="button" class="${ssrRenderClass([{ "is-current": locale.value === "en" }, "lang-btn"])}"${ssrRenderAttr("title", t.value.tooltips.langEn)}${ssrRenderAttr("aria-label", t.value.tooltips.langEn)}>EN</button></div><button class="arrow" type="button"${ssrRenderAttr("title", t.value.tooltips.prev)}${ssrRenderAttr("aria-label", t.value.prev)}${ssrRenderAttr("aria-controls", "carousel-ring")}>\u2039</button><div class="viewport" tabindex="0"><div class="ring" id="carousel-ring" style="${ssrRenderStyle(ringStyle.value)}" aria-live="polite"><!--[-->`);
      ssrRenderList(pages.value, (page, idx) => {
        _push(`<article style="${ssrRenderStyle(cardStyle(idx))}" class="${ssrRenderClass([cardClass(idx), "page-card"])}" role="group"${ssrRenderAttr("aria-label", `${t.value.subpage}: ${page.label}`)}${ssrRenderAttr("title", `${t.value.subpage}: ${page.label}`)}><p class="page-card__kicker">${ssrInterpolate(page.label)}</p><h2>${ssrInterpolate(page.title)}</h2>`);
        if (page.id !== "contact") {
          _push(`<p>${ssrInterpolate(page.text)}</p>`);
        } else {
          _push(`<div class="contact-content"><p>${ssrInterpolate(page.text)}</p><form class="contact-form"><div class="form-row"><label class="form-label" for="firstName">${ssrInterpolate(t.value.form.firstName)}</label><input class="form-input" id="firstName"${ssrRenderAttr("value", contactForm.value.firstName)} type="text" autocomplete="given-name"${ssrRenderAttr("title", t.value.form.firstName)}${ssrRenderAttr("aria-label", t.value.form.firstName)}></div><div class="form-row"><label class="form-label" for="lastName">${ssrInterpolate(t.value.form.lastName)}</label><input class="form-input" id="lastName"${ssrRenderAttr("value", contactForm.value.lastName)} type="text" autocomplete="family-name"${ssrRenderAttr("title", t.value.form.lastName)}${ssrRenderAttr("aria-label", t.value.form.lastName)}></div><div class="form-row"><label class="form-label" for="email">${ssrInterpolate(t.value.form.email)}</label><input class="form-input" id="email"${ssrRenderAttr("value", contactForm.value.email)} type="email" autocomplete="email"${ssrRenderAttr("title", t.value.form.email)}${ssrRenderAttr("aria-label", t.value.form.email)}></div><div class="form-row"><label class="form-label" for="subject">${ssrInterpolate(t.value.form.subject)}</label><input class="form-input" id="subject"${ssrRenderAttr("value", contactForm.value.subject)} type="text"${ssrRenderAttr("title", t.value.form.subject)}${ssrRenderAttr("aria-label", t.value.form.subject)}></div><button class="form-btn" type="submit"${ssrRenderAttr("title", t.value.form.cta)}${ssrRenderAttr("aria-label", t.value.form.cta)}>${ssrInterpolate(t.value.form.cta)}</button></form><div class="contact-separator" aria-hidden="true"></div><div class="social-links"><a class="social-link" href="https://linkedin.com/in/markus-tratschitt" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"><i class="mdi mdi-linkedin"></i><span>LinkedIn</span></a><a class="social-link" href="https://github.com/MarkusTratschitt" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"><i class="mdi mdi-github"></i><span>GitHub</span></a><a class="social-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook"><i class="mdi mdi-facebook"></i><span>Facebook</span></a></div></div>`);
        }
        _push(`</article>`);
      });
      _push(`<!--]--></div></div><button class="arrow" type="button"${ssrRenderAttr("title", t.value.tooltips.next)}${ssrRenderAttr("aria-label", t.value.next)}${ssrRenderAttr("aria-controls", "carousel-ring")}>\u203A</button><nav class="sticky-nav"${ssrRenderAttr("aria-label", t.value.navAria)}><!--[-->`);
      ssrRenderList(pages.value, (page, idx) => {
        _push(`<button type="button" class="${ssrRenderClass([{ "is-current": idx === activeIndex.value }, "nav-item"])}"${ssrRenderAttr("title", `${t.value.tooltips.goTo} ${page.label}`)}${ssrRenderAttr("aria-label", `${t.value.tooltips.goTo} ${page.label}`)}${ssrRenderAttr("aria-current", idx === activeIndex.value ? "page" : void 0)}>${ssrInterpolate(page.label)}</button>`);
      });
      _push(`<!--]--><a class="nav-item nav-link" href="/datenschutz" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", t.value.legal.privacy)}${ssrRenderAttr("aria-label", t.value.legal.privacy)}>${ssrInterpolate(t.value.legal.privacy)}</a><a class="nav-item nav-link" href="/impressum" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", t.value.legal.imprint)}${ssrRenderAttr("aria-label", t.value.legal.imprint)}>${ssrInterpolate(t.value.legal.imprint)}</a></nav></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrototypeCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PrototypeCarousel = _sfc_main$1;
  _push(ssrRenderComponent(_component_PrototypeCarousel, _attrs, null, _parent));
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Dm7xk2Do.mjs.map
