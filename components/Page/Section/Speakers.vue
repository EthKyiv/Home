<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>
<template>
  <PageSection
    id="speakers"
    class="flex-1 flex flex-col items-start justify-center mt-10"
  >
    <h2 class="text-gray-800 dark:text-slate-300 font-bold capitalize text-3xl">
      Speakers
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-8 mt-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
      asperiores eveniet, quibusdam atque consectetur excepturi libero quaerat
      est non accusantium dignissimos, facere tempora repellendus? Voluptatem
      aperiam optio doloribus nam veniam.
    </div>
  </PageSection>
</template>
