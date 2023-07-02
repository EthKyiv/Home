<template>
  <PageSection id="FAQ">
    <ContentQuery v-slot="{ data }" path="page/section/faq" find="one">
      <PageSectionTitle v-if="data" :title="data.title">
        <template #before>
          <BrandSkyline
            class="h-48 w-auto text-secondary-500 md:mb-2 lg:mb-4 max-w-80vw"
          />
        </template>
        <ContentRenderer
          :value="data"
          class="prose leading-tight text-gray-800 dark:text-slate-300 max-w-none"
        >
          <template #empty></template>
        </ContentRenderer>
      </PageSectionTitle>
    </ContentQuery>
    <FAQ></FAQ>
  </PageSection>
</template>
