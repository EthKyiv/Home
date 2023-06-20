<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
// state
const app = useAppConfig() as AppConfigInput
// data
const { data } = await useAsyncData('home', () =>
  queryContent('/page/home').findOne()
)
const card = await queryContent('page', 'home')
  .where({ _partial: true, type: { $eq: 'card' } })
  .find()

// meta
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <PageBody>
      <kinesis-container event="move">
        <PageSection
          id="home"
          class="flex flex-col items-start justify-center py-10 md:py-10 lg:py-20"
        >
          <div class="flex-initial flex flex-col z-10 mb-8 lg:mb-10">
            <div class="flex flex-col-reverse md:flex-row gap-6">
              <span class="text-xl md:text-2xl lg:text-3xl font-bold uppercase">
                {{ data.date }}
              </span>
              <Button
                size="sm"
                class="font-bold whitespace-nowrap self-start md:self-auto"
                type="opposite"
                :to="{ name: 'index', hash: '#tickets' }"
              >
                Register
              </Button>
            </div>

            <h1 class="mt-0">
              <span class="sr-only"> ETH Kyiv</span>
              <BrandLogoDecorative
                class="w-full lg:w-630px md:w-auto"
                alt="ETH Kyiv logo"
              />
            </h1>

            <div
              class="w-full md:w-630px mt-4 bg-white/[0.8] dark:bg-slate-900/[0.8] sm:bg-transparent sm:dark:bg-transparent"
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
            <kinesis-element :strength="30" class="col-span-2">
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
            <Card class="drop-shadow-dec z-10">
              <CardContent>
                <div class="uppercase font-bold text-gray-300">
                  <span class="text-secondary-500 text-sm">
                    Ukraine’s Premier Ethereum Conference
                  </span>
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
                  <Button
                    size="lg"
                    class="font-bold stretched-link"
                    type="secondary"
                    v-bind="app.links.application_speaker"
                  >
                    {{ card[0].button }}
                    <IconMdi:open-in-new class="text-sm ml-3" />
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>

            <Card>
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
                  <Button
                    size="lg"
                    class="font-bold stretched-link"
                    type="primary"
                    v-bind="app.links.application_mentor"
                  >
                    Mentor
                    <IconMdi:open-in-new class="text-sm ml-3" />
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </PageSection>
      </kinesis-container>

      <PageSection
        id="about"
        class="flex-1 flex flex-col items-start justify-center mt-10 py-5"
      >
        <h2
          class="text-gray-800 dark:text-slate-300 font-bold capitalize text-3xl"
        >
          DayZero
        </h2>
        <div
          class="grid md:grid-cols-2 lg:grid-cols-6 gap-4 w-full mb-8 mt-4 bg-white/[0.8] border-black"
        >
          <div class="col-span-3">
            <BrandLogo class="text-white" />
          </div>
        </div>
      </PageSection>
      <PageSectionTickets></PageSectionTickets>
      <PageSectionSpeakers></PageSectionSpeakers>
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
