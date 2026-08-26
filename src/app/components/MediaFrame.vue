<template>
  <div v-if="src" class="media-frame" :class="{ 'media-frame--framed': framed }">
    <div v-if="framed" class="media-frame__chrome" aria-hidden="true">
      <span class="media-frame__dot" />
      <span class="media-frame__dot" />
      <span class="media-frame__dot" />
    </div>
    <img class="media-frame__image" :src="src" :alt="alt || ''">
  </div>
  <div v-else class="media-placeholder" aria-hidden="true" />
</template>

<script setup lang="ts">
interface Props {
  src?: string
  alt?: string
  framed?: boolean
}

withDefaults(defineProps<Props>(), {
  framed: false,
})
</script>

<style scoped>
.media-frame {
  overflow: hidden;
  border: var(--border-hairline);
  border-radius: var(--radius-lg);
  background: var(--surface-card);
  box-shadow: var(--shadow-soft);
}

.media-frame__image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.media-frame--framed .media-frame__chrome {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 0.75rem;
  background: var(--surface-raised);
  border-bottom: var(--border-hairline);
}

.media-frame--framed .media-frame__dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: var(--radius-pill);
  background: var(--border-strong);
}

.media-frame--framed .media-frame__image {
  aspect-ratio: 16 / 10;
}
</style>
