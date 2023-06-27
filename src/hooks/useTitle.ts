import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'


function useTitle() {
    const route = useRoute()
    watchEffect(() => {
      const pageTitle = route.meta.title
      document.title = `${pageTitle} - Play`
    })
}

export default useTitle