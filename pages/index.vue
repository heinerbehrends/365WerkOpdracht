<template>
  <div>
    <Logo />
    <LoginForm/>
  </div>
</template>

<script>
  import LoginForm from '../components/LoginForm.vue'
  import Logo from '../components/Logo.vue'

  export default {
    components: { LoginForm, Logo }
  }
</script>

