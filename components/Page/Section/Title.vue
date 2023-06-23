<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="section-intro-wrapper">
    <slot name="before"></slot>
    <h2 class="section-title">
      <slot name="title">{{ title }}</slot>
    </h2>
    <div class="section-intro">
      <div class="section-intro-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
