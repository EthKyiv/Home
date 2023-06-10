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
  border border-2 transition-color duration-300
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  flex items-center justify-center font-bold uppercase
`
const styles = reactive<{
  [key: string]: string
}>({
  none: '',
  primary:
    'text-white bg-primary-500 border-2 hover:bg-primary-400 border-gray-800 dark:border-slate-800 dark:text-gray-300',
  secondary:
    'text-gray-800 bg-white border-gray-800 dark:bg-slate-950 dark:border-slate-300 dark:text-slate-300 hover:bg-yellow-600 hover:dark:bg-slate-900 hover:dark:text-yellow-600 dark:border-slate-800 hover:dark:border-yellow-600',
  opposite:
    'text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-secondary-800 dark:hover:text-slate-800 ',
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
