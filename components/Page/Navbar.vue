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
  route.name === 'hackathon' ? mainButton : hackButton,
  // { type: 'link', text: t('pages.blank.nav'), route: { name: 'blank' } },
])
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
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
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
          <ActionSheetHeader text="Menu" />
          <nav class="leading-6 text-gray-900 dark:text-slate-400">
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex w-full"
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-slate-400/[0.4]':
                    item.type === 'link',
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
                  size="sm"
                  type="secondary"
                  class="flex-1"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
        </ActionSheetBody>
        <Button
          text="Close"
          type="transparent"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>
