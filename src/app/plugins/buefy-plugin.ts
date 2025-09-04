import Buefy from 'buefy'
import '/assets/styles/buefy.css'
import '/assets/styles/colors.css'
import '/assets/styles/styles.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Buefy, {})
})
