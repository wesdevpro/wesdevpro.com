<template>
   <article class="section has-text-centered">
      <nuxt-content :document="article" />
   </article>
</template>

<script>
export default {
   async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
   },
   head: {
      title: 'Blog',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
            hid: 'description',
            name: 'description',
            content: 'my website description',
         },
      ],
   },
}
</script>

<style lang="scss">
.nuxt-content {
   h1 {
      font-weight: 900;
   }
   h2 {
      font-style: italic;
      font-weight: 300;
   }
}
</style>
