<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="dl"
    class="bg-white dark:bg-slate-950/[0.88] rounded border-2 dark:border-1 border-gray-800 dark:border-slate-300/[0.5] p-6 col-span-2"
  >
    <dt>
      <DisclosureButton
        class="flex flex-col justify-between items-start w-full text-left text-gray-800 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200 font-bold text-lg"
      >
        <div class="flex justify-between w-full">
          <span>Do you offer technical support?</span>
          <IconMdi:triangle
            :class="[
              open ? 'rotate-180 ' : 'rotate-90',
              `ease-in duration-300 transform  bg-blue-400  text-gray-900 text-xl p-1 border border-1 border-gray-900 rounded w-6 h-6`,
            ]"
          />
        </div>
      </DisclosureButton>
    </dt>
    <DisclosurePanel as="dl" class="text-base pr-6"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit minus
      quibusdam veritatis mollitia dicta doloribus repellat ullam beatae,
      perferendis blanditiis recusandae quidem. Ex perferendis animi praesentium
      dolore, similique quod sunt.</DisclosurePanel
    >
  </Disclosure>
</template>
