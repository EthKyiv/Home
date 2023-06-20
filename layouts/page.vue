<template>
  <slot name="app-before" />
  <div id="app-before"></div>
  <div
    class="flex flex-col min-h-screen overflow-x-hidden relative overflow-hidden"
  >
    <slot name="header">
      <PageNavbar />
    </slot>
    <div class="flex-1 w-full flex flex-col">
      <div
        class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"
      >
        <kinesis-container>
          <kinesis-element :strength="-10">
            <div
              class="absolute invisible xl:visible top-0 right-0 transform translate-x-18 translate-y-20 rotate-340 linear-wipe"
            >
              <BrandFlowerSm></BrandFlowerSm>
            </div>
          </kinesis-element>
          <kinesis-element :strength="5" type="depth">
            <div
              class="absolute invisible md:visible top-0 right-0 transform translate-x-60 translate-y-120 linear-wipe"
            >
              <BrandFlower></BrandFlower>
            </div>
          </kinesis-element>
        </kinesis-container>
        <slot />
      </div>
    </div>
    <slot name="footer">
      <PageFooter />
    </slot>
  </div>
  <slot name="app-after" />
  <div id="app-after"></div>
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
