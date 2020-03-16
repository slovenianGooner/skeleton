<template>
  <div class="mb-4">
    <div class="relative flex items-center mb-4">
      <div class="h-1 border-b w-full"></div>
      <button
        class="block px-4 text-sm w-96 text-center text-gray-500 focus:outline-none"
        @click.prevent="toggle"
      >
        <i class="fal fa-filter"></i>
        {{buttonTitle}}
      </button>
      <div class="h-1 border-b w-full"></div>
    </div>
    <div class="bg-white overflow-hidden shadow rounded-lg" v-if="open">
      <div class="px-4 py-5 sm:p-6">
        <slot />
        <button
          v-if="activeFiltersCount"
          @click.prevent="$emit('clear')"
          class="text-sm underline text-red-600 mt-4 focus:outline-none"
        >{{clearFiltersButtonTitle}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      default: 'Filter'
    },
    clearFiltersButtonTitle: {
      type: String,
      default: 'Clear filters'
    },
    filters: {
      type: Array,
      default: () => {
        return []
      }
    },
    urlQuery: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      open: false
    }
  },
  created() {
    this.open = this.activeFiltersCount > 0
  },
  computed: {
    activeFiltersCount() {
      let count = 0
      this.filters.forEach(filter => {
        if (
          this.urlQuery[filter] !== undefined &&
          this.urlQuery[filter] !== null &&
          this.urlQuery[filter] !== ''
        ) {
          count++
        }
      })

      return count
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
</style>