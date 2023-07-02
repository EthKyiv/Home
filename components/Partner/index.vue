<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

const { data: gold } = await useAsyncData('gold', () =>
  queryContent('/partners')
    .where({ hidden: false, type: 'gold' })
    .sort({ order: -1, $numeric: true })
    .find()
)
const { data: silver } = await useAsyncData('silver', () =>
  queryContent('/partners')
    .where({ hidden: false, type: 'silver' })
    .sort({ order: -1, $numeric: true })
    .find()
)
const { data: bronze } = await useAsyncData('bronze', () =>
  queryContent('/partners')
    .where({ hidden: false, type: 'bronze' })
    .sort({ order: -1, $numeric: true })
    .find()
)
const { data: media } = await useAsyncData('media', () =>
  queryContent('/partners')
    .where({ hidden: false, type: 'media' })
    .sort({ order: -1, $numeric: true })
    .find()
)

const app = useAppConfig() as AppConfigInput

const logoClassGold = ' bg-yellow-100  h-32 max-h-32'
const logoClassPlatinum = 'bg-blue-100 h-36 max-h-36'
const logoClass = 'bg-slate-200 h-28 max-h-28'
const logoClass3 = 'bg-white-100 h-24 max-h-24 '
const logoClassMedia = 'bg-green-100 h-24 max-h-24 '
</script>
<template>
  <div class="w-full">
    <template v-if="gold && gold.length > 0">
      <h2 class="partners-title">
        <IconMdi:octagram-outline
          class="ease-in duration-300 transform bg-yellow-500 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
        />
        <span>Gold</span>
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 grid-flow-row auto-rows-max mb-4 mt-4 w-full mb-16"
      >
        <PartnerCard
          v-for="partner in gold"
          :key="partner.name"
          :badge-class="logoClassGold"
          :name="partner.name"
          :logo="partner.logo"
        >
        </PartnerCard>
      </div>
    </template>
    <template v-if="silver && silver.length > 0">
      <h2 class="partners-title">
        <IconMdi:hexagram-outline
          class="ease-in duration-300 transform bg-slate-200 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
        />
        <span>Silver</span>
      </h2>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 grid-flow-row auto-rows-max mt-4 w-full mb-16"
      >
        <PartnerCard
          v-for="partner in silver"
          :key="partner.name"
          :badge-class="logoClass"
          :name="partner.name"
          :logo="partner.logo"
        >
        </PartnerCard>
      </div>
    </template>

    <template v-if="bronze && bronze.length > 0">
      <!-- <h2 class="text-gray-800 dark:text-slate-300 font-bold uppercase text-2xl flex">
      <IconMdi:star-outline class=" mr-2 text-yellow-800 "/>bronze
    </h2> -->
      <h2 class="partners-title">
        <IconMdi:star-outline
          class="ease-in duration-300 transform bg-yellow-700 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
        />
        <span>bronze</span>
      </h2>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 grid-flow-row mt-4 w-full mb-16"
      >
        <PartnerCard
          v-for="partner in bronze"
          :key="partner.name"
          :badge-class="logoClass3"
          :name="partner.name"
          :logo="partner.logo"
        >
        </PartnerCard>
      </div>
    </template>
    <template v-if="media && media.length > 0">
      <h2 class="partners-title">
        <IconMdi:television-classic
          class="ease-in duration-300 transform bg-green-500 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
        />
        <span>Partner</span>

        <!-- <IconGis:network-o
        class="ease-in duration-300 transform bg-yellow-500 text-gray-900 p-1 border border-1 border-gray-900 rounded w-8 h-8"
      />
      <span>Partner</span> -->
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 grid-flow-row auto-rows-max mt-4 w-full mb-16"
      >
        <PartnerCard
          v-for="partner in media"
          :key="partner.name"
          :badge-class="logoClassMedia"
          :name="partner.name"
          :logo="partner.logo"
        >
        </PartnerCard>
      </div>
    </template>
  </div>
</template>
