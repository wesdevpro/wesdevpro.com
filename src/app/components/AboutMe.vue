<template>
    <section class="section is-medium home-about">
        <div class="container is-max-desktop">
            <header class="section-header">
                <p class="section-header__eyebrow">About</p>
                <h2 class="title section-header__title">Engineering work built on clarity, reliability, and maintainability.</h2>
                <p class="section-header__subtitle">I currently work at SouthState Bank, building dependable digital solutions while continuing to grow through open source and architecture-focused practice.</p>
            </header>
            <div class="columns is-variable is-8">
                <div class="column is-7">
                    <h3 class="title is-3">What I Focus On</h3>
                    <p class="is-size-5">I help build and maintain software across SouthState&apos;s technology ecosystem, with an emphasis on scalable architecture and user-centered implementation.</p>
                    <p>Before joining full time, I contributed to Buefy&apos;s Vue 3 migration and later interned at SouthState, supporting improvements across both frontend and backend systems.</p>
                </div>
                <div class="column is-5">
                    <div class="about-highlights box surface-panel">
                        <h3 class="title is-5">Current Focus</h3>
                        <ul>
                            <li>Maintainable full-stack product development</li>
                            <li>Software architecture and long-term system quality</li>
                            <li>Practical engineering documentation</li>
                        </ul>
                        <NuxtLink to="/about" class="button is-primary is-outlined mt-4">Read Full About Page</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.home-about p + p {
    margin-top: 1rem;
}

.about-highlights {
    padding: 1.25rem;
}

.about-highlights ul {
    list-style: disc;
    padding-left: 1.2rem;
}

.about-highlights li + li {
    margin-top: 0.4rem;
}
</style>
