<script lang="ts" setup>
const { data: bounty } = await useAsyncData('bounty', () =>
  queryContent('/bounties').where({ hidden: false }).limit(1).find()
)
</script>
<template>
  <PageSection v-if="bounty?.length > 0" id="bounties">
    <ContentQuery v-slot="{ data }" path="page/section/bounties" find="one">
      <PageSectionTitle v-if="data" :title="data.title">
        <template #before>
          <!-- <BrandSkyline
            class="h-48 w-auto text-gray-500 md:mb-2 lg:mb-4 max-w-80vw"
          /> -->
        </template>
        <ContentRenderer
          :value="data"
          class="prose leading-tight text-gray-800 dark:text-slate-300 max-w-none"
        >
          <template #empty></template>
        </ContentRenderer>
      </PageSectionTitle>
    </ContentQuery>
    <Bounty></Bounty>
  </PageSection>
</template>
