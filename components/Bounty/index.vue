<script lang="ts" setup>
const { data } = await useAsyncData('bounties', () =>
  queryContent('/bounties').sort({ order: -1, $numeric: true }).find()
)
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-4 mt-4">
    <template v-if="data && data.length > 0">
      <BountyCard v-for="bounty in data" :key="bounty.title" :data="bounty">
      </BountyCard>
    </template>
  </div>
</template>
