<template>
  <div class="container">
    <section v-if="user === null">
      <h1>Log in om deze pagina te zien.</h1>
      <NuxtLink to="/">Click hier om naar de Log in pagina te gaan.</NuxtLink>
    </section>
    <section v-else>
      <h1 class="heading">Gebruikersinformatie</h1>
      <section class="info">
        <p>Naam: {{ user.name }}</p>
        <p>E-mail: {{ user.email }}</p>
        <p>Telefoon: {{ user.phone }}</p>
      </section>
      <Button text="Log out" class="button" event="log-out" @log-out="logOut" />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Button from '../components/Button.vue'

export default {
  components: {
    Button
  },
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
  padding: $xl;
}
.heading {
  margin-bottom: $l;
}
p {
  margin-bottom: $m;
}
.info {
  margin-bottom: $l;
}
</style>
