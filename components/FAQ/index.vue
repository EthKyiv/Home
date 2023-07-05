<script lang="ts" setup>
const { data } = await useAsyncData('faq', () =>
  queryContent('/faq').sort({ order: 1, $numeric: true }).limit(3).find()
)
const { data: all_faq } = await useAsyncData('faq_more', () =>
  queryContent('/faq').sort({ order: 1, $numeric: true }).skip(3).find()
)

// state
const show = ref(false)

// methods
const toggle = () => {
  show.value = !show.value
}

// lifecycle
// onMounted(() => {
//   setTimeout(() => (show.value = true), 100)
// })
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-8 mt-4">
    <template v-if="data && data.length > 0">
      <FAQEntery v-for="question in data" :key="question.slug" :data="question">
      </FAQEntery>
    </template>
    <template v-if="all_faq && all_faq.length > 0">
      <div v-if="!show" class="col-span-2 flex items-center justify-end">
        <Button size="sm" type="secondary" @click="toggle">show more FAQ ( {{ all_faq.length }} )</Button>
      </div>

      <template v-if="show">
        <FAQEntery
          v-for="question in all_faq"
          :key="question.slug"
          :data="question"
        >
        </FAQEntery>
      </template>
      <div v-if="show" class="col-span-2 flex items-center justify-end">
        <Button size="sm" type="secondary" @click="toggle">Hide FAQ</Button>
      </div>
    </template>
  </div>
</template>
