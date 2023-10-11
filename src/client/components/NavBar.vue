<template>
    <div class="navbar bg-gray-500">
        <div class="navbar-start">
            <div>
                <a class="btn btn-ghost normal-case text-xl">
                    <figure>
                        <img :src="navLogo" class="navbar-brand" alt="wesdepro's Logo" />
                    </figure>
                    <span class="text-white">wesdepro</span>
                </a>
            </div>
            <div>
                <ul class="menu menu-vertical lg:menu-horizontal">
                    <li v-for="navroute in navRoutes">
                        <NuxtLink :to="{ path: navroute.path }" tag="router-link" exact-active-class="is-active">
                            {{navroute.title}}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar-end">

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
            navLogo: brandLogo
        }
    }
}
</script>