<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
defineProps({
  lg: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex space-x-4">
    <Anchor
      class="hover:no-underline text-gray-900/[0.7] hover:text-purple-800 text-lg flex self-center items-center"
      v-bind="app.links.discord"
      target="_blank"
    >
      <IconLineMd:discord-twotone />
    </Anchor>
    <Anchor
      class="hover:no-underline mix-blend-luminosity hover:mix-blend-normal hover:text-white text-lg flex self-center items-center"
      v-bind="app.links.twitter"
      target="_blank"
    >
      <IconOpenmoji:twitter />
    </Anchor>
    <Anchor
      class="hover:no-underline mix-blend-multiply hover:mix-blend-normal text-lg flex self-center items-center transform rotate-320"
      v-bind="app.links.linktree"
      target="_blank"
    >
      <IconOpenmoji:link />
    </Anchor>
    <template v-if="lg">
      <Anchor
        class="hover:no-underline mix-blend-luminosity hover:mix-blend-normal text-lg flex self-center items-center"
        v-bind="app.links.youtube"
        target="_blank"
      >
        <IconOpenmoji:youtube />
      </Anchor>
      <Anchor
        class="hover:no-underline mix-blend-multiply hover:mix-blend-normal text-lg flex self-center items-center"
        v-bind="app.links.instagram"
        target="_blank"
      >
        <IconOpenmoji:instagram />
      </Anchor>

      <Anchor
        class="hover:no-underline text-gray-900/[0.7] hover:text-white text-lg flex self-center items-center"
        v-bind="app.links.medium"
        target="_blank"
      >
        <IconIconoir:medium />
      </Anchor>
    </template>
  </div>
</template>
