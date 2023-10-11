<template>
    <div class="hero min-h-screen" :style="{ backgroundImage: `url(${heroImageURL})` }">
        <div class="hero-overlay bg-accent bg-opacity-50"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md text-neutral">
                <h1 class="mb-5 text-5xl font-bold">Welcome!</h1>
                <p class="mb-5">My website is currently under construction, but it will be up and running soon.
                    In the meantime, please check back or follow me on social media for updates.
                    My apologies for any inconvenience this may cause, and appreciate your patience and
                    understanding. Have a great day 😅</p>
                <!-- <button class="btn btn-primary">Get Started</button> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import heroImageURL from '~/assets/img/misc/hero-image.jpg'

export default
    {
        data() {
            return { heroImageURL }
        }
    }
</script>