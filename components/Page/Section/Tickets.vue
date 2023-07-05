<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>
<template>
  <PageSection id="tickets">
    <h2 class="section-title">Attend & support</h2>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 w-full mb-8 mt-4">
      <Tickets
        title="hacker"
        subtitle="Join us in building better tomorrows for web3 and all those that it can support!"
        price="Free"
        :features="[
          'Access to Team Channels',
          'Invitation to Online Hackathon',
          'RSVP to QuickStart Scramble',
        ]"
        color="bg-green-400"
        button-title="Apply"
        :link="{ to: '/hackathon', title: 'Apply to hack' }"
      ></Tickets>
      <Tickets
        title="online"
        subtitle="Show your support! Get invovled!
Become a Virtual Attendee!!"
        :features="[
          'Private Link to Streaming Content',
          'Access to Conference Channels',
          'RSVP to Breakout Sessions',
        ]"
        price="TBA"
        color="bg-blue-500"
      ></Tickets>
      <Tickets
        featured
        title="general"
        subtitle="Recieve all benefits of Online Pass, plus the following:"
        :features="[
          'Registration to Live Programming',
          'Founders Market Access VIP Drinks and Catering',
          'Special Travel Discounts',
        ]"
        price="TBA"
        color="bg-yellow-500"
      ></Tickets>
    </div>
  </PageSection>
</template>
