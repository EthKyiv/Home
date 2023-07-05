<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

// state
const app = useAppConfig() as AppConfigInput
const buttonLink = computed(() => app.links.tickets)

defineProps({
  featured: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  subtitle: {
    type: String,
    required: true,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'bg-primary-500',
  },
  link: {
    type: Object,
    required: false,
  },
  buttonTitle: {
    type: String,
    default: 'Register',
  },
  features: {
    type: Array,
    default: [],
  },
})
</script>

<template>
  <Card
    class="max-w-130"
    :class="{ 'drop-shadow-dec bg-yellow-100 dark:bg-black': featured }"
  >
    <!-- <div v-if="featured" class="bg-ugradient opacity-60 h-100 absolute w-150 left-0 z-0 top-0"></div> -->
    <CardContent>
      <CardTitle class="pb-4">
        <span
          :class="[
            featured ? 'text-black' : 'text-gray-800',
            `${color} rounded text-xl lg:text-3xl border text-gray-900 border-gray-900 p-6lg:p-8 transform rotate-12 absolute -right-5 -top-4`,
          ]"
        >
          {{ price }}
        </span>

        <h3
          class="flex justify-start items-baseline text-5xl font-extrabold text-gray-800 dark:text-slate-200 uppercase font-bold"
        >
          {{ title }}
        </h3>
        <p class="text-sm italic font-thin leading-tight mt-3 pr-10">
          {{ subtitle }}
        </p>
      </CardTitle>

      <ul role="list" class="flex flex-col">
        <li
          v-for="feature in features"
          class="flex items-top py-3 lg:col-span-1"
        >
          <div class="shrink-0">
            <IconMdi:ethereum
              :class="`${color} text-gray-900 text-xl border border-1 border-gray-900 rounded`"
            />
          </div>
          <p class="ml-3 text-sm text-gray-800 dark:text-slate-500">
            {{ feature }}
          </p>
        </li>
      </ul>
      <CardFooter>
        <Button
          class="stretched-link"
          :text="buttonTitle"
          size="md"
          :type="featured ? 'transparentLight' : 'secondary'"
          v-bind="link ? link : buttonLink"
        />
      </CardFooter>
    </CardContent>
  </Card>
</template>
