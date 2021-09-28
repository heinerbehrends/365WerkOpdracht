<template>
  <section class="column">
    <label class="label" :for="name">
      {{ ariaLabel }}
    </label>
    <label v-if="!isValid && isTouched" :for="name" class="error">
      {{ ariaErrormessage }}
    </label>
    <input
      :id="name"
      class="input"
      required
      :name="name"
      :type="type"
      :value="value"
      aria-label="e-mailadres"
      aria-required="true"
      @input="handleChange"
      @blur="handleBlur"
    />
  </section>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean,
      required: true
    },
    isTouched: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      required: true
    },
    ariaErrormessage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      content: this.value
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event.target.value)
    },
    handleBlur() {
      this.$emit('blurred')
    }
  }
}
</script>

<style lang="scss">
.column {
  display: flex;
  flex-direction: column;
}
.label {
  margin-bottom: $xxs;
}
.input {
  padding: $xs $s;
  margin-bottom: $l;
  font-size: 1rem;
}
.error-msg {
  color: $error-color;
  margin-bottom: $xxs;
}
.error {
  padding: $xs $s;
  border: 1px solid $error-color;
  background-color: color.scale($error-color, $lightness: 90%);
  border-radius: $xs;
  margin-bottom: $s;
}
</style>
