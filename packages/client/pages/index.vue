<template>
   <section class="section">
      <greeting></greeting>
   </section>
</template>

<script>
import greeting from '@/components/greetings.vue'

export default {
   components: {
      greeting,
   },
   head: {
      title: 'Home  - wesdevpro',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
            hid: 'description',
            name: 'description',
            content: "wesdevpro's personal website - About Me Page!",
         },
      ],
   },
}
</script>
