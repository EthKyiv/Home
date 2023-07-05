<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  badgeClass: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div :class="[badgeClass, 'partner-badge']" :title="name">
    <nuxt-img
      tabindex="0"
      class="partner-img"
      :src="logo"
      :alt="name"
      role="img"
      format="webp"
      width="211"
    />
  </div>
</template>
