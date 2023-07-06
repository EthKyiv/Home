<template>
  <slot name="app-before" />
  <div id="app-before"></div>
  <div class="flex flex-col min-h-screen relative">
    <slot name="header">
      <PageNavbar />
    </slot>

    <kinesis-container event="scroll" style="perspective: 1000px">
      <div class="flex-1 w-full flex flex-col">
        <kinesis-element :strength="200" axis="x">
          <div
            class="absolute invisible xl:visible top-0 right-0 transform rotate-340 linear-wipe dark:text-black"
          >
            <BrandFlowerSm :width="180"></BrandFlowerSm>
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="500"
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
          :strength="-200"
          class="fixed top-1/2 right-1/2 invisible dark:lg:visible"
        >
          <div
            class="dark:text-slate-900 transform translate-x-30 -translate-y-30 -rotate-20 linear-wipe"
            style=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="312"
              height="312"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linejoin="round"
                d="M18 18v15.797L179.434 215.41l9.484-16.424L28.04 18H18zm77.705 0l96.95 174.512l10.493-18.176L116.295 18h-20.59zm91.154 0c4.326 19.018 15.27 67.152 28.36 125.326c.557 2.482 1.074 4.807 1.63 7.278l13.275-22.993A55644.833 55644.833 0 0 0 205.32 18h-18.46zM247 18v80.383l9-15.588l7.795 13.5L265 98.383V18h-18zm59.78 0l-24.51 110.297l13.314 23.058L325.22 18h-18.44zm88.925 0l-86.853 156.336l10.494 18.176L416.296 18h-20.59zm88.254 0L323.083 198.986l9.482 16.424L494 33.797V18h-10.04zM18 98.25v22.5l150.79 113.094l9.067-15.7L18 98.25zm476 0L334.145 218.143l9.064 15.7L494 120.75v-22.5zm-238 20.547l-74.656 129.308c20.297-9.102 46.254-14.35 74.656-14.35c28.402 0 54.36 5.248 74.656 14.35L256 118.797zm-238 70.34v19.226l136.05 51.018l9.122-15.804L18 189.136zm476 0l-145.172 54.44l9.123 15.804L494 208.364v-19.226zM18 249.18v18.14l122.615 15.326l9.77-16.92L18 249.18zm476 0l-132.383 16.547l9.768 16.92L494 267.32v-18.14zm-238 2.576c-14.737 0-26.49 11.75-26.49 26.488c0 8.536 3.948 16.065 10.13 20.895a28.09 28.09 0 0 1-1.384-8.603a28.09 28.09 0 0 1 28.09-28.09a28.09 28.09 0 0 1 13.02 3.223c-4.446-8.315-13.194-13.914-23.366-13.914zm-38.18 3.736c-12.656 2.568-23.93 6.328-33.082 10.904c-17.63 8.815-26.21 19.758-26.21 29.594c0 9.837 8.58 20.777 26.21 29.592c17.63 8.815 43.077 14.643 71.262 14.643c28.185 0 53.632-5.828 71.262-14.643c17.63-8.815 26.21-19.755 26.21-29.592c0-9.836-8.58-20.78-26.21-29.594c-9.153-4.576-20.426-8.336-33.082-10.904a44.11 44.11 0 0 1 6.31 22.752c0 24.465-20.025 44.49-44.49 44.49c-24.465 0-44.49-20.025-44.49-44.49c0-8.3 2.31-16.083 6.31-22.752zm-83.867 38.694L18 308.68v18.14l104.666-13.082l11.287-19.552zm244.094 0l11.287 19.552L494 326.82v-18.14l-115.953-14.494zm-233.758 18.1l-57.112 98.92h337.644l-57.11-98.92c-5.763 12.078-17.677 22.035-32.4 29.398c-20.907 10.452-48.695 16.54-79.312 16.54c-30.617 0-58.405-6.088-79.31-16.54c-14.725-7.363-26.64-17.32-32.4-29.4zm255.84 20.15l14.167 24.537L494 386.863v-19.226l-93.87-35.2zm-288.26.002L18 367.637v19.225l79.703-29.888l14.166-24.538zm-31.645 54.808L18 426.136v21.227l43.05-26.906l19.175-33.21zm351.55 0l19.174 33.21L494 447.364v-21.226l-62.225-38.89zm-350.82 41.96L18 484.29V494h16.238l74.05-64.795H80.956zm42.158 0L67.573 494h23.71l55.537-64.795h-23.707zm41.832 0L127.92 494h20.732l37.026-64.795h-20.733zm42.752 0c-8.665 28.96-15.66 51.885-19.61 64.794h18.82a10719.95 10719.95 0 0 0 19.573-64.795h-18.783zm39.303 0V494h18v-64.795h-18zm39.984 0L305.496 494h18.723l-18.515-64.795h-18.72zm39.338 0L363.348 494h20.732l-37.025-64.795h-20.733zm38.856 0L420.718 494h23.708l-55.54-64.795H365.18zm38.533 0L477.763 494H494v-9.71l-62.955-55.085H403.71z"
              />
            </svg>
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="-500"
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
          :strength="-100"
          type="rotate"
          transform-origin="bottom right"
          class="fixed top-2/3 right-1/2 invisible dark:lg:visible"
        >
          <div
            class="dark:text-slate-900 transform translate-x-18 linear-wipe"
            style=""
          >
            <!-- <IconGameIcons-planet-conquest class="text-15xl" /> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="300"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linejoin="round"
                stroke-linecap="round"
                d="M215 32v140c5.9-1.4 11.9-2.6 18-3.4v-42.9c45-8 90 32.3 135 2.3V48c-45 30-90-10.31-135-2.29V32h-18zm41 153c-83.5 0-151 67.5-151 151s67.5 151 151 151s151-67.5 151-151s-67.5-151-151-151zm-20.6 25.8l77.4 119.3l-83.7 27.6l-22.8-54.1l-24.4 21.2l-57.9-12.5l48.3-50l41.4 7.9l21.7-59.4zm103.2 6.1l-10.2 34.9l38.3-.7l-36.4 31.1l-31.1-24.8l12.7-23.6l26.7-16.9zm33.6 148.4l-26.5 42.9l-21.2-36.1l47.7-6.8zM316 398l15.9 46.7c-35.1 28.4-87.1 35.9-115.6 16.9l38.2-60.9l29.2 30.7L316 398z"
              />
            </svg>
          </div>
        </kinesis-element>

        <kinesis-element
          :strength="400"
          class="fixed bottom-1/2 left-0 invisible lg:visible"
        >
          <div
            class="dark:text-slate-900 transform -translate-x-10 -rotate-20 linear-wipe"
            style=""
          >
            <!-- <BrandLogoDimond :width="250" :height="250"></BrandLogoDimond> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 48 48"
            >
              <ellipse
                cx="24"
                cy="24"
                fill="none"
                stroke-meter="1"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                rx="19.5"
                ry="10.636"
              />
              <ellipse
                cx="24"
                cy="24"
                fill="none"
                stroke-width="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                rx="14.891"
                ry="6.736"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M32.377 29.568a8.417 8.417 0 0 0-16.755 0M24 13.364v8.599m0 12.673v-3.9"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M28.9 23.542c.863-2.861 2.875-6.971 4.675-8.809m-1.772 12.491c1.06-2.176 6.002-7.434 9.358-8.279m-4.801 8.813c2.309-1.499 5.42-1.494 6.699-1.496"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M29.31 23.85a10.556 10.556 0 0 1 6.58 4.206m-5.984 2.13a9.954 9.954 0 0 1 4.99 2.636m-15.797-9.28c-.862-2.861-2.874-6.971-4.675-8.809m1.773 12.491c-1.06-2.176-6.002-7.434-9.358-8.279m4.801 8.813c-2.309-1.499-5.42-1.494-6.699-1.496"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.69 23.85a10.556 10.556 0 0 0-6.58 4.206m5.984 2.13a9.954 9.954 0 0 0-4.99 2.636"
              />
            </svg>
          </div>
        </kinesis-element>

        <kinesis-element
          :strength="-200"
          class="fixed bottom-50 right-1/3 invisible dark:lg:visible"
        >
          <div
            class="dark:text-slate-900 transform translate-x-90 -translate-y-20 rotate-320 linear-wipe"
            style=""
          >
            <!-- <BrandLogoDimond :width="250" :height="250"></BrandLogoDimond> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="250"
              viewBox="0 0 48 48"
            >
              <ellipse
                cx="24"
                cy="24"
                fill="none"
                stroke-width="1"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                rx="19.5"
                ry="10.636"
              />
              <ellipse
                cx="24"
                cy="24"
                fill="none"
                stroke-width="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                rx="14.891"
                ry="6.736"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M32.377 29.568a8.417 8.417 0 0 0-16.755 0M24 13.364v8.599m0 12.673v-3.9"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M28.9 23.542c.863-2.861 2.875-6.971 4.675-8.809m-1.772 12.491c1.06-2.176 6.002-7.434 9.358-8.279m-4.801 8.813c2.309-1.499 5.42-1.494 6.699-1.496"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M29.31 23.85a10.556 10.556 0 0 1 6.58 4.206m-5.984 2.13a9.954 9.954 0 0 1 4.99 2.636m-15.797-9.28c-.862-2.861-2.874-6.971-4.675-8.809m1.773 12.491c-1.06-2.176-6.002-7.434-9.358-8.279m4.801 8.813c-2.309-1.499-5.42-1.494-6.699-1.496"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.69 23.85a10.556 10.556 0 0 0-6.58 4.206m5.984 2.13a9.954 9.954 0 0 0-4.99 2.636"
              />
            </svg>
          </div>
        </kinesis-element>

        <kinesis-element
          :strength="-500"
          type="translate"
          class="fixed bottom-0 left-0 invisible lg:visible"
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
