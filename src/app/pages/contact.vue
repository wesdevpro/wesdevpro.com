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
          <b-field label="Name (required)" label-for="contact-name">
            <b-input
              id="contact-name"
              v-model="form.name"
              name="name"
              autocomplete="name"
              required
              aria-required="true"
              :aria-invalid="fieldErrors.name ? 'true' : undefined"
              :aria-describedby="fieldErrors.name ? 'contact-name-error' : undefined"
              :compat-fallthrough="false"
            />
          </b-field>
          <p v-if="fieldErrors.name" id="contact-name-error" class="contact-field-error">{{ fieldErrors.name }}</p>

          <b-field label="Email (required)" label-for="contact-email">
            <b-input
              id="contact-email"
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              required
              aria-required="true"
              :aria-invalid="fieldErrors.email ? 'true' : undefined"
              :aria-describedby="fieldErrors.email ? 'contact-email-error' : undefined"
              :compat-fallthrough="false"
            />
          </b-field>
          <p v-if="fieldErrors.email" id="contact-email-error" class="contact-field-error">{{ fieldErrors.email }}</p>

          <b-field label="Business name (optional)" label-for="contact-business">
            <b-input
              id="contact-business"
              v-model="form.business"
              name="business"
              autocomplete="organization"
              :compat-fallthrough="false"
            />
          </b-field>

          <b-field label="What do you need? (required)" label-for="contact-needs">
            <b-input
              id="contact-needs"
              v-model="form.needs"
              type="textarea"
              name="needs"
              required
              aria-required="true"
              :aria-invalid="fieldErrors.needs ? 'true' : undefined"
              :aria-describedby="fieldErrors.needs ? 'contact-needs-error' : undefined"
              :compat-fallthrough="false"
            />
          </b-field>
          <p v-if="fieldErrors.needs" id="contact-needs-error" class="contact-field-error">{{ fieldErrors.needs }}</p>

          <b-field label="Budget range (optional)" label-for="contact-budget">
            <b-select
              id="contact-budget"
              v-model="form.budget"
              name="budget"
              placeholder="Select a range"
              :compat-fallthrough="false"
            >
              <option value="under-2k">Under $2,000</option>
              <option value="2k-5k">$2,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-plus">$10,000+</option>
              <option value="not-sure">Not sure yet</option>
            </b-select>
          </b-field>

          <p v-if="error" id="contact-form-error" ref="errorEl" class="contact-form__error" role="alert" tabindex="-1">{{ error }}</p>

          <button type="submit" class="button is-primary is-medium" :disabled="isSubmitting">Send inquiry <span aria-hidden="true">-&gt;</span></button>
        </form>

        <div v-else ref="successEl" class="contact-form__success" role="status" tabindex="-1">
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
            <li>What you want automated, or what you want the site or system to do</li>
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
const isSubmitting = ref(false)
const error = ref('')
const fieldErrors = reactive({
  name: '',
  email: '',
  needs: '',
})
const errorEl = ref<HTMLElement | null>(null)
const successEl = ref<HTMLElement | null>(null)

// TODO(wesley): wire this to a Cloudflare Worker endpoint once one exists
// (under consideration, not built yet). This currently only validates in
// the browser — no data leaves the client.
async function onSubmit() {
  if (isSubmitting.value) return
  isSubmitting.value = true

  fieldErrors.name = form.name.trim() ? '' : 'Enter your name.'
  fieldErrors.email = form.email.trim() ? '' : 'Enter your email.'
  fieldErrors.needs = form.needs.trim() ? '' : 'Tell me what you need.'

  const missing = [fieldErrors.name, fieldErrors.email, fieldErrors.needs].filter(Boolean)
  if (missing.length) {
    error.value = 'Please fix the highlighted field' + (missing.length > 1 ? 's' : '') + ' below.'
    await nextTick()
    errorEl.value?.focus()
    isSubmitting.value = false
    return
  }

  error.value = ''
  submitted.value = true
  await nextTick()
  successEl.value?.focus()
  isSubmitting.value = false
}

useSeoMeta({
  title: 'Contact',
  description: 'Tell wesdevpro about your business and what you need built — AI tooling, a system integration, or a website.',
  ogTitle: 'Contact · wesdevpro',
  ogDescription: 'Tell wesdevpro about your business and what you need built.',
  ogImage: '/images/wesdevpro-banner.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.contact-panel {
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
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

.contact-field-error {
  color: var(--color-ink-deep);
  font-size: var(--step--1);
  margin-top: -0.5rem;
  margin-bottom: 0.75rem;
}

.contact-form__error:focus,
.contact-form__success:focus {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
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
