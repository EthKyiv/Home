<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <div class="background-overlay">
      <!-- <div
        class="absolute top-0 left-0 transform translate-x-64 translate-y-4 h-14 w-14 rounded bg-gray-900 dark:bg-white"
      ></div> -->
      <div
        class="absolute hidden lg:block top-0 right-0 transform translate-x-18 translate-y-20 rotate-340 linear-wipe"
      >
        <BrandFlowerSm></BrandFlowerSm>
      </div>
      <div
        class="absolute hidden md:block bottom-0 right-0 transform translate-x-60 -translate-y-30 linear-wipe"
      >
        <BrandFlower></BrandFlower>
      </div>
      <!-- <div class="absolute bottom-0 right-0 triangle-shape"></div> -->
    </div>
    <PageBody>
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
            <BrandLogoDecorative class="w-full md:w-auto" alt="ETH Kyiv logo" />
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
                href="https://"
              >
                Join the hack
              </Button>
            </CardContent>
          </Card>
          <div class="relative">
            <BrandPortrait
              class="absolute hidden md:block top-0 right-0 transform -translate-y-59 translate-x-10 z-0"
            />
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
                  Conference
                </h2>

                <Button
                  size="lg"
                  class="font-bold mt-8 stretched-link"
                  type="secondary"
                  target="_blank"
                  href="https://"
                >
                  Speak or sponsor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>
      <PageSection
        id="sponsors"
        class="flex-1 flex flex-col items-start justify-center mt-10"
      >
        <h2
          class="text-gray-800 dark:text-slate-300 font-bold uppercase text-5xl"
        >
          Sponsors
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full my-8">
          <Card class="mb-4">
            <CardContent>
              <div class="uppercase font-bold">
                <span class="text-secondary-500"> 15000 ETH</span>
              </div>

              <h3 class="text-primary-500 uppercase font-bold text-3xl">
                Best sponsor
              </h3>
              <h4 class="font-bold text-lg mb-2">description</h4>
              <p>
                Ladipisicing elit. Fugiat ea reiciendis veniam aut repellat,
                maiores dolor suscipit tempore quod perspiciatis distinctio
                accusantium commodi molestias, labore blanditiis nisi. Corporis,
                saepe ullam.
              </p>
            </CardContent>
          </Card>
          <Card class="mb-4">
            <CardContent>
              <div class="uppercase font-bold">
                <span class="text-secondary-500"> 5000 ETH</span>
              </div>

              <h3 class="text-primary-500 uppercase font-bold text-3xl">
                Other one
              </h3>
              <h4 class="font-bold text-lg mb-2">
                Subtitle bounty description
              </h4>

              <p>
                Ladipisicing elit. Fugiat ea reiciendis veniam aut repellat,
                maiores dolor suscipit tempore quod perspiciatis distinctio
                accusantium commodi molestias, labore blanditiis nisi. Corporis,
                saepe ullam.
              </p>
            </CardContent>
          </Card>
          <Card class="mb-4">
            <CardContent>
              <div class="uppercase font-bold">
                <span class="text-secondary-500"> 500 ETH</span>
              </div>

              <h3 class="text-primary-500 uppercase font-bold text-3xl">
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
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';

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
