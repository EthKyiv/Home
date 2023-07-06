<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import p from './../../package.json'
const app = useAppConfig() as AppConfigInput
</script>

<template>
  <footer
    class="z-10 border-t lg:border-gray-900/10 dark:border-green-400/[0.4] bg-ugradient text-slate-900 pt-8"
  >
    <section class="max-w-8xl mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="">
          <NuxtLink
            tag="a"
            class="mr-3 flex-none overflow-hidden md:w-auto text-md font-bold text-black"
            :to="{ name: 'index' }"
          >
            <span class="sr-only">home</span>
            <span class="flex items-center">
              <BrandLogo
                class="inline-block mr-2 text-lg h-auto w-45 text-black"
                :alt="app.name"
              />
            </span>
          </NuxtLink>
          <ContentQuery v-slot="{ data }" path="page/section/footer" find="one">
            <ContentRenderer
              :value="data"
              class="prose prose-sm lg:max-w-xs mt-2 text-sm"
            >
              <template #empty></template
            ></ContentRenderer>
          </ContentQuery>
          <div class="flex mt-8 space-x-6 text-gray-800">
            <PageSocialLinks lg />
          </div>
        </div>
        <div
          class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div class="">
            <p class="font-bold">About</p>
            <nav class="flex flex-col mt-2 space-y-2 text-sm text-gray-500">
              <Anchor class="hover:no-underline hover:opacity-75" to="/media">
                Media Page
              </Anchor>
              <a class="hover:opacity-75" href> Privacy Policy </a>
              <a class="hover:opacity-75" href> Terms &amp; Conditions </a>
              <a class="hover:opacity-75" href> Accessibility </a>
            </nav>
          </div>
          <div class="">
            <p class="font-bold">Apply</p>
            <nav class="flex flex-col mt-2 space-y-2 text-sm text-gray-500">
              <Anchor
                class="hover:no-underline hover:opacity-75"
                v-bind="app.links.application_hacker"
                target="_blank"
              >
                Hacker
              </Anchor>
              <Anchor
                class="hover:no-underline hover:opacity-75"
                v-bind="app.links.application_speaker"
                target="_blank"
              >
                Speaker
              </Anchor>
              <Anchor
                class="hover:no-underline hover:opacity-75"
                v-bind="app.links.application_mentor"
                target="_blank"
              >
                Mentor
              </Anchor>
              <Anchor
                class="hover:no-underline hover:opacity-75"
                v-bind="app.links.application_volunteer"
                target="_blank"
              >
                Volunteer
              </Anchor>
              <Anchor
                class="hover:no-underline hover:opacity-75"
                v-bind="app.links.application_media"
                target="_blank"
              >
                Media
              </Anchor>
            </nav>
          </div>
          <div class="">
            <p class="font-bold">Helpful Links</p>
            <nav class="flex flex-col mt-2 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75" href> Contact </a>
              <a class="hover:opacity-75" href> Hacker Manual </a>
              <a class="hover:opacity-75" href> Sponsor Manual </a>
            </nav>
          </div>
        </div>
      </div>
      <div class="w-full py-4 text-center md:text-left b">
        <div class="text-xs text-gray-800 dark:text-slate-700">
          {{ app.name }} © 2022 . All rights reserved.
        </div>
      </div>
    </section>
  </footer>
</template>
