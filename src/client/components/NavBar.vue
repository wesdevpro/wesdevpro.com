<template>
    <div class="navbar bg-gray-500">
        <div class="navbar-start">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">
                    <figure>
                        <img :src="navLogo" class="navbar-brand" alt="wesdepro's Logo"/>
                    </figure>
                </a>
            </div>
        </div>
        <div class="navbar-end">

        </div>
    </div>
</template>

<style>
.navbar-brand {
    height: ;
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