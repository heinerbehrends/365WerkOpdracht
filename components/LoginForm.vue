<template>
  <form class="form" @submit.prevent="submitForm(form)">
    <h1 class="heading">Log in</h1>
    <p v-if="error === 401" class="error">
      De combinatie van e-mailadres en wachtwoord is niet geldig. 
    </p>
    <label class="column">
      <p class="label">E-mailadres </p>
      <p v-if="!isValidEmail && isTouched.email" 
        class="error-msg" 
      >
        Vul een geldig e-mail adres in.
      </p>
      <input
        v-model="form.email"
        class="input"
        required
        name="email" 
        type="email"
        aria-label="e-mailadres"
        aria-required="true" 
        @blur="isTouched.email = true"
      >
    </label>
    <label class="column">
      <p class="label">Wachtwoord</p>
      <p 
        v-if="!isValidPassword && isTouched.password" 
        class="error-msg" 
      >
        Het wachtwoord moet minimaal 6 letters lang zijn.
      </p>

      <input
        v-model="form.password"
        class="input"
        required
        name="password" 
        type="password"
        aria-label="wachtwoord"
        aria-required="true" 
        @blur="isTouched.password = true"
      >
    </label>
    <Button text="Log in" :disabled="isPending || !isValidForm" />
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from './Button.vue'

export default {
  components: { Button },
  data() { 
    return {
      form: {
        email: null,
        password: null,
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
    }
  },
  methods: {
    ...mapActions(['submitForm']),
  },
}
</script>


<style lang="scss" scoped>
  .column {
    display: flex;
    flex-direction: column;
  }
  .form {
    max-width: 420px;
    border: 1px gray solid;
    padding: $l;
    margin: 0 auto;
  }
  .heading {
    text-align: center;
    margin-bottom: $m;
  }
  .label {
    margin-bottom: $xxs;
  }
  .input {
    padding: $xs $s;
    margin-bottom: $l;
  }
  .error {
    padding: $xs $s;
    border: 1px solid $error-color;
    background-color: #fcc9c9;
    border-radius: $xs;
  }
  .error-msg {
    color: $error-color;
    margin-bottom: $xxs;
  }
</style>
