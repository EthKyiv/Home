<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const { data } = await useAsyncData('partners', () =>
  queryContent('/partners').sort({ order: -1, $numeric: true }).find()
)
const app = useAppConfig() as AppConfigInput
const logoClass =
  'flex justify-center  items-center bg-slate-200 dark:bg-black dark:border-slate-700   border-2 drop-shadow-dec-gray border-slate-900  rounded bg-white h-20'
const logoClassGold =
  'flex justify-center  items-center bg-yellow-100 dark:bg-black dark:border-slate-700   border-2 drop-shadow-dec-gray  border-slate-900  rounded bg-white h-24'

const logoClass2 =
  'flex justify-center  items-center bg-blue-100 dark:bg-black dark:border-slate-700   border-2 drop-shadow-dec-gray  border-slate-900  rounded bg-white h-28'
const logoClass3 =
  'flex justify-center  items-center bg-white-100 dark:bg-black dark:border-slate-700   border-2 drop-shadow-dec-gray  border-slate-900 rounded bg-white h-16 '
const imgClass =
  'focus:outline-none object-scale-down h-inherit p-4 w-auto filter grayscale contrast-150 hover:grayscale-0 hover:contrast-100'
</script>
<template>
  <div class="w-full">
    <h2 class="partners-title">
      <IconMdi:decagram-outline
        class="ease-in duration-300 transform bg-blue-500 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
      />
      <span>Platinum</span>
    </h2>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 grid-flow-row auto-rows-max mb-4 mt-4 w-full mb-16"
    >
      <div :class="logoClass2">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://placehold.co/600x400"
          alt="Adidas"
          role="img"
        />
      </div>

      <div :class="logoClass2">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://placehold.co/600x400/orange/red"
          alt="GS1"
          role="img"
        />
      </div>

      <div :class="logoClass2">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/honda-dark.png"
          alt="Honda"
          role="img"
        />
      </div>
    </div>

    <h2 class="partners-title">
      <IconMdi:octagram-outline
        class="ease-in duration-300 transform bg-yellow-500 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
      />
      <span>Gold</span>
    </h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 grid-flow-row auto-rows-max mb-4 mt-4 w-full mb-16"
    >
      <div :class="logoClassGold">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://placehold.co/600x400"
          alt="Adidas"
          role="img"
        />
      </div>
      <div :class="logoClassGold">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/channel-dark.png"
          alt="Chanel"
          role="img"
        />
      </div>

      <div :class="logoClassGold">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/toyota-dark.png"
          alt="Toyota"
          role="img"
        />
      </div>
      <div :class="logoClassGold">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/gs1-dark.png"
          alt="GS1"
          role="img"
        />
      </div>
      <div :class="logoClassGold">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/berry-dark.png"
          alt="BlackBerry"
          role="img"
        />
      </div>
    </div>

    <h2 class="partners-title">
      <IconMdi:hexagram-outline
        class="ease-in duration-300 transform bg-slate-200 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
      />
      <span>Silver</span>
    </h2>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 grid-flow-row auto-rows-max mt-4 w-full mb-16"
    >
      <div :class="logoClass">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://placehold.co/600x400"
          alt="Adidas"
          role="img"
        />
      </div>
      <div :class="logoClass">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/channel-dark.png"
          alt="Chanel"
          role="img"
        />
      </div>

      <div :class="logoClass">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/toyota-dark.png"
          alt="Toyota"
          role="img"
        />
      </div>
      <div :class="logoClass">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/gs1-dark.png"
          alt="GS1"
          role="img"
        />
      </div>
      <div :class="logoClass">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/berry-dark.png"
          alt="BlackBerry"
          role="img"
        />
      </div>
      <div :class="logoClass">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/min-dark.png"
          alt="Mini"
          role="img"
        />
      </div>
      <div :class="logoClass">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/honda-dark.png"
          alt="Honda"
          role="img"
        />
      </div>
    </div>

    <!-- <h2 class="text-gray-800 dark:text-slate-300 font-bold uppercase text-2xl flex">
      <IconMdi:star-outline class=" mr-2 text-yellow-800 "/>bronze
    </h2> -->
    <h2 class="partners-title">
      <IconMdi:star-outline
        class="ease-in duration-300 transform bg-yellow-700 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
      />
      <span>bronze</span>
    </h2>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 grid-flow-row mt-4 w-full mb-16"
    >
      <div :class="logoClass3">
        <img
          tabindex="0"
          class="focus:outline-none object-scale-down h-inherit p-2 w-auto"
          src="https://cdn.tuk.dev/assets/adidas-dark.png"
          alt="Adidas"
          role="img"
        />
      </div>
      <div :class="logoClass3">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://placehold.co/600x400"
          alt="Chanel"
          role="img"
        />
      </div>

      <div :class="logoClass3">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/toyota-dark.png"
          alt="Toyota"
          role="img"
        />
      </div>
      <div :class="logoClass3">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/gs1-dark.png"
          alt="GS1"
          role="img"
        />
      </div>
      <div :class="logoClass3">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/berry-dark.png"
          alt="BlackBerry"
          role="img"
        />
      </div>
      <div :class="logoClass3">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/min-dark.png"
          alt="Mini"
          role="img"
        />
      </div>
      <div :class="logoClass3">
        <img
          tabindex="0"
          :class="imgClass"
          src="https://cdn.tuk.dev/assets/honda-dark.png"
          alt="Honda"
          role="img"
        />
      </div>
    </div>
    <h2 class="partners-title">
      <IconMdi:television-classic
        class="ease-in duration-300 transform bg-green-500 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
      />
      <span>Partner</span>

      <!-- <IconGis:network-o
        class="ease-in duration-300 transform bg-yellow-500 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
      />
      <span>Partner</span> -->
    </h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 grid-flow-row auto-rows-max mt-4 w-full mb-16"
    >
      <div :class="[logoClass3, 'drop-shadow-dec  bg-green-100']">
        <img
          tabindex="0"
          :class="[imgClass, '']"
          src="https://placehold.co/600x400"
          alt="Chanel"
          role="img"
        />
      </div>
    </div>
  </div>
</template>
