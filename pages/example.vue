<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

// composable

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
        class="flex flex-col items-start justify-center py-10 md:py-20 lg:py-50"
      >
        <kinesis-container event="scroll">
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
                  <span class="text-primary-500">Kyiv 🇺🇦</span> |
                  <span class="text-secondary-500"> Online 🌐 </span>
                </div>

                <h2
                  class="text-primary-500 uppercase font-bold text-4xl md:text-5xl"
                >
                  Hackathon
                </h2>
                <p>
                  Are you up to creating open source solutions for crisis
                  infrastructure? Join as an expert, hacker, volunteer or mentor
                  in Kyvi or online
                </p>
                <Button
                  size="lg"
                  class="font-bold mt-8 stretched-link"
                  type="primary"
                  to="hackathon"
                >
                  Join the community
                </Button>
              </CardContent>
            </Card>
            <div class="relative">
              <kinesis-element :strength="-90">
                <BrandPortrait
                  class="absolute hidden lg:block top-0 right-0 transform -translate-y-59 translate-x-10 z-0"
                />
              </kinesis-element>

              <Card class="mb-4 drop-shadow-dec z-10">
                <CardContent>
                  <div class="uppercase font-bold text-gray-300">
                    <span class="text-secondary-500">
                      Ukraine’s Premier Ethereum 🇺🇦
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
        </kinesis-container>
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
      <PageSection>
        <div class="">
          <div class="py-12 pb-16">
            <div
              class="flex grid relative flex-wrap gap-8 items-auto"
              aria-label="yearly plans"
              style="
                grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
              "
            >
              <div
                class="relative col-span-1 max-w-7xl"
                role="tabpanel"
                aria-label="yearly basic"
              >
                <div
                  class="overflow-hidden h-full mx-auto max-w-lg bg-darkBlue-500/20 rounded-2xl border-2 transition-[border] flex-col border-slate-800/30 !border shadow-lg lg:flex lg:max-w-none"
                >
                  <div
                    class="relative py-8 px-6 !pb-8 text-left bg-uiBlue-500/5 lg:flex lg:flex-col lg:shrink-0 lg:justify-start lg:p-12"
                  >
                    <div
                      class="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-br via-transparent from-teal-700/10"
                    ></div>
                    <h3
                      class="text-2xl font-medium text-slate-400 capitalize sm:text-2xl"
                    >
                      <span class="!text-teal-400">Basic Plan</span>
                    </h3>
                    <div
                      class="flex justify-start items-baseline mt-4 text-5xl font-extrabold text-slate-100"
                    >
                      $8<span class="ml-2 text-xl font-medium text-gray-500"
                        >/ month</span
                      >
                    </div>
                    <p class="text-lg font-medium leading-6 text-slate-300">
                      Billed yearly
                    </p>
                    <div class="mt-6">
                      <div class="relative rounded-md shadow">
                        <div class="rounded-md shadow">
                          <form>
                            <button
                              class="hover:bg-uiBlue-600/80 active:bg-slate-800 active:ring-uiBlue-600 select-none group-button group/button bg-opacity-80 focus:outline-none active:ring-2 shadow-sm flex relative justify-center items-center py-3 px-5 w-full text-base font-medium text-white rounded-md border hoverUpSmall hover:brightness-125 border-transparent disabled:pointer-events-none undefined !bg-teal-600"
                              type="submit"
                              aria-describedby="tier-basic"
                              role="button"
                            >
                              Subscribe
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <button
                      class="p-1 flex items-center gap-1 justify-center ml-1 mt-2 px-1.5 text-sm hover:underline font-medium text-blue-700 text-center w-full"
                    >
                      Switch to monthly billing
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        height="12"
                        class="opacity-80"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div class="flex-1 py-8 px-6 lg:p-12 lg:py-8">
                    <ul
                      role="list"
                      class="flex flex-col border-t divide-y divide-slate-800 lg:border-t-0"
                    >
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Limited generations (~200 / month)
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          General commercial terms
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Access to member gallery
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Optional credit top ups
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          3 concurrent fast jobs
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="relative col-span-1 max-w-7xl"
                role="tabpanel"
                aria-label="yearly standard"
              >
                <div
                  class="overflow-hidden h-full mx-auto max-w-lg bg-darkBlue-500/20 rounded-2xl border-2 transition-[border] flex-col border-slate-800/30 !border shadow-lg lg:flex lg:max-w-none"
                >
                  <div
                    class="relative py-8 px-6 !pb-8 text-left bg-uiBlue-500/5 lg:flex lg:flex-col lg:shrink-0 lg:justify-start lg:p-12"
                  >
                    <div
                      class="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-br via-transparent from-indigo-700/10"
                    ></div>
                    <h3
                      class="text-2xl font-medium text-slate-400 capitalize sm:text-2xl"
                    >
                      <span class="!text-indigo-400">Standard Plan</span>
                    </h3>
                    <div
                      class="flex justify-start items-baseline mt-4 text-5xl font-extrabold text-slate-100"
                    >
                      $24<span class="ml-2 text-xl font-medium text-gray-500"
                        >/ month</span
                      >
                    </div>
                    <p class="text-lg font-medium leading-6 text-slate-300">
                      Billed yearly
                    </p>
                    <div class="mt-6">
                      <div class="relative rounded-md shadow">
                        <div class="rounded-md shadow">
                          <form>
                            <button
                              class="hover:bg-uiBlue-600/80 active:bg-slate-800 active:ring-uiBlue-600 select-none group-button group/button bg-opacity-80 focus:outline-none active:ring-2 shadow-sm flex relative justify-center items-center py-3 px-5 w-full text-base font-medium text-white rounded-md border hoverUpSmall hover:brightness-125 border-transparent disabled:pointer-events-none undefined !bg-indigo-600"
                              type="submit"
                              aria-describedby="tier-standard"
                              role="button"
                            >
                              Subscribe
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <button
                      class="p-1 flex items-center gap-1 justify-center ml-1 mt-2 px-1.5 text-sm hover:underline font-medium text-blue-700 text-center w-full"
                    >
                      Switch to monthly billing
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        height="12"
                        class="opacity-80"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div class="flex-1 py-8 px-6 lg:p-12 lg:py-8">
                    <ul
                      role="list"
                      class="flex flex-col border-t divide-y divide-slate-800 lg:border-t-0"
                    >
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          15h Fast generations
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Unlimited Relaxed generations
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          General commercial terms
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Access to member gallery
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Optional credit top ups
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          3 concurrent fast jobs
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="relative col-span-1 max-w-7xl"
                role="tabpanel"
                aria-label="yearly pro"
              >
                <div
                  class="overflow-hidden h-full mx-auto max-w-lg bg-darkBlue-500/20 rounded-2xl border-2 transition-[border] flex-col border-slate-800/30 !border shadow-lg lg:flex lg:max-w-none"
                >
                  <div
                    class="relative py-8 px-6 !pb-8 text-left bg-uiBlue-500/5 lg:flex lg:flex-col lg:shrink-0 lg:justify-start lg:p-12"
                  >
                    <div
                      class="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-br via-transparent from-amber-700/10"
                    ></div>
                    <h3
                      class="text-2xl font-medium text-slate-400 capitalize sm:text-2xl"
                    >
                      <span class="!text-amber-400">Pro Plan</span>
                    </h3>
                    <div
                      class="flex justify-start items-baseline mt-4 text-5xl font-extrabold text-slate-100"
                    >
                      $48<span class="ml-2 text-xl font-medium text-gray-500"
                        >/ month</span
                      >
                    </div>
                    <p class="text-lg font-medium leading-6 text-slate-300">
                      Billed yearly
                    </p>
                    <div class="mt-6">
                      <div class="relative rounded-md shadow">
                        <div class="rounded-md shadow">
                          <form>
                            <button
                              class="hover:bg-uiBlue-600/80 active:bg-slate-800 active:ring-uiBlue-600 select-none group-button group/button bg-opacity-80 focus:outline-none active:ring-2 shadow-sm flex relative justify-center items-center py-3 px-5 w-full text-base font-medium text-white rounded-md border hoverUpSmall hover:brightness-125 border-transparent disabled:pointer-events-none undefined !bg-amber-600"
                              type="submit"
                              aria-describedby="tier-pro"
                              role="button"
                            >
                              Subscribe
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <button
                      class="p-1 flex items-center gap-1 justify-center ml-1 mt-2 px-1.5 text-sm hover:underline font-medium text-blue-700 text-center w-full"
                    >
                      Switch to monthly billing
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        height="12"
                        class="opacity-80"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div class="flex-1 py-8 px-6 lg:p-12 lg:py-8">
                    <ul
                      role="list"
                      class="flex flex-col border-t divide-y divide-slate-800 lg:border-t-0"
                    >
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          30h Fast generations
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Unlimited Relaxed generations
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          General commercial terms
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Access to member gallery
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Optional credit top ups
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          Stealth image generation
                        </p>
                      </li>
                      <li class="flex items-center py-4 lg:col-span-1">
                        <div class="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            height="18"
                            class="text-emerald-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-base text-slate-300">
                          12 concurrent fast jobs
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <!-- Rendered `Disclosure` -->
        <Disclosure>
          <DisclosureButton class="py-2">
            <span>Do you offer technical support?</span>
            <ChevronRightIcon class="ui-open:rotate-90 ui-open:transform" />
          </DisclosureButton>
          <DisclosurePanel>No</DisclosurePanel>
        </Disclosure>
        <div class="flex flex-col items-center w-full text-center">
          <div>
            <h2 class="text-4xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p class="mt-4 text-lg text-gray-400">
              Can't find the answer you're looking for?<br />Read the
              <a
                class="font-medium text-blue-600 hover:text-blue-500"
                href="https://midjourney.gitbook.io/docs/"
                >Quick Start Guide</a
              >
              or visit the
              <a
                class="font-medium text-blue-600 hover:text-blue-500"
                href="https://discord.com/channels/662267976984297473/958069758211797092"
                >#member-support</a
              >
              channel to ask for help.
            </p>
          </div>
          <div class="w-full">
            <dl class="mt-12 space-y-3">
              <div
                class="bg-darkBlue-500/50 hover:bg-darkBlue-500/70 rounded-xl border border-slate-800/30"
                data-headlessui-state=""
              >
                <dt class="text-lg">
                  <button
                    id="headlessui-disclosure-button-2"
                    class="flex flex-col justify-between items-start p-6 w-full text-left text-gray-400"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div class="flex justify-between w-full">
                      <span class="text-white">What are "Fast Hours"?</span
                      ><span class="flex items-center ml-6 h-7"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="rotate-0 h-6 w-6 transform"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path></svg
                      ></span>
                    </div>
                  </button>
                </dt>
              </div>
              <div
                class="bg-darkBlue-500/50 hover:bg-darkBlue-500/70 rounded-xl border border-slate-800/30"
                data-headlessui-state=""
              >
                <dt class="text-lg">
                  <button
                    id="headlessui-disclosure-button-4"
                    class="flex flex-col justify-between items-start p-6 w-full text-left text-gray-400"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div class="flex justify-between w-full">
                      <span class="text-white"
                        >What is unlimited relaxed generation?</span
                      ><span class="flex items-center ml-6 h-7"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="rotate-0 h-6 w-6 transform"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path></svg
                      ></span>
                    </div>
                  </button>
                </dt>
              </div>
              <div
                class="bg-darkBlue-500/50 hover:bg-darkBlue-500/70 rounded-xl border border-slate-800/30"
                data-headlessui-state=""
              >
                <dt class="text-lg">
                  <button
                    id="headlessui-disclosure-button-6"
                    class="flex flex-col justify-between items-start p-6 w-full text-left text-gray-400"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div class="flex justify-between w-full">
                      <span class="text-white">What if I want MORE fast?</span
                      ><span class="flex items-center ml-6 h-7"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="rotate-0 h-6 w-6 transform"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path></svg
                      ></span>
                    </div>
                  </button>
                </dt>
              </div>
              <div
                class="bg-darkBlue-500/50 hover:bg-darkBlue-500/70 rounded-xl border border-slate-800/30"
                data-headlessui-state=""
              >
                <dt class="text-lg">
                  <button
                    id="headlessui-disclosure-button-8"
                    class="flex flex-col justify-between items-start p-6 w-full text-left text-gray-400"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div class="flex justify-between w-full">
                      <span class="text-white"
                        >What is the Community Gallery?</span
                      ><span class="flex items-center ml-6 h-7"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="rotate-0 h-6 w-6 transform"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path></svg
                      ></span>
                    </div>
                  </button>
                </dt>
              </div>
              <div
                class="bg-darkBlue-500/50 hover:bg-darkBlue-500/70 rounded-xl border border-slate-800/30"
                data-headlessui-state=""
              >
                <dt class="text-lg">
                  <button
                    id="headlessui-disclosure-button-10"
                    class="flex flex-col justify-between items-start p-6 w-full text-left text-gray-400"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div class="flex justify-between w-full">
                      <span class="text-white"
                        >What if I don't want my images to appear in the
                        Gallery?</span
                      ><span class="flex items-center ml-6 h-7"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="rotate-0 h-6 w-6 transform"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path></svg
                      ></span>
                    </div>
                  </button>
                </dt>
              </div>
              <div
                class="bg-darkBlue-500/50 hover:bg-darkBlue-500/70 rounded-xl border border-slate-800/30"
                data-headlessui-state=""
              >
                <dt class="text-lg">
                  <button
                    id="headlessui-disclosure-button-12"
                    class="flex flex-col justify-between items-start p-6 w-full text-left text-gray-400"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div class="flex justify-between w-full">
                      <span class="text-white"
                        >How does commercial use work?</span
                      ><span class="flex items-center ml-6 h-7"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="rotate-0 h-6 w-6 transform"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path></svg
                      ></span>
                    </div>
                  </button>
                </dt>
              </div>
              <div
                class="bg-darkBlue-500/50 hover:bg-darkBlue-500/70 rounded-xl border border-slate-800/30"
                data-headlessui-state=""
              >
                <dt class="text-lg">
                  <button
                    id="headlessui-disclosure-button-14"
                    class="flex flex-col justify-between items-start p-6 w-full text-left text-gray-400"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div class="flex justify-between w-full">
                      <span class="text-white"
                        >Can I cancel my subscription plan?</span
                      ><span class="flex items-center ml-6 h-7"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="rotate-0 h-6 w-6 transform"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path></svg
                      ></span>
                    </div>
                  </button>
                </dt>
              </div>
              <div
                class="bg-darkBlue-500/50 hover:bg-darkBlue-500/70 rounded-xl border border-slate-800/30"
                data-headlessui-state=""
              >
                <dt class="text-lg">
                  <button
                    id="headlessui-disclosure-button-16"
                    class="flex flex-col justify-between items-start p-6 w-full text-left text-gray-400"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div class="flex justify-between w-full">
                      <span class="text-white"
                        >Can I change my subscription plan?</span
                      ><span class="flex items-center ml-6 h-7"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="rotate-0 h-6 w-6 transform"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path></svg
                      ></span>
                    </div>
                  </button>
                </dt>
              </div>
            </dl>
          </div>
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
