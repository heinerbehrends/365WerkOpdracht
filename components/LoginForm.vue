<template>
  <form class="form" @submit.prevent="submitForm(form)">
    <h1 class="heading">Log in</h1>
    <p v-if="error === 401" class="error">
      De combinatie van e-mailadres en wachtwoord is niet geldig. 
    </p>
    <Input 
      v-model="form.email"
      name="email"
      type="email"
      :is-valid="isValidEmail"
      :is-touched="isTouched.email"
      aria-label="E-mailadres"
      aria-errormessage="Vul een geldig e-mail adres in."
      @blurred="isTouched.email = true"
    />
    <Input
      v-model="form.password"
      name="password"
      type="password"
      :is-valid="isValidPassword"
      :is-touched="isTouched.password"
      aria-label="Wachtwoord"
      aria-errormessage="Het wachtwoord moet minimaal 6 letters lang zijn."
      @blurred="isTouched.password = true"
    />
    <Button 
      text="Log in" 
      :disabled="isPending || (!isValidForm && isTouched.email && isTouched.password)"
    />
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from './Button.vue'
import Input from './Input.vue'

export default {
  components: { Button, Input },
  data() { 
    return {
      form: {
        email: "",
        password: "",
      },
      isTouched: {
        email: false,
        password: false,
      }
    }
  },
  computed: {
    ...mapState({
      isPending: state => state.isPending,
      error: state => state.error,
    }),
    isValidEmail() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(this.form.email?.toLowerCase())
    },
    isValidPassword() {
      if (this.form.password === null) return false
      return this.form.password.length > 5
    },
    isValidForm() {
      return this.isValidEmail && this.isValidPassword
    },
  },
  methods: {
    ...mapActions(['submitForm']),
  },
}
</script>


<style lang="scss" scoped>
  .form {
    max-width: 420px;
    border: 1px gray solid;
    padding: $l;
    margin: 0 auto $l auto;
  }
  .heading {
    text-align: center;
    margin-bottom: $m;
  }
</style>
