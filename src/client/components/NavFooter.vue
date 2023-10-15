<template>
    <footer class="footer px-10 py-4 bg-primary text-neutral border-base-300">
        <aside class="items-center grid-flow-col">
            <img :src="footerImage" class="inline-block fill-current max-h-16" />
            <p class="font-bold text-base">wesdevpro ⚡ <br />Just an Average Programmer 🧙🏼‍♂️</p>
        </aside>
        <nav class="md:place-self-center md:justify-self-end">
            <div class="grid grid-flow-col gap-4">
                <a v-for="social in socialLinks" :href="social.link">
                    <icon :icon="social.icon" class="text-lg m-auto"></icon>
                </a>
            </div>
            <div class="text-center">
                <p class="text-neutral">wesdevpro  - 2023&copy;</p>
            </div>
        </nav>
    </footer>
</template>

<script lang="ts">
import brandLogo from '~/assets/img/brand-logos/brand-logo.png';

export default {
    data() {
        return {
            footerImage: brandLogo,
            socialLinks: [
                {
                    icon: 'fa:github',
                    link: 'https://github.com/wesdevpro'
                },
                {
                    icon: 'fa-brands:instagram',
                    link: 'https://www.instagram.com/wesdevpro/'
                },
                {
                    icon: 'fa6-brands:square-x-twitter',
                    link: 'https://twitter.com/wesdevpro'
                }, // https://ko-fi.com/wesdevpro
                {
                    icon: 'bxs:coffee',
                    link: 'https://ko-fi.com/wesdevpro'
                }
            ]
        }
    }
}
</script>