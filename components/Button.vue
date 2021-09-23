<template>
  <button type="submit" class="button">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    color: white;
    background-color: blue;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.25rem;
  }
</style>