<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

// state
const app = useAppConfig() as AppConfigInput

// page data
const { data } = await useAsyncData('hackathon', () =>
  queryContent('/page/hackathon').findOne()
)
const { data: card } = await useAsyncData('hackathon_partials', () =>
  queryContent('/page/home')
    .where({ _partial: true, type: { $eq: 'card' } })
    .find()
)

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
        <kinesis-container event="move">
          <div class="flex-initial flex flex-col z-10 mb-8 lg:mb-10">
            <div class="flex flex-col-reverse md:flex-row gap-6 m">
              <span
                class="text-xl md:text-2xl lg:text-3xl font-bold uppercase h-9"
              >
                {{ data.date }}
              </span>
            </div>
            <h1 class="mt-0">
              <span class="sr-only"> ETH Kyiv</span>
              <BrandLogoDecorative
                class="w-full lg:w-630px md:w-auto"
                alt="ETH Kyiv logo"
              />
            </h1>

            <div
              class="w-full md:w-630px mt-4 bg-white/[0.8] dark:bg-slate-900/[0.8] md:bg-transparent md:dark:bg-transparent"
            >
              <h2
                class="text-gray-800 dark:text-slate-300 font-bold uppercase text-sm"
              >
                {{ data.title }}
              </h2>
              <ContentRenderer :value="data" class="text-sm" />
            </div>
          </div>

          <div
            class="relative grid grid-cols-1 w-full lg:grid-cols-2 gap-4 md:w-80vw xl:w-3/4 2xl:w-2/3 grid-auto-rows"
          >
            <kinesis-element :strength="15" class="col-span-2">
              <BrandTaras
                :width="233"
                :height="254"
                class="absolute w-30 h-30 md:w-auto md:h-auto top-30 md:top-0 right-0 transform rotate-12 -translate-y-59 translate-x-10 z-0"
              />
            </kinesis-element>
          </div>
          <div
            class="grid grid-cols-1 w-full lg:grid-cols-2 gap-4 md:w-80vw xl:w-3/4 2xl:w-2/3 grid-auto-rows"
          >
            <Card v-if="card[0]"  class="drop-shadow-dec z-10">
              <CardContent>
                <div class="uppercase font-bold text-gray-300">
                  <span class="text-primary-500">Kyiv</span> |
                  <span class="text-secondary-500"> Online</span>
                </div>
                <h2
                  class="text-primary-500 uppercase font-bold text-4xl md:text-5xl"
                >
                  {{ card[0].title }}
                </h2>
                <ContentRenderer
                  :value="card[0]"
                  class="text-sm leading-tight mt-3"
                />
                <CardFooter class="self-start md:self-auto">
                  <!-- @TODO add link via content -->
                  <Button
                    size="lg"
                    class="font-bold stretched-link"
                    type="primary"
                    target="_blank"
                    v-bind="app.links.application_hacker"
                  >
                    {{ card[0].button }}
                    <IconMdi:open-in-new class="text-sm ml-3" />
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
            <Card v-if="card[1]" >
              <CardContent>
                <div class="uppercase font-bold text-gray-300">
                  <span class="text-primary-500">Kyiv</span> |
                  <span class="text-secondary-500"> Online</span>
                </div>
                <h2
                  class="text-primary-500 uppercase font-bold text-4xl md:text-5xl"
                >
                  {{ card[1].title }}
                </h2>
                <ContentRenderer
                  :value="card[1]"
                  class="text-sm leading-tight mt-3"
                />
                <CardFooter class="self-start md:self-auto">
                  <!-- @TODO add link via content -->
                  <Button
                    size="lg"
                    class="font-bold stretched-link"
                    type="secondary"
                    target="_blank"
                    v-bind="app.links.application_mentor"
                  >
                    {{ card[1].button }}
                    <IconMdi:open-in-new class="text-sm ml-3" />
                    <!-- <IconMdi:discord class="ml-3" /> -->
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </kinesis-container>
      </PageSection>

      <PageSectionBounties></PageSectionBounties>
      <PageSectionAgenda></PageSectionAgenda>
      <PageSectionPartners></PageSectionPartners>
      <PageSectionFAQ></PageSectionFAQ>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';
@media screen and (max-width: 480px) {
}
</style>
