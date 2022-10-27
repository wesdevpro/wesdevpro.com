<template>
   <section class="section">
      <projects></projects>
   </section>
</template>

<script>
import projects from '@/components/finishedProjects.vue'

export default {
   components: {
      projects,
   },

   head: {
      title: 'My Projects - wesdevpro',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
            hid: 'description',
            name: 'description',
            content: "wesdevpro's personal website - My Project Page!",
         },
      ],
   },
}
</script>
