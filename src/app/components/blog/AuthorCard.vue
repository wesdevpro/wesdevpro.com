<template>
	<div class="author-card">
		<img v-if="avatar" class="author-card__avatar" :src="avatar" :alt="`${name} avatar`">
		<div>
			<p class="author-card__name">
				<a v-if="url" :href="url" target="_blank" rel="noopener">{{ name }}</a>
				<span v-else>{{ name }}</span>
			</p>
			<p class="author-card__meta">
				<a :href="`https://github.com/${github}`" target="_blank" rel="noopener">@{{ github }}</a>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	name: string
	github: string
	avatar?: string
	url?: string
}

defineProps<Props>()
</script>


