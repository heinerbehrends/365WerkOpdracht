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
    background-color: $button-color;
    padding: $xs $s;
    border: none;
    border-radius: $xxs;
  }
  button:disabled {
    background-color: gray;
  }
</style>