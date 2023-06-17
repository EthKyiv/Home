import { defineStore } from 'pinia'

export interface IThemeState {
  current: String
}

export const useTheme = defineStore('theme', {
  state: (): IThemeState => ({
    current: 'light',
  }),
  actions: {
    lightTheme() {
      this.current = 'light'
    },
    darkTheme() {
      this.current = 'dark'
    },
  },
})
