<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})
</script>

<template>
  <Wrapper id="contact">
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

        <InputText id="name" v-model="form.name" placeholder="John Doe" required>
          <template #label>
            Name
          </template>
        </InputText>

        <InputText id="email" v-model="form.email" type="email" placeholder="example@gmail.com" required>
          <template #label>
            Email
          </template>
        </InputText>

        <InputText id="subject" v-model="form.subject" placeholder="Let's connect!" required>
          <template #label>
            Subject
          </template>
        </InputText>

        <InputTextarea id="message" v-model="form.message" required>
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
