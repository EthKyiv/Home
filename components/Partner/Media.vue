<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

const { data: media } = await useAsyncData('hack_partner', () =>
  queryContent('/partners')
    .where({ hidden: false, type: 'hack_partner' })
    .sort({ order: -1, $numeric: true })
    .find()
)

const app = useAppConfig() as AppConfigInput

const logoClassPlatinum = 'bg-green-100  h-36 max-h-36'
</script>
<template>
  <div class="w-full">
    <template v-if="media && media.length > 0">
      <h2 class="partners-title">
        <IconGis:network-o
          class="ease-in duration-300 transform bg-yellow-500 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
        />
        <span>Partners</span>
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 grid-flow-row auto-rows-max mb-4 mt-4 w-full mb-16"
      >
        <PartnerCard
          v-for="(partner, i) in media"
          :key="partner.name"
          :badge-class="logoClassPlatinum"
          :name="partner.name"
          :logo="partner.logo"
          data-aos="flip-right"
          :data-aos-delay="i * 100"
        >
        </PartnerCard>
      </div>
    </template>
  </div>
</template>
