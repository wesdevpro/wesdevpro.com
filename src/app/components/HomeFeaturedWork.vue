<template>
  <section v-if="featured" class="section home-featured-work">
    <div class="container is-max-desktop">
      <SectionHeader eyebrow="Featured Work" :title="featured.name" />

      <div class="columns is-vcentered is-variable is-8">
        <div class="column is-half">
          <MediaFrame :src="featured.coverImage" :alt="`${featured.name} site preview`" />
        </div>
        <div class="column is-half">
          <p v-if="featured.description">{{ featured.description }}</p>
          <NuxtLink :to="featured.path" class="button is-primary is-medium">
            Read the Case Study -&gt;
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: featured } = await useAsyncData('home-featured-work', () =>
  queryCollection('work').where('order', '=', 1).first()
)
</script>
