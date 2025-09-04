<template>
    <article class="card content-card content-card--blog is-fullheight">
        <NuxtLink :to="path" class="content-card__media-link" :aria-label="`Read ${title}`">
            <div class="card-image content-card__media">
                <img :src="imgSrc || '/images/wesdevpro-banner.jpg'" :alt="`${title} cover image`">
            </div>
        </NuxtLink>

        <div class="card-content content-card__body">
            <div class="content-card__meta-row">
                <p class="content-card__eyebrow">{{ formatDate(date) }}</p>
                <p class="content-card__author">By {{ author }}</p>
            </div>

            <h2 class="title is-4 content-card__title">
                <NuxtLink :to="path" class="content-card__title-link">
                    {{ title }}
                </NuxtLink>
            </h2>

            <p v-if="description" class="content-card__summary">
                {{ description }}
            </p>

            <div v-if="previewTags.length" class="content-card__tags" aria-label="Post topics">
                <span v-for="tag in previewTags" :key="`${path}-${tag}`" class="content-card__tag">
                    {{ tag }}
                </span>
                <span v-if="overflowTagCount > 0" class="content-card__tag content-card__tag--muted">
                    +{{ overflowTagCount }}
                </span>
            </div>

            <div class="content-card__footer">
                <NuxtLink :to="path" class="content-card__cta">
                    Read post ->
                </NuxtLink>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
interface Props {
    title: string
    description?: string
    imgSrc?: string
    path: string
    date: string | Date
    tags?: string[]
    author: string
}

const props = defineProps<Props>()

const previewTags = computed(() => props.tags?.slice(0, 2) ?? [])
const overflowTagCount = computed(() => Math.max((props.tags?.length ?? 0) - previewTags.value.length, 0))

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>
