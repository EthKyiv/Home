// plugins/tippy.ts
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-extreme.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTippy, {
    defaultProps: {
      arrow: true,
      theme: 'neo',
      placement: 'top-end',
      animation: 'scale-extreme',
      duration: 200,
    },
    flipDuration: 20,
    directive: 'tippy',
  })
})
