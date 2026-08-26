<template>
  <article class="card content-card content-card--case-study is-fullheight" :class="{ 'has-keyline': keyline }">
    <NuxtLink :to="path" class="content-card__media-link" :aria-label="`View ${name}`">
      <MediaFrame :src="coverImage" :alt="`${name} preview`" />
    </NuxtLink>

    <div class="card-content content-card__body">
      <div class="content-card__meta-row">
        <p class="content-card__eyebrow">{{ formatDate(date) }}</p>
        <a
          v-if="repoUrl"
          :href="repoUrl"
          class="content-card__secondary-link"
          target="_blank"
          rel="noopener"
        >
          Repository
        </a>
      </div>

      <h2 class="title is-4 content-card__title">
        <NuxtLink :to="path" class="content-card__title-link">
          {{ name }}
        </NuxtLink>
      </h2>

      <p v-if="description" class="content-card__summary">
        {{ description }}
      </p>

      <div v-if="previewTags.length" class="content-card__tags" aria-label="Stack">
        <span v-for="tag in previewTags" :key="`${path}-${tag}`" class="content-card__tag">
          {{ tag }}
        </span>
        <span v-if="overflowTagCount > 0" class="content-card__tag content-card__tag--muted">
          +{{ overflowTagCount }}
        </span>
      </div>

      <div class="content-card__footer">
        <NuxtLink :to="path" class="content-card__cta">
          View project ->
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  name: string
  description?: string
  coverImage?: string
  path: string
  date: string | Date
  tags?: string[]
  repoUrl?: string
  keyline?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  keyline: false,
})

const previewTags = computed(() => props.tags?.slice(0, 3) ?? [])
const overflowTagCount = computed(() => Math.max((props.tags?.length ?? 0) - previewTags.value.length, 0))

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>
