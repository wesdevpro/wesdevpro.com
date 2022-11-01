<template>
   <section class="section has-text-centered">
      <div class="level">
         <div class="level-item has-text-centered">
            <h2 class="title is-2 blog-title" icon="newspaper">My Blog</h2>
         </div>
      </div>
      <div class="card-content">
         <div v-for="(listItems, index) in list" :key="index" class="content">
            <div class="type-content">
               <b-image :src="listItems.img" ratio="2by1">
                  <template #placeholder>
                     <b-skeleton
                        class="skeleton-placeholder"
                        height="100%"
                     ></b-skeleton>
                  </template>
               </b-image>
               <h6 class="title is-6">{{ listItems.category }}</h6>
            </div>
            <div class="text-content">
               <div>
                  <h3 class="title is-3 mb-0">
                     {{ listItems.title || 'failed to load' }}
                  </h3>
                  <i>{{ new Date(listItems.postedAt).toDateString() }}</i>
                  <h6 class="title is-6 mt-0" style="font-weight: normal">
                     {{ listItems.clentcher || 'failed to load' }}
                  </h6>
               </div>
               <div>
                  <b-button
                     tag="router-link"
                     :to="'/blog/' + listItems.slug"
                     type="is-link"
                     class="button"
                  >
                     Read More
                  </b-button>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   async asyncData({ $content, params }) {
      const list = (
         await $content('articles', params.slug)
            .only(['title', 'clentcher', 'slug', 'postedAt', 'category', 'img'])
            .fetch()
      )
         .slice()
         .sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))

      /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
      console.warn(list)
      return { list }
   },
}
</script>

<style lang="scss">
.blog-title {
   font-size: 4rem !important;
   font-weight: 400;
}

div.content:nth-of-type(even) {
   display: flex;
   flex-direction: row important;
}

div.content:nth-of-type(odd) {
   display: flex;
   flex-direction: row-reverse important;
}

div.content {
   margin: 20px;
}

div.content div {
   flex: 1;
}

.type-content {
   margin: auto 0 auto 0;
}

.text-content {
   margin: auto 0 auto 0;
}

@media screen and (max-width: 768px) {
   div.content {
      flex-direction: column !important;
   }
   .type-content {
      margin: auto 0 auto 0;
   }

   .text-content {
      margin: auto 0 auto 0;
   }
}

@media screen and (max-width: 500px) {
   .type-content {
      margin: auto 0 auto 0;
   }

   .text-content {
      margin: auto 0 auto 0;
   }
}
</style>
