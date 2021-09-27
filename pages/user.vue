<template>
  <div class="container">
    <section v-if="user === null">
      <h1>Log in om deze pagina te zien.</h1>
      <NuxtLink to="/">Click hier om naar de Log in pagina te gaan.</NuxtLink>
    </section>
    <section v-else>
      <h1>User!</h1>
      <p>User: {{user.name}}</p>
      <p>E-mail: {{user.email}}</p>
      <p>Telefoon: {{user.phone}}</p>
      <button class="button" @click="logOut">Log out</button>
    </section>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { Button } from '../components/Button.vue'
  export default {
    components: [Button],
    computed: {
      ...mapState({ user: state => state.user })
    },
    methods: {
      ...mapActions(['logOut'])
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 420px;
    margin: 0 auto;
  }
  .button {
    color: white;
    background-color: blue;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.25rem;
  }
</style>