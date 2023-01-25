declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js' {
  import VueEasyLightbox from 'vue-easy-lightbox'
  export * from 'vue-easy-lightbox'
  export default VueEasyLightbox
}
