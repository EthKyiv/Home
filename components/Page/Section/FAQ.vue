<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>
<template>
  <PageSection
    id="FAQ"
    class="flex-1 flex flex-col items-start justify-center mt-10 py-5"
  >
    <div>
      <h2
        class="text-gray-800 dark:text-slate-300 font-bold capitalize text-3xl"
      >
        Frequently Asked Questions
      </h2>
      <p class="mt-4 text-base">
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
    </div>
    <FAQ></FAQ>
  </PageSection>
</template>
