<script setup lang="ts">
useHead({
    title: 'Home · wesdevpro',
    meta: [
        {
            name: 'description',
            content: "The home of wesdevpro's expertise, skills, portfolio, collaborations, and contact information."
        },
        {
            name: 'twitter:card',
            content: "summary"
        },
        {
            name: 'twitter:title',
            content: 'Home · wesdevpro'
        },
        {
            name: 'twitter:description',
            content: "The home of wesdevpro's expertise, skills, portfolio, collaborations, and contact information."
        },
        {
            name: 'twitter:image',
            content: 'https://wesdevpro.com/images/full-logo.png'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:title',
            content: 'Home · wesdevpro'
        },
        {
            property: 'og:description',
            content: "The home of wesdevpro's expertise, skills, portfolio, collaborations, and contact information."
        },
        {
            property: 'og:url',
            content: 'https://wesdevpro.com'
        },
        {
            property: 'og:image',
            content: 'https://wesdevpro.com/images/full-logo.png'
        },

    ],
})
</script>

<template>
    <div>
        <HomeHero></HomeHero>
    </div>
</template>