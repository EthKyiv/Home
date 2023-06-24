<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
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
})
</script>
<template>
  <div
    class="card hover:drop-shadow-dec rounded border-2 border-gray-800 dark:border-slate-400/[0.5] bg-white dark:bg-black flex flex-col"
  >
    <img
      v-if="img"
      class="aspect-square border-2 bg-green-500 border-gray-800 dark:border-slate-400 object-cover m-4 filter saturate-0"
      :src="img"
      :alt="name"
    />
    <div
      v-else
      class="aspect-square flex justify-center items-center border-2 bg-green-500 border-gray-800 dark:border-slate-400 object-cover m-4"
    >
      <IconTeenyicons:lego-outline class="text-8xl text-slate-900" />
    </div>

    <div class="px-4 pb-4">
      <h4 class="font-bold text-lg text-gray-800 dark:text-slate-400">
        {{ name }}
      </h4>
      <p class="font-light text-sm text-gray-800">{{ description }}</p>
      <div class="flex gap-4 pt-2">
        <NuxtLink
          v-if="twitter"
          tag="a"
          :to="twitter"
          :class="`ease-in duration-300 transform  bg-blue-400 hover:bg-green-500 h-6 w-6 flex justify-center items-center  text-gray-900  border border-1 border-gray-900 rounded hover:-rotate-7`"
        >
          <slot>
            <IconMdi:twitter />
          </slot>
        </NuxtLink>
        <NuxtLink
          v-if="url"
          tag="a"
          :to="url"
          :class="`ease-in duration-300 transform  bg-yellow-400 hover:bg-green-500 h-6 w-6 flex justify-center items-center  text-gray-900  border border-1 border-gray-900 rounded`"
        >
          <slot>
            <IconMdi:link />
          </slot>
        </NuxtLink>

        <div
          v-if="keynote"
          title="Keynote"
          class="ease-in duration-300 transform bg-green-400 hover:bg-green-500 h-6 w-6 flex justify-center items-center text-gray-900 border border-1 border-gray-900 rounded"
        >
          <IconTabler:military-award />
        </div>

        <div
          v-if="panel"
          title="Keynote"
          class="ease-in duration-300 transform bg-green-400 hover:bg-green-500 h-6 w-6 flex justify-center items-center text-gray-900 border border-1 border-gray-900 rounded"
        >
          <IconHealthicons:group-discussion-meetingx3-outline />
        </div>
      </div>
    </div>
  </div>
</template>
