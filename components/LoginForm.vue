<template>
  <form class="form" @submit.prevent="submitForm(form)">
    <h1 class="heading">Log in</h1>
    <p v-if="error === 401" class="error">
      De combinatie van e-mailadres en wachtwoord is niet geldig. 
    </p>
    <label class="column label">
      E-mailadres 
      <input
        v-model="form.email"
        class="input"
        required
        name="email" 
        type="email"
        aria-label="e-mailadres"
        aria-required="true" 
      >
    </label>
    <label class="column label">
      Wachtwoord
      <input
        v-model="form.password"
        class="input"
        required
        name="password" 
        type="password"
        aria-label="wachtwoord"
        aria-required="true" 
      >
    </label>
    <Button text="Log in" :disabled="isPending" />
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
    }
  },
  computed: {
    ...mapState({
      isPending: state => state.isPending,
      error: state => state.error,
    })
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
    padding: 4rem;
    margin: 0 auto;
  }
  .heading {
    text-align: center;
  }
  .label {
    margin-bottom: 2rem;
  }
  .input {
    padding: 0.5rem 0.75rem;
    margin-top: 0.25rem;
  }
  .error {
    padding: 0.5rem 0.75rem;
    border: 1px solid red;
    background-color: #fcc9c9;
    border-radius: 0.5rem;
  }
</style>