<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
})

// state:styles
const defaultStyle = `
  cursor-pointer
  border border-2 transition-color duration-300 border-gray-900 text-gray-900
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  flex items-center justify-center font-bold uppercase
`
const styles = reactive<{
  [key: string]: string
}>({
  none: '',
  primary: 'bg-primary-500 hover:bg-green-500',
  secondary:
    ' bg-white dark:bg-slate-950 dark:border-slate-200 dark:text-slate-400 hover:bg-yellow-600 hover:dark:bg-slate-900 hover:dark:text-yellow-600 dark:border-slate-400 hover:dark:border-yellow-600',
  opposite: 'text-gray-900 border-gray-900 bg-green-500 hover:bg-blue-500',
  transparent: 'text-gray-900 border-gray-900 hover:bg-yellow',
  transparentLight:
    'text-gray-900 border-gray-900 hover:bg-yellow dark:text-yellow-500 dark:border-yellow-500 dark:hover:text-gray-900',
})
const sizes = reactive<{
  [key: string]: string
}>({
  lg: 'h-10 md:h-13 px-8 md:text-lg rounded-lg',
  md: 'h-10 px-6 text-base rounded',
  sm: 'h-9 px-4 text-sm rounded',
  xs: 'h-6 px-3 text-xs rounded',
})

// state
const selectedStyle = computed(() =>
  props.type in styles ? styles[props.type] : styles.primary
)
const selectedSize = computed(() => sizes[props.size] || sizes.lg)

// methods
const onClick = (event: MouseEvent) => {
  const router = useRouter()
  if (props.to) {
    router.push(props.to)
  }
  if (!props.href) {
    event.preventDefault()
  }
}
</script>

<template>
  <NuxtLink
    v-if="to"
    tag="a"
    :to="to"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
    :href="href"
    @click="onClick"
  >
    <slot>{{ text }}</slot>
  </a>
</template>
