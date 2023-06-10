<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <div
    class="card duration-300 transition-colors w-full relative rounded overflow-hidden bg-white/[0.88] dark:bg-slate-950/[0.88] border-2 border-gray-800 dark:border-slate-300/[0.5]"
  >
    <div
      v-if="disabled"
      class="absolute z-10 top-0 left-0 w-full h-full bg-slate-800/[0.75] cursor-not-allowed"
    />
    <slot />
  </div>
</template>
