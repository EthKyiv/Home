<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>
<template>
  <PageSection id="agenda">
    <h2 class="section-title">Agenda</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-4 mt-4">
      <Card class="mb-4 bg-yellow-200 col-span-2">
        <CardContent>
          <div class="uppercase font-bold">
            <span class="text-secondary-500"> Join us</span>
          </div>

          <h3
            class="text-primary-500 uppercase font-bold text-3xl leading-tight"
          >
            Schedule
          </h3>
          <div class="prose dark:text-slate-400">
            <ul>
              <li>
                Et si turpitudinem fugimus in statu et motu corporis, quid est
                cur pulchritudinem non sequamur?
              </li>
              <li>
                Res tota, Torquate, non doctorum hominum, velle post mortem
                epulis celebrari memoriam sui nominis.
              </li>
              <li>
                Equidem etiam Epicurum, in physicis quidem, Democriteum puto.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card class="mb-4">
        <CardContent>
          <div class="uppercase font-bold">
            <span class="text-secondary-500"> WINNERS ANNOUNCED</span>
          </div>

          <h3
            class="text-primary-500 uppercase font-bold text-5xl leading-tight"
          >
            48HRS
          </h3>
          <p>
            Ladipisicing elit. Fugiat ea reiciendis veniam aut repellat, maiores
            dolor suscipit tempore quod perspiciatis distinctio accusantium
            commodi molestias, labore blanditiis nisi. Corporis, saepe ullam.
          </p>
        </CardContent>
      </Card>
    </div>
  </PageSection>
</template>
