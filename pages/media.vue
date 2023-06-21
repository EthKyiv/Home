<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
// state
const app = useAppConfig() as AppConfigInput
// data

// meta
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection
        id="home"
        class="flex flex-col items-start justify-center py-10 md:py-10 lg:py-20"
      >
        <ContentDoc path="page/media" class="prose" />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';

@media screen and (max-width: 480px) {
}
</style>
