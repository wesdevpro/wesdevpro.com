<template>
    <div class="hero min-h-screen"
        :style="{ backgroundImage: `url(${heroImageURL})` }">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Welcome!</h1>
                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
</template>

<script>
import heroImageURL from '~/assets/hero-image.jpg'

export default
{
    data() {
    return { heroImageURL }
    }
}
</script>