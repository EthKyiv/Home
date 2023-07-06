<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
// state
const app = useAppConfig() as AppConfigInput
// data

const { data: card } = await useAsyncData('home_partials', () =>
  queryContent('/page/home')
    .where({ _partial: true, type: { $eq: 'card' } })
    .find()
)

// meta
definePageMeta({
  layout: 'page-front',
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
          <ContentDoc v-slot="{ doc }" path="page/">
            <div class="flex-initial flex flex-col z-10 mb-8 lg:mb-10">
              <div class="flex flex-col-reverse md:flex-row gap-6">
                <span
                  class="text-xl md:text-2xl lg:text-3xl font-bold uppercase"
                >
                  {{ doc.date }}
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
                <span class="sr-only"> {{ doc.title }} </span>
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
                  {{ doc.subtitle }}
                </h2>
                <ContentRenderer :value="doc" class="text-sm" />
              </div>
            </div>
          </ContentDoc>
          <div
            class="relative grid grid-cols-1 w-full lg:grid-cols-2 gap-4 md:w-80vw xl:w-3/4 2xl:w-2/3 grid-auto-rows"
          >
            <kinesis-element :strength="15" class="col-span-2">
              <BrandTaras
                :width="233"
                :height="254"
                class="absolute max-w-30 max-h-30 md:max-w-none md:max-h-none top-30 md:top-0 right-0 transform rotate-12 -translate-y-59 translate-x-10 z-0"
              />
            </kinesis-element>
          </div>

          <div
            class="grid grid-cols-1 w-full lg:grid-cols-2 gap-4 md:w-80vw xl:w-3/4 2xl:w-2/3 grid-auto-rows relative z-10"
          >
            <Card v-if="card[0]" class="drop-shadow-dec z-10">
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
            <Card v-if="card[1]">
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
                    v-bind="app.links.application_volunteer"
                  >
                    {{ card[1].button }}
                    <IconMdi:open-in-new class="text-sm ml-3" />
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
          <kinesis-element :strength="40" class="z-1">
            <nuxt-img
              src="/logo/dimond.png"
              alt="eth kyiv logo"
              class="absolute hidden xl:block bottom-0 right-40 transform xl:translate-y-1/3"
              format="webp"
              width="150"
            />
          </kinesis-element>
        </kinesis-container>
      </PageSection>

      <PageSection
        id="about"
        class="flex-1 flex flex-col items-start justify-center mt-10 py-5"
      >
        <ContentQuery v-slot="{ data }" path="page/section/dayzero" find="one">
          <h2 class="section-title" data-aos="fade-up">
            {{ data.title }}
          </h2>

          <div class="mt-10 ml-auto grid md:grid-cols-2 gap-4 md:gap-16">
            <div data-aos="fade-up">
              <ContentRenderer
                :value="data"
                class="prose leading-tight text-gray-800 dark:text-slate-300 max-w-none"
              >
                <template #empty></template>
              </ContentRenderer>
            </div>
            <div
              class="bg-gray-100 aspect-video"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <NuxtLink
                title="official video"
                :to="data.video"
                target="_blank"
                no-rel
              >
                <nuxt-img
                  :src="data.video_cover"
                  alt="cover img video"
                  format="webp"
                  width="650"
                  height="407"
                />
              </NuxtLink>
            </div>
          </div>
        </ContentQuery>
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
