<template>
  <button 
    type="submit" 
    class="button" 
    @click="$emit(event)"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    event: {
      type: String,
      default: ''
    }
  }
}
</script>
