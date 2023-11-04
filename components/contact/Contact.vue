<script setup lang="ts">
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
  <Wrapper id="contact" border="t neutral-800">
    <Content>
      <div text="left md:center" space="y-4" m="b-8">
        <h2 text="3xl white" font="bold">
          Get in touch!
        </h2>

        <p text="lg neutral-400">
          Wanna chat? You can contact me via email or social media.
          <br>
          Or, fill out the form to send me a message directly.
        </p>

        <div flex="~" justify="md:center" space="x-4">
          <a
            v-for="social in socials"
            :key="social.icon"
            :href="social.url"
            target="_blank"
            flex="inline"
            p="2"
            bg="neutral-800 hover:neutral-700"
            border="rounded-2xl"
            :aria-label="social.name"
            class="group"
          >
            <span :class="social.icon" display="inline-block" text="5xl neutral-400 group-hover:white" />
          </a>
        </div>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        max-w="screen-sm"
        m="x-auto"
        space="y-4"
      >
        <input type="hidden" name="form-name" value="contact">

        <InputText id="name" v-model="form.name" placeholder="Your name" required>
          <template #label>
            Name
          </template>
        </InputText>

        <InputText id="email" v-model="form.email" type="email" placeholder="Your email to reply to" required>
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
            Submit
          </Button>
        </div>
      </form>
    </Content>
  </Wrapper>
</template>
