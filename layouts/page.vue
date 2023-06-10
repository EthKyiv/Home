<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen overflow-x-hidden">
      <slot name="header">
        <PageNavbar />
      </slot>
      <div class="flex-1 w-full flex flex-col">
        <div
          class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"
        >
          <slot />
        </div>
      </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>

<!-- <script lang="js" >



export default {
  mounted() {
  // Manually parse hashes / decide on scrollBehavior for initial page load (from SSR)
  if (this.$route.hash) {
    this.$nextTick(() => {
      // This could be configured to use a smooth scroll, etc.
      window.scrollTo(0, scrollBehavior(this.$route).y)
    })
  }
}
}
</script> -->
