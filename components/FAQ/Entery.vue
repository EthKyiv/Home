<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="dl"
    class="bg-white my-0 dark:bg-slate-950/[0.88] rounded border-2 dark:border-1 border-gray-800 dark:border-slate-300/[0.5] p-6 col-span-2"
  >
    <dt>
      <DisclosureButton
        class="flex flex-col justify-between items-start w-full text-left text-gray-800 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200 font-bold text-lg"
      >
        <div class="flex justify-between w-full">
          <span class="pr-10">{{ data.title }}</span>
          <div
            :class="[
              open ? 'rotate-90' : 'rotate-0',
              'drop-shadow-button transform ease-in duration-300 bg-blue-400 p-1.5 border border-1 border-gray-900 rounded flex  items-center w-6 h-6',
            ]"
          >
            <IconFa:question
              :class="[
                open ? 'hidden' : '',
                `ease-in duration-300 transform   text-gray-900  w-6 h-6 `,
              ]"
            />
            <IconFa:check
              :class="[
                open ? 'rotate-270' : 'hidden',
                `ease-in duration-300 transform  text-gray-900  w-6 h-6`,
              ]"
            />
          </div>
        </div>
      </DisclosureButton>
    </dt>
    <transition
      enter-active-class="transition duration-250 ease-out"
      enter-from-class="transform scale-96 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-96 opacity-0"
    >
      <DisclosurePanel as="dd" class="text-base pr-6 ml-0" :unmount="false" >
        <ContentRenderer
          :value="data"
          class="prose max-w-none text-gray-800 dark:text-slate-400 prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600"
        />
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>
