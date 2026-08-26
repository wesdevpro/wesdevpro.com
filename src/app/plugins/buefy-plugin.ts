import Buefy from 'buefy'
import '/assets/styles/tokens.css'
import '/assets/styles/buefy.css'
import '/assets/styles/styles.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Buefy, {})
})
