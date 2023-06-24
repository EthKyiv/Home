<template>
  <slot name="app-before" />
  <div id="app-before"></div>
  <div class="flex flex-col min-h-screen relative">
    <slot name="header">
      <PageNavbar />
    </slot>

    <div class="flex-1 w-full flex flex-col">
      <div
        class="relative flex-1 flex flex-col mx-auto max-w-100vw lg:max-w-8xl min-h-100vh"
      >
        <slot></slot>
      </div>
    </div>
    <slot name="footer">
      <PageFooter />
    </slot>
  </div>

  <slot name="app-after" />
  <div id="app-after"></div>
</template>
