<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Card class="mb-4">
    <CardContent>
      <div class="uppercase font-bold">
        <span class="text-secondary-500"> {{ data.pre_title }}</span>
      </div>

      <h3 class="text-primary-500 uppercase font-bold text-3xl leading-tight">
        {{ data.title }}
      </h3>
      <h4 v-if="data.sub_title" class="font-bold text-lg mb-2">{{ data.sub_title }}</h4>
      <ContentRenderer
        :value="data"
        class="prose max-w-none text-gray-800 dark:text-slate-400 prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600"
      > <template #empty></template
            ></ContentRenderer>
    </CardContent>
  </Card>
</template>
