<template>
  <slot name="app-before" />
  <div id="app-before"></div>
  <div class="flex flex-col min-h-screen relative">
    <slot name="header">
      <PageNavbar />
    </slot>

    <kinesis-container event="move" style="perspective: 1000px">
      <div class="flex-1 w-full flex flex-col">
        <kinesis-element :strength="-20">
          <div
            class="absolute invisible xl:visible top-0 right-0 transform -translate-x-18 translate-y-20 rotate-340 linear-wipe dark:text-black"
          >
            <BrandFlowerSm :width="180"></BrandFlowerSm>
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="10"
          type="depth"
          class="transition duration-100 rotate-12"
        >
          <div
            class="absolute z-0 invisible md:visible top-0 right-0 transform translate-x-60 translate-y-190 linear-wipe dark:text-black"
          >
            <!-- Brand Flower -->
            <BrandFlower></BrandFlower>
          </div>
        </kinesis-element>

        <kinesis-element
          :strength="-20"
          type="depth"
          class="fixed top-1/2 right-1/2 invisible dark:lg:visible"
        >
          <div
            class="dark:text-slate-900 transform translate-x-18 translate-y-20 -rotate-20 linear-wipe"
            style=""
          >
            <IconGameIcons-all-seeing-eye class="text-8xl" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="-50"
          class="fixed top-2/3 right-1/3 invisible dark:lg:visible"
        >
          <div
            class="dark:text-slate-900 transform translate-x-18 translate-y-10 rotate-80 linear-wipe"
            style=""
          >
            <IconGameIcons-pentagram-rose
              class="text-6xl mix-blend-difference"
            />
          </div>
        </kinesis-element>

        <kinesis-element
          :strength="50"
          class="fixed top-2/3 right-1/2 invisible dark:lg:visible"
        >
          <div
            class="dark:text-slate-900 transform translate-x-18 rotate-20 linear-wipe"
            style=""
          >
            <IconGameIcons-planet-conquest class="text-15xl" />
          </div>
        </kinesis-element>

        <kinesis-element
          :strength="40"
          type="depth"
          class="fixed bottom-1/2 left-0 invisible lg:visible"
        >
          <div
            class="dark:text-slate-900 transform translate-x-18 -rotate-20 linear-wipe"
            style=""
          >
            <BrandLogoDimond :width="250" :height="250"></BrandLogoDimond>
          </div>
        </kinesis-element>

        <kinesis-element
          :strength="-20"
          type="depth"
          class="fixed bottom-50 right-1/3 invisible dark:lg:visible"
        >
          <div
            class="dark:text-slate-900 transform translate-x-90 -translate-y-20 linear-wipe"
            style=""
          >
            <IconArcticons:flutterhole class="text-10xl" />
          </div>
        </kinesis-element>

        <kinesis-element
          :strength="-20"
          type="depth"
          class="fixed bottom-30 left-0 invisible lg:visible"
        >
          <div
            class="dark:text-slate-900 transform translate-x-18 rotate-20 linear-wipe"
            style=""
          >
            <BrandFlowerSm :width="180" :height="180"></BrandFlowerSm>
          </div>
        </kinesis-element>

        <div
          class="relative flex-1 flex flex-col mx-auto max-w-100vw lg:max-w-8xl min-h-100vh"
        >
          <slot></slot>
        </div>
      </div>
    </kinesis-container>
    <slot name="footer">
      <PageFooter />
    </slot>
  </div>

  <slot name="app-after" />
  <div id="app-after"></div>
</template>
