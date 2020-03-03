<template>
  <span
    :class="[toggleClass()]"
    class="relative inline-block flex-no-shrink h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-all ease-in-out duration-200 focus:outline-none focus:shadow-outline"
    role="checkbox"
    tabindex="0"
    @click="toggle()"
    :aria-checked="toggleValue.toString()"
  >
    <span
      aria-hidden="true"
      :class="{ 'translate-x-5': toggleValue, 'translate-x-0': !toggleValue }"
      class="inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
    ></span>
  </span>
</template>

<script>
export default {
  props: {
    value: {},
    activeColor: {
      type: String,
      default: 'bg-gray-800'
    }
  },
  data() {
    return {
      toggleValue: this.value
    }
  },
  watch: {
    toggleValue() {
      this.$emit('input', this.toggleValue)
    }
  },
  methods: {
    toggleClass() {
      if (this.toggleValue) {
        return this.activeColor
      }

      return 'bg-gray-200'
    },
    toggle() {
      this.toggleValue = !this.toggleValue
    }
  }
}
</script>

<style lang="scss" scoped>
</style>