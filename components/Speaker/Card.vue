<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: '/img/head.svg',
  },
  twitter: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  panel: {
    type: Boolean,
    default: false,
  },
  keynote: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: false,
  },
})
</script>
<template>
  <div
    class="card card-speaker rounded border-2 border-gray-800 dark:border-slate-400/[0.5] bg-white dark:bg-black flex flex-col"
  >
    <nuxt-img
      class="card-speaker-img aspect-square border-2 bg-green-300 border-gray-800 dark:border-slate-400 object-cover m-4 filter saturate-0"
      :src="img"
      :alt="name"
      width="207"
    />

    <div class="px-4 pb-4 flex flex-col h-full hyphens-auto break-words">
      <h3
        class="font-bold text-base md:text-lg text-gray-800 dark:text-slate-400"
      >
        {{ name }}
      </h3>
      <p class="font-light text-sm text-gray-800">{{ description }}</p>
      <div class="flex gap-4 pt-2 mt-auto flex-wrap">
        <NuxtLink
          v-if="twitter"
          tag="a"
          :to="twitter"
          :class="`ease-in duration-300 transform drop-shadow-button  bg-blue-400 hover:bg-green-500 h-6 w-6 flex justify-center items-center  text-gray-900  border border-1 border-gray-900 rounded hover:-rotate-7`"
        >
          <slot>
            <IconMdi:twitter />
          </slot>
        </NuxtLink>
        <NuxtLink
          v-if="url"
          tag="a"
          :to="url"
          :class="`ease-in duration-300 transform drop-shadow-button  bg-yellow-400 hover:bg-green-500 h-6 w-6 flex justify-center items-center  text-gray-900  border border-1 border-gray-900 rounded`"
        >
          <slot>
            <IconMdi:link />
          </slot>
        </NuxtLink>
        <div class="ml-auto"></div>

        <div
          v-if="keynote"
          title="Keynote"
          class="ease-in duration-300 transform bg-green-400 hover:bg-green-500 h-6 w-6 flex justify-center items-center text-gray-900 border border-1 border-gray-900 rounded-full drop-shadow-button"
        >
          <IconPh:microphone-stage-fill />
        </div>

        <div
          v-if="panel"
          title="Panel"
          class="ease-in duration-300 transform bg-green-400 hover:bg-green-500 h-6 w-6 flex justify-center items-center text-gray-900 border border-1 border-gray-900 rounded-full drop-shadow-button"
        >
          <IconHealthicons:group-discussion-meetingx3 />
        </div>
      </div>
    </div>
  </div>
</template>
