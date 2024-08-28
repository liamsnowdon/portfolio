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
  <Wrapper id="contact">
    <WrapperContent>
      <div text="left md:center" m="b-8">
        <h2 text="3xl white" font="bold">
          Let's get started
        </h2>
      </div>

      <form
        name="need-a-website"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        max-w="screen-sm"
        m="x-auto"
        space="y-4"
      >
        <input type="hidden" name="form-name" value="need-a-website">

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

        <InputSelect
          id="subject"
          v-model="form.subject"
          :options="[{ label: '1 page', value: '1 page' }, { label: '3+ pages', value: '3+ pages' }, { label: '7+ pages', value: '7+ pages' }, { label: 'Other', value: 'Other' }]"
          placeholder="1 page"
          required
        >
          <template #label>
            Website
          </template>
        </InputSelect>

        <InputTextarea id="message" v-model="form.message" placeholder="Give some initial details of what you need" required>
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
    </WrapperContent>
  </Wrapper>
</template>
