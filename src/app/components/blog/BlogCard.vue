<template>
    <div class="card">
        <div class="card-image">
            <img :src="imgSrc" alt="blog image"/>
        </div>
        <div class="card-content">
            <NuxtLink :to="path" class="title is-3">
            {{ title }}
            </NuxtLink>
            <p>{{ formatDate(date) }}</p>
            <b-taglist v-if="tags?.length" class="my-0">
                <b-tag v-for="tag in tags" type="is-primary">
                    {{ tag }}
                </b-tag>
            </b-taglist>
            <div class="media-content">
                <p>written by {{ author }}</p>
                <b-button tag="router-link" :to="path" type="is-primary">Continue Reading</b-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
   title: string
   imgSrc: string
   path: string
   date: string | Date
   tags: string[]
   author: string
}

const props = defineProps<Props>()

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>
