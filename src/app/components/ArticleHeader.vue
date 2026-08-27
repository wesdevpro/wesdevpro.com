<template>
  <header class="article-header">
    <h1 class="article-header__title">{{ title }}</h1>
    <Standfirst v-if="standfirst" class="article-header__standfirst">{{ standfirst }}</Standfirst>
    <dl v-if="meta?.length" class="article-header__meta">
      <template v-for="item in meta" :key="item.label">
        <dt>{{ item.label }}</dt>
        <dd>
          <a v-if="item.href" :href="item.href" target="_blank" rel="noopener">{{ item.value }}</a>
          <template v-else>{{ item.value }}</template>
        </dd>
      </template>
    </dl>
  </header>
</template>

<script setup lang="ts">
interface MetaItem {
  label: string
  value: string
  href?: string
}

defineProps<{
  title: string
  standfirst?: string
  meta?: MetaItem[]
}>()
</script>

<style scoped>
/* Title and standfirst in the prose column; an Inconsolata metadata block
   (client, sector, year, stack, role) in the margin column. */
.article-header {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gutter);
}
.article-header__title {
  grid-column: var(--grid-prose-start) / span var(--grid-prose-span);
  font-size: var(--text-h1);
  line-height: var(--leading-heading);
  margin: 0;
}
.article-header :deep(.article-header__standfirst) {
  grid-column: var(--grid-prose-start) / span var(--grid-prose-span);
}
.article-header__meta {
  grid-column: var(--grid-margin-start) / span var(--grid-margin-span);
  display: grid;
  gap: var(--space-2xs);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  margin: 0;
}
.article-header__meta dt {
  text-transform: uppercase;
  letter-spacing: var(--tracking-label);
}
.article-header__meta dd {
  margin: 0 0 var(--space-2xs);
  color: var(--color-text-strong);
}
@media (max-width: 768px) {
  .article-header__title,
  .article-header :deep(.article-header__standfirst),
  .article-header__meta {
    grid-column: 1 / -1;
  }
}
</style>
