import { useTheme } from '~/stores/theme'
export default defineNuxtRouteMiddleware((route) => {
  const theme = useTheme()
  if (route === undefined) {
    theme.lightTheme()
    return
  }
  const routeName = route.name
  if (routeName === 'hackathon') {
    theme.darkTheme()
  } else {
    theme.lightTheme()
  }
})
