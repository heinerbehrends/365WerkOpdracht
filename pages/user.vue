<template>
  <section>
    <h1>User!</h1>
    <p>User: {{user.name}}</p>
    <p>E-mail: {{user.email}}</p>
    <p>Telefoon: {{user.phone}}</p>
    <button @click="logOut">Log out</button>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState({ user: state => state.user })
    },
    methods: {
      ...mapActions(['logOut'])
    }
  }
</script>
