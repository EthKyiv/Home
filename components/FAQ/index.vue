<script lang="ts" setup>
const { data } = await useAsyncData('faq', () =>
  queryContent('/faq').sort({ order: -1, $numeric: true }).find()
)
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-8 mt-4">
    <template v-if="data && data.length > 0">
      <FAQEntery v-for="question in data" :key="question.slug" :data="question">
      </FAQEntery>
    </template>
  </div>
</template>
