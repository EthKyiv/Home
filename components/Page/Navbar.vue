<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
  hash?: string
}

const app = useAppConfig() as AppConfigInput
const route = useRoute()

const hackButton: IMenuItem = {
  type: 'button',
  text: 'Hack',
  route: { path: '/hackathon' },
}
const mainButton: IMenuItem = {
  type: 'button',
  text: 'Conference',
  route: { path: '/' },
}

const menus = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: 'FAQ',
    route: { hash: '#FAQ' },
  },
  {
    type: 'link',
    text: 'Media',
    route: { path: '/media' },
  },
  route.name === 'hackathon' ? mainButton : hackButton,
  // { type: 'link', text: t('pages.blank.nav'), route: { name: 'blank' } },
])
const dynamicButton = computed((): IMenuItem => {
  return route.name === 'hackathon' ? mainButton : hackButton
})
</script>

<template>
  <BuilderNavbar>
    <!-- <template #banner>
      <div
        class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize"
      >
        <span class="mr-1">
          {{ $t('banners.welcome', { app_name: app.name }) }}
        </span>
      </div>
    </template> -->
    <template #pre-menu>
      <div class="relative items-center ml-auto lg:hidden">
        <Button
          :text="dynamicButton.text"
          size="sm"
          class="min-w-36"
          :to="dynamicButton.route ? dynamicButton.route : undefined"
          type="transparent"
        />
      </div>
    </template>
    <template #menu>
      <div class="relative hidden lg:flex items-center lg:ml-auto">
        <nav
          class="text-sm leading-6 font-semibold text-gray-900"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="hover:no-underline text-gray-900 hover:text-black dark:hover:text-black capitalize"
                >{{ item.text }}</Anchor
              >
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="sm"
                class="min-w-36"
                type="transparent"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
              />
            </li>
          </ul>
        </nav>
        <div
          class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <Anchor
            class="hover:no-underline text-gray-900 hover:dark:text-black text-lg flex self-center items-center"
            v-bind="app.links.linktree"
            target="_blank"
          >
            <IconMdi:link-box-variant />
          </Anchor>
          <Anchor
            class="hover:no-underline text-gray-900 hover:dark:text-black text-lg flex self-center items-center"
            v-bind="app.links.twitter"
            target="_blank"
          >
            <IconMdi:twitter-box />
          </Anchor>
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @on-close="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader>
            <Button
              type="transparent"
              size="sm"
              area-lable="Close"
              class="border-0"
              @click.prevent="toggleOptions(false)"
            >
              Close <IconMdi:close class="ml-3" />
            </Button>
          </ActionSheetHeader>
          <nav class="leading-6 text-gray-900">
            <ul class="flex flex-col-reverse">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex w-full"
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10': item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="flex-1 hover:no-underline capitalize"
                  >{{ item.text }}</Anchor
                >
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="md"
                  type="secondary"
                  class="flex-1 my-2 self-center"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
        </ActionSheetBody>
      </ActionSheet>
    </template>
    <template #app-after-options="{ toggleOptions, show }">
      <div class="fixed bottom-5 right-5 lg:bottom-10 lg:right-10 z-100">
        <Button
          text="Join us on Discord"
          type="secondary"
          size="sm"
          v-bind="app.links.discord"
          class="hidden lg:flex rounded-full h-10"
        >
          Join us <IconMdi:discord class="ml-3 text-base" />
        </Button>
        <Button
          type="secondary"
          size="sm"
          aria-lable="toggle navigation"
          class="w-12 h-12 p-0 rounded-full visible lg:hidden"
          @click.prevent="toggleOptions(false)"
        >
          <span class="text-lg">
            <IconMdi:dots-vertical v-if="!show" />
            <IconMdi:close v-else />
          </span>
        </Button>
      </div>
    </template>
  </BuilderNavbar>
</template>
