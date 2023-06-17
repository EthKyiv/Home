import { useTheme } from '~/stores/theme'
export default defineNuxtRouteMiddleware((to, from) => {
  const theme = useTheme()
  const routeName = to.name
  if (theme.current === 'light' && routeName === 'hackathon') {
    theme.darkTheme()
  } else {
    theme.lightTheme()
  }
})
