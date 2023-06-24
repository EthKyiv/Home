<script lang="ts" setup>
const { data } = await useAsyncData('speaker', () =>
  queryContent('/speaker').sort({ order: -1, $numeric: true }).find()
)
</script>

<template>
  <div
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8 w-full"
  >
    <template v-if="data && data.length > 0">
      <SpeakerCard v-for="speaker in data" :key="speaker.name" v-bind="speaker">
      </SpeakerCard>
    </template>
    <div v-else class="col-span-3 text-lg font-bold">
      Come back later to see the updated lineup
    </div>
  </div>
</template>
