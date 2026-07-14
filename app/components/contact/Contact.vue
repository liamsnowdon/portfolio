<script setup lang="ts">
import { ref } from 'vue'
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import SectionHeading from '../section-heading/SectionHeading.vue'
import InputText from '../form/InputText.vue'
import InputTextarea from '../form/InputTextarea.vue'
import Button from '../button/Button.vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const socials = [
  { name: 'Email', icon: 'i-carbon-email', url: 'mailto:snowdon.liam@gmail.com' },
  { name: 'Linkedin', icon: 'i-carbon-logo-linkedin', url: 'https://www.linkedin.com/in/liam-snowdon' },
  { name: 'Github', icon: 'i-carbon-logo-github', url: 'https://github.com/liamsnowdon' },
]
</script>

<template>
  <Wrapper id="contact" class="border-t border-white/5">
    <WrapperContent>
      <SectionHeading eyebrow="Contact" centered>
        Get in touch!
        <template #description>
          Wanna chat? You can contact me via email or social media. Or, fill out the form to send me a message directly.
        </template>
      </SectionHeading>

      <div class="mb-10 flex justify-center gap-4">
        <a
          v-for="social in socials"
          :key="social.icon"
          :href="social.url"
          target="_blank"
          :aria-label="social.name"
          class="group glass-card inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10"
        >
          <span :class="social.icon" class="text-2xl text-neutral-400 transition-colors group-hover:text-white" />
        </a>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="glass-card mx-auto max-w-screen-sm space-y-5 rounded-3xl p-6 md:p-10"
      >
        <input type="hidden" name="form-name" value="contact">

        <InputText id="name" v-model="form.name" placeholder="Your name" required>
          <template #label>
            Name
          </template>
        </InputText>

        <InputText
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Your email to reply to"
          required
        >
          <template #label>
            Email
          </template>
        </InputText>

        <InputText id="subject" v-model="form.subject" placeholder="Subject you want to discuss" required>
          <template #label>
            Subject
          </template>
        </InputText>

        <InputTextarea id="message" v-model="form.message" placeholder="What do you want to talk about?" required>
          <template #label>
            Message
          </template>
        </InputTextarea>

        <div flex="~" justify="center">
          <Button full-size>
            Send it my way
          </Button>
        </div>
      </form>
    </WrapperContent>
  </Wrapper>
</template>
