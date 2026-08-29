export default defineNuxtRouteMiddleware((to) => {
  const { forced } = useDocusColorMode()
  if (forced) {
    to.meta.colorMode = forced
  }
})
