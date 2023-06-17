<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize('page not found'),
}))
</script>

<template>
  <NuxtLayout name="page">
    <PageWrapper class="flex flex-col items-center justify-center">
      <Error :code="404" />
    </PageWrapper>
  </NuxtLayout>
</template>
