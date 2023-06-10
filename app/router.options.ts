import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()

    if (savedPosition) return savedPosition

    if (to.hash && to.path === from.path) {
      const el = document.querySelector(to.hash)
      if (el) {
        return { top: el.offsetTop, left: 0, behavior: 'smooth' }
      } else {
        return new Promise((resolve) => {
          nuxtApp.hook('page:finish', () => {
            const el = document.querySelector(to.hash)
            resolve({ top: el.offsetTop, left: 0, behavior: 'smooth' })
          })
        })
      }
    }

    return {
      top: 0,
      left: 0,
    }
  },
}
