<template>
  <section class="section is-medium page-contact">
    <div class="container is-max-desktop">
      <header class="section-header">
        <p class="section-header__eyebrow">Contact</p>
        <h1 class="title section-header__title">Tell me about the business and what it needs.</h1>
        <p class="section-header__subtitle">Fill in the form below, or email me directly if you'd rather skip it.</p>
      </header>

      <div class="contact-panel box mt-5 surface-panel">
        <form v-if="!submitted" novalidate @submit.prevent="onSubmit">
          <b-field label="Name">
            <b-input v-model="form.name" required />
          </b-field>

          <b-field label="Email">
            <b-input v-model="form.email" type="email" required />
          </b-field>

          <b-field label="Business name">
            <b-input v-model="form.business" />
          </b-field>

          <b-field label="What do you need?">
            <b-input v-model="form.needs" type="textarea" required />
          </b-field>

          <b-field label="Budget range (optional)">
            <b-select v-model="form.budget" placeholder="Select a range">
              <option value="under-2k">Under $2,000</option>
              <option value="2k-5k">$2,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-plus">$10,000+</option>
            </b-select>
          </b-field>

          <p v-if="error" class="contact-form__error">{{ error }}</p>

          <button type="submit" class="button is-primary is-medium">Send -&gt;</button>
        </form>

        <div v-else class="contact-form__success">
          <p>Thanks — I'll get back to you shortly.</p>
        </div>

        <p class="contact-panel__secondary">
          Prefer email? <a :href="`mailto:${appConfig.contactEmail}`">{{ appConfig.contactEmail }}</a>
        </p>
      </div>

      <div class="columns mt-5">
        <div class="column">
          <h2 class="title is-5">What to Include</h2>
          <ul class="contact-list">
            <li>What the business does</li>
            <li>What you want the site or system to do</li>
            <li>Any deadline you're working against</li>
          </ul>
        </div>
        <div class="column">
          <h2 class="title is-5">Also Find Me On</h2>
          <ul class="contact-list">
            <li><a href="https://github.com/wesdevpro" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/wesdevpro" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()

const form = reactive({
  name: '',
  email: '',
  business: '',
  needs: '',
  budget: '',
})

const submitted = ref(false)
const error = ref('')

// TODO(wesley): wire this to a Cloudflare Worker endpoint once one exists
// (under consideration, not built yet). This currently only validates in
// the browser — no data leaves the client.
function onSubmit() {
  if (!form.name.trim() || !form.email.trim() || !form.needs.trim()) {
    error.value = 'Name, email, and what you need are required.'
    return
  }

  error.value = ''
  submitted.value = true
}

useSeoMeta({
  title: 'Contact',
  description: 'Tell wesdevpro about your business and what you need built — a website, a system integration, or AI tooling.',
  ogTitle: 'Contact · wesdevpro',
  ogDescription: 'Tell wesdevpro about your business and what you need built.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.contact-panel {
  border: 1px solid var(--color-border);
}

.contact-panel__secondary {
  margin-top: 1rem;
  color: var(--color-text-muted);
  font-size: var(--step--1);
}

.contact-form__error {
  color: var(--color-ink-deep);
  font-weight: var(--weight-semibold);
  margin-bottom: 0.75rem;
}

.contact-form__success {
  padding: 1rem 0;
}

.contact-list {
  list-style: disc;
  padding-left: 1.2rem;
}

.contact-list li + li {
  margin-top: 0.4rem;
}
</style>
