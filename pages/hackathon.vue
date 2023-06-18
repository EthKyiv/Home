<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

// state
const app = useAppConfig() as AppConfigInput
// composable

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
            <div class="flex flex-col-reverse md:flex-row gap-6 m">
              <span
                class="text-xl md:text-2xl lg:text-3xl font-bold uppercase h-9"
                >14 - 15 September 2023
              </span>
            </div>
            <h1 class="mt-0">
              <span class="sr-only"> ETH Kyiv</span>
              <BrandLogoDecorative
                class="w-full md:w-auto"
                alt="ETH Kyiv logo"
              />
            </h1>
            <div class="lg:w-1/2 mt-4">
              <h2
                class="text-gray-800 dark:text-slate-300 font-bold uppercase text-sm"
              >
                Ukrains top community-driven Ethereum event
              </h2>
              <p class="text-sm">
                Through the hackathon, conference and side events like DayZero,
                discussions, collaborations, and vast networking, we aim to
                further establish Kyiv as an innovation and infrastructure
                development leader.
              </p>
            </div>
          </div>
          <div
            class="grid grid-cols-1 w-full lg:grid-cols-2 gap-4 md:w-80vw xl:w-2/3"
          >
            <Card class="mb-4 drop-shadow-dec">
              <CardContent>
                <div class="uppercase font-bold text-gray-300">
                  <span class="text-primary-500">Kyiv</span> |
                  <span class="text-secondary-500"> Online</span>
                </div>

                <h2
                  class="text-primary-500 uppercase font-bold text-4xl md:text-5xl"
                >
                  Build
                </h2>
                <p class="text-sm leading-tight mt-3">
                  The 3 day Hackathon with more than 200 developers, plus
                  mentors, judges, speakers & staff.
                </p>
                <CardFooter>
                  <Button
                    size="lg"
                    class="font-bold stretched-link"
                    type="primary"
                    target="_blank"
                    v-bind="app.links.application_hacker"
                  >
                    Apply to attend <IconMdi:open-in-new class="text-sm ml-3" />
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
            <div class="relative">
              <kinesis-element :strength="20">
                <BrandPortrait
                  class="absolute hidden lg:block top-0 right-0 transform -translate-y-59 translate-x-10 z-0"
                />
              </kinesis-element>
              <Card class="mb-4 z-10">
                <CardContent>
                  <div class="uppercase font-bold text-gray-300">
                    <span class="text-primary-500">Kyiv</span> |
                    <span class="text-secondary-500"> Online</span>
                  </div>

                  <h2
                    class="text-primary-500 uppercase font-bold text-4xl md:text-5xl"
                  >
                    Volunteer
                  </h2>
                  <p class="text-sm leading-tight mt-3">
                    With 1500 attendants, 50 speakers and thousands of online
                    viewers. This is where Ethereum meets Ukraine, and Kyiv
                    meets the future.
                  </p>
                  <CardFooter>
                    <Button
                      size="lg"
                      class="font-bold stretched-link"
                      type="secondary"
                      target="_blank"
                      v-bind="app.links.discord"
                    >
                      volunteer <IconMdi:discord class="ml-3" />
                    </Button>
                  </CardFooter>
                </CardContent>
              </Card>
            </div>
          </div>
        </PageSection>

        <PageSectionBounties></PageSectionBounties>
        <PageSectionAgenda></PageSectionAgenda>
        <PageSectionPartners></PageSectionPartners>
        <PageSectionFAQ></PageSectionFAQ>
      </kinesis-container>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);

html.dark {
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
@media screen and (max-width: 480px) {
}
</style>
