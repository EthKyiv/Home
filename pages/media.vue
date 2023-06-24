<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
// state
const app = useAppConfig() as AppConfigInput
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
        <ContentDoc v-slot="{ doc }" path="page/media">
          <h1 class="text-primary-500 uppercase font-bold text-4xl md:text-5xl">
            {{ doc.title }}
          </h1>
          <ContentRenderer
            :value="doc"
            class="prose prose-primary mt-4 xl:max-w-2/3"
          />
        </ContentDoc>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';

@media screen and (max-width: 480px) {
}
</style>
