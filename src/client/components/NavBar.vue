<template>
    <div class="navbar bg-primary">
        <div class="navbar-start">
            <div>
                <a class="btn btn-ghost normal-case text-xl">
                    <figure>
                        <img :src="navLogo" class="navbar-brand" alt="wesdepro's Logo" />
                    </figure>
                    <span class="text-neutral">wesdevpro</span>
                </a>
            </div>
            <div class="hidden w-full md:flex md:items-center md:w-auto">
                <ul class="menu menu-vertical lg:menu-horizontal">
                    <li v-for="navroute in navRoutes">
                        <NuxtLink :to="{ path: navroute.path }" tag="router-link" exact-active-class="is-active" class="text-neutral">
                            {{ navroute.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar-end">
            <div>
                <ul class="menu menu-vertical lg:menu-horizontal">
                    <li v-for="social in socialLinks" class="text-neutral text-lg">
                        <a :href="social.link">
                            <icon :icon="social.icon"></icon>
                        </a>
                    </li>
                </ul>
            </div>
            <ThemeSwitch></ThemeSwitch>
            <div class="cursor-pointer md:hidden block">
                <button class="btn btn-ghost auto">
                    <span class="i-fa-solid-bars auto text-xl"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.navbar-brand {
    max-width: 2.5rem;
    height: auto;
}
</style>

<script lang="ts">
import brandLogo from '~/assets/img/brand-logos/brand-logo.png'

export default {
    props: {
        navRoutes: {
            type: Array,
            default: () => [{
                title: 'Home',
                path: '/'
            }],
        }
    },
    data() {
        return {
            navLogo: brandLogo,
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