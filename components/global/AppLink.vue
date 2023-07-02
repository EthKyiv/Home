<script lang="ts" setup>
const app = useAppConfig() as AppConfigInput
// micro compiler
const props = defineProps({
  to: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <Anchor
    v-if="app.links[`${to}`]"
    class="font-bold"
    v-bind="app.links[`${to}`]"
  >
    <slot />
  </Anchor>
</template>
