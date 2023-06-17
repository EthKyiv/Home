import { IntlifyModuleOptions } from '@intlify/nuxt3'
import { VueUseNuxtOptions } from '@vueuse/nuxt'
import { ModuleOptions as NuxtWindiCssModuleOptions } from 'nuxt-windicss'
import { ModuleOptions as NuxtContentModuleOptions } from '@nuxt/content'

declare module '@nuxt/schema' {
  interface AppConfigLink {
    href: string,
    title: string
  }
  interface AppConfigInput {
    name: string
    author: {
      name: string
      link: string
    },
    links: {
      twitter: AppConfigLink,
      linktree: AppConfigLink,
      youtube: AppConfigLink,
      instagram: AppConfigInput,
      medium: AppConfigInput
      discord: AppConfigLink,
      discord_support: AppConfigLink,
      tickets: AppConfigLink,
      application_hacker: AppConfigLink,
      hacker_manual: AppConfigLink,
      sponsor_manual: AppConfigLink,
    }
  }
}

declare module 'nuxt/config' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
    vueuse?: VueUseNuxtOptions
    windicss?: NuxtWindiCssModuleOptions
    content?: Partial<NuxtContentModuleOptions>
  }
}

export {}
