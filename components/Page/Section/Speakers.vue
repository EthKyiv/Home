<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>
<template>
  <PageSection id="speakers">
    <PageSectionTitle title="Confirmed speakers">
      <template #before>
        <BrandSkyline
          class="h-48 w-auto text-gray-500 md:mb-2 lg:mb-4 max-w-80vw"
        />
      </template>
      <p>
        We have an amazing speaker line up waiting for you in Kyiv that is
        <u> still being finalized.</u><br />
        Do you want to speak at ETHKyiv or know someone who should?<br />
        Please fill out the
        <Anchor
          class="font-bold text-primary-500"
          v-bind="app.links.application_speaker"
          >speaker application form.</Anchor
        >
      </p>
    </PageSectionTitle>
    <Speaker></Speaker>
  </PageSection>
</template>
