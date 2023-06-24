<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>
<template>
  <PageSection id="FAQ">
    <PageSectionTitle title="Frequently Asked Questions">
      <template #before>
        <BrandSkyline
          class="h-48 w-auto text-primary-500 md:mb-2 lg:mb-4 max-w-80vw"
        />
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
