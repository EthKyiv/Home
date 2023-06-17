<script lang="ts" setup>
// composable

// meta
definePageMeta({
  // pageTransition: {
  //   name: 'slide-right',
  //   mode: 'out-in'
  // },
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <PageBody>
      <kinesis-container event="move">
        <PageSection
          id="home"
          class="flex flex-col items-start justify-center py-10 md:py-20 lg:py-50"
        >
          <div class="flex-initial flex flex-col z-10 mb-8 lg:mb-15">
            <span class="text-xl md:text-2xl lg:text-3xl font-bold uppercase"
              >14 - 15 September 2023
            </span>
            <h1 class="mt-0">
              <span class="sr-only"> ETH Kyiv</span>
              <BrandLogoDecorative
                class="w-full md:w-auto"
                alt="ETH Kyiv logo"
              />
            </h1>
          </div>
          <div
            class="grid grid-cols-1 w-full lg:grid-cols-2 gap-4 md:w-80vw xl:w-2/3"
          >
            <Card class="mb-4">
              <CardContent>
                <div class="uppercase font-bold text-gray-300">
                  <span class="text-primary-500">Kyiv</span> |
                  <span class="text-secondary-500"> Online</span>
                </div>

                <h2
                  class="text-primary-500 uppercase font-bold text-4xl md:text-5xl"
                >
                  Hackathon
                </h2>
                <Button
                  size="lg"
                  class="font-bold mt-8 stretched-link"
                  type="primary"
                  target="_blank"
                  to="hackathon"
                >
                  Apply to attend
                </Button>
              </CardContent>
            </Card>
            <div class="relative">
              <kinesis-element :strength="20">
                <BrandPortrait
                  class="absolute hidden lg:block top-0 right-0 transform -translate-y-59 translate-x-10 z-0"
                />
              </kinesis-element>
              <Card class="mb-4 drop-shadow-dec z-10">
                <CardContent>
                  <div class="uppercase font-bold text-gray-300">
                    <span class="text-secondary-500">
                      Ukraine’s Premier Ethereum
                    </span>
                  </div>

                  <h2
                    class="text-primary-500 uppercase font-bold text-4xl md:text-5xl"
                  >
                    Volunteer
                  </h2>

                  <Button
                    size="lg"
                    class="font-bold mt-8 stretched-link"
                    type="secondary"
                    target="_blank"
                    href="https://"
                  >
                    volunteer
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </PageSection>
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
