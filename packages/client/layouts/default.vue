<template>
   <div>
      <navigationBar></navigationBar>
      <div style="max-width: 125em; margin-left: auto; margin-right: auto">
         <nuxt />
         <customFooter></customFooter>
      </div>
   </div>
</template>

<script>
import navigationBar from '@/components/navigationBar.vue'
import customFooter from '@/components/customFooter.vue'

export default {
   components: {
      navigationBar,
      customFooter,
   },
   data() {
      return {}
   },
}
</script>
