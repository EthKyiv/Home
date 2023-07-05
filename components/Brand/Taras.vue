<script>
export default {
  props: {
    height: {
      type: Number,
      default: 1367,
    },
    width: {
      type: Number,
      default: 1165,
    },
  },
}
</script>
<template>
  <img src="/logo/taras.svg" alt="Logo Taras" :width="width" :height="height" />
</template>
