<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>
<template>
  <PageSection
    id="bounties"
    class="flex-1 flex flex-col items-start justify-center mt-10"
  >
    <h2 class="text-gray-800 dark:text-slate-300 font-bold capitalize text-3xl">
      Bounties
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-4 mt-4">
      <Card class="mb-4 bg-yellow-200">
        <CardContent>
          <div class="uppercase font-bold">
            <span class="text-secondary-500"> Join us</span>
          </div>

          <h3
            class="text-primary-500 uppercase font-bold text-3xl leading-tight"
          >
            Want to Sponsor a bounty?
          </h3>
          <h4 class="font-bold text-lg mb-2">description</h4>
          <p>
            Ladipisicing elit. Fugiat ea reiciendis veniam aut repellat, maiores
            dolor suscipit tempore quod perspiciatis distinctio accusantium
            commodi molestias, labore blanditiis nisi. Corporis, saepe ullam.
          </p>
        </CardContent>
      </Card>
      <Card class="mb-4">
        <CardContent>
          <div class="uppercase font-bold">
            <span class="text-secondary-500"> 5000 ETH</span>
          </div>

          <h3
            class="text-primary-500 uppercase font-bold text-3xl leading-tight"
          >
            Other one
          </h3>
          <h4 class="font-bold text-lg mb-2">Subtitle bounty description</h4>

          <p>
            Ladipisicing elit. Fugiat ea reiciendis veniam aut repellat, maiores
            dolor suscipit tempore quod perspiciatis distinctio accusantium
            commodi molestias, labore blanditiis nisi. Corporis, saepe ullam.
          </p>
        </CardContent>
      </Card>
      <Card class="mb-4">
        <CardContent>
          <div class="uppercase font-bold">
            <span class="text-secondary-500"> 500 ETH</span>
          </div>

          <h3
            class="text-primary-500 uppercase font-bold text-3xl leading-tight"
          >
            Some long long sponsor name
          </h3>
          <h4 class="font-bold text-lg mb-2">description</h4>

          <p>
            maiores dolor suscipit tempore quod perspiciatis distinctio
            accusantium commodi molestias, labore blanditiis nisi. Corporis,
            saepe ullam.
          </p>
        </CardContent>
      </Card>
    </div>
  </PageSection>
</template>
