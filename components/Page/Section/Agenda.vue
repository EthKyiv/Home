<template>
  <PageSection id="agenda">
    <ContentQuery v-slot="{ data }" path="page/section/agenda" find="one">
      <h2 class="section-title">{{ data.title }}</h2>
    </ContentQuery>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-4 mt-4">
      <Card class="mb-4 bg-yellow-200 md:col-span-2"  data-aos="fade-up">
        <CardContent>
          <ContentQuery v-slot="{ data }" path="page/section/agenda" find="one">
            <div class="uppercase font-bold">
              <span class="text-secondary-500"> {{ data.pre_title }} </span>
            </div>
            <h3
              class="text-primary-500 uppercase font-bold text-3xl leading-tight"
            >
              {{ data.card_title }}
            </h3>
            <ContentRenderer
              :value="data"
              class="prose leading-tight text-gray-800 dark:text-slate-400 max-w-none"
            >
              <template #empty></template>
            </ContentRenderer>
          </ContentQuery>
        </CardContent>
      </Card>
      <Card class="mb-4"  data-aos="fade-up" data-aos-delay="400">
        <CardContent>
          <ContentQuery
            v-slot="{ data }"
            path="page/section/agenda_aside"
            find="one"
          >
            <div class="uppercase font-bold">
              <span class="text-secondary-500"> {{ data.pre_title }} </span>
            </div>
            <h3
              v-if="data.card_title"
              class="text-primary-500 uppercase font-bold text-3xl leading-tight"
            >
              {{ data.card_title }}
            </h3>
            <ContentRenderer
              :value="data"
              class="prose leading-tight text-gray-800 dark:text-slate-400 max-w-none"
            >
              <template #empty></template>
            </ContentRenderer>
          </ContentQuery>
        </CardContent>
      </Card>
    </div>
  </PageSection>
</template>
