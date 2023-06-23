<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>
<template>
  <PageSection id="FAQ">
    <PageSectionTitle title="Frequently Asked Questions">
      <template #before>
        <BrandSkyline class="h-48 w-auto text-primary-500 mb-8" />
      </template>
      <p>
        Can't find the answer you're looking for?<br />Read the
        <Anchor class="font-bold" v-bind="app.links.hacker_manual"
          >Hackers Guide</Anchor
        >
        or visit our
        <Anchor class="font-bold" v-bind="app.links.discord_support"
          >#member-support</Anchor
        >
        on Discord channel to ask for help.
      </p>
    </PageSectionTitle>

    <FAQ></FAQ>
  </PageSection>
</template>
