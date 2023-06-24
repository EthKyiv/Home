<script lang="ts" setup>
defineProps({
  media: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <PageSection id="partners">
    <PageSectionTitle v-if="!media" title="Our partners and supporters">
      <template #before>
        <BrandSkyline
          class="h-48 w-auto text-primary-500 md:mb-2 lg:mb-4 max-w-80vw"
        />
      </template>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </PageSectionTitle>
    <PartnerMedia v-if="media" />
    <Partner v-else></Partner>
  </PageSection>
</template>
