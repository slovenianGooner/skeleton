<template>
  <div v-on-clickaway="closeDropdown" class="ml-3 relative">
    <div
      v-if="open && dropUp"
      class="origin-bottom-right absolute bottom-full mb-2 right-0 w-48 rounded-md shadow-lg z-10"
    >
      <div class="py-1 rounded-md bg-white shadow-xs">
        <slot name="content" :toggleDropdown="toggleDropdown"></slot>
      </div>
    </div>
    <div>
      <slot name="button" :toggleDropdown="toggleDropdown">
        <button
          @click.prevent="toggleDropdown"
          class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
        >
          <slot name="title">Title</slot>
        </button>
      </slot>
    </div>
    <div
      v-if="open && !dropUp"
      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
    >
      <div class="py-1 rounded-md bg-white shadow-xs">
        <slot name="content" :toggleDropdown="toggleDropdown"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dropUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open
    },
    closeDropdown() {
      this.open = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>