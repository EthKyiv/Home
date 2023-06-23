<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>
<template>
  <PageSection id="tickets">
    <h2 class="section-title">Attend & support</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-8 mt-4">
      <Tickets
        title="hacker"
        price="Free"
        color="bg-green-400"
        button-title="Apply"
        :link="{ to: '/hackathon', title: 'Apply to hack' }"
      ></Tickets>
      <Tickets title="online" price="TBA" color="bg-blue-500"></Tickets>
      <Tickets
        featured
        title="general"
        price="TBA"
        color="bg-yellow-500"
      ></Tickets>
    </div>
  </PageSection>
</template>
