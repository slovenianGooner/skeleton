<template>
  <button :disabled="loading" @click="$emit('click')">
    <i class="fa fa-spin fa-spinner mr-2" v-if="loading"></i>
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>