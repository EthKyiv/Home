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
      class="hover:no-underline mix-blend-luminosity hover:mix-blend-normal text-lg flex self-center items-center"
      v-bind="app.links.discord"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M17.59 34.173C16.6834 35.4956 15.7122 36.7728 14.68 38C7.3 37.79 4.5 33 4.5 33C4.6049 26.2131 6.24958 19.5386 9.31 13.48C12.0002 11.3754 15.2781 10.1593 18.69 10L19.69 12.31C21.1183 12.1117 22.5581 12.0082 24 12C25.4484 12.0048 26.8948 12.105 28.33 12.3L29.33 9.99C32.7452 10.1579 36.0235 11.3847 38.71 13.5C41.7606 19.5542 43.3983 26.2214 43.5 33C43.5 33 40.7 37.79 33.32 38C32.3034 36.7787 31.3489 35.5071 30.46 34.19M36.92 31.29C33.08 33.235 29.364 35.18 24 35.18C18.636 35.18 14.92 33.235 11.08 31.29"
          fill="#B8A2F6"
        />
        <path
          d="M17.59 34.173C16.6834 35.4956 15.7122 36.7728 14.68 38C7.3 37.79 4.5 33 4.5 33C4.6049 26.2131 6.24958 19.5386 9.31 13.48C12.0002 11.3754 15.2781 10.1593 18.69 10L19.69 12.31C21.1183 12.1117 22.5581 12.0082 24 12C25.4484 12.0048 26.8948 12.105 28.33 12.3L29.33 9.99C32.7452 10.1579 36.0235 11.3847 38.71 13.5C41.7606 19.5542 43.3983 26.2214 43.5 33C43.5 33 40.7 37.79 33.32 38C32.3034 36.7787 31.3489 35.5071 30.46 34.19M36.92 31.29C33.08 33.235 29.364 35.18 24 35.18C18.636 35.18 14.92 33.235 11.08 31.29"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.847 29.58C19.6972 29.58 21.197 28.0802 21.197 26.23C21.197 24.3798 19.6972 22.88 17.847 22.88C15.9968 22.88 14.497 24.3798 14.497 26.23C14.497 28.0802 15.9968 29.58 17.847 29.58Z"
          fill="white"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.153 29.58C32.0032 29.58 33.503 28.0802 33.503 26.23C33.503 24.3798 32.0032 22.88 30.153 22.88C28.3028 22.88 26.803 24.3798 26.803 26.23C26.803 28.0802 28.3028 29.58 30.153 29.58Z"
          fill="white"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
