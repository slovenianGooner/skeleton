<template>
  <div class="mb-4">
    <div class="relative flex items-center mb-4">
      <div class="h-1 border-b w-full"></div>
      <button
        class="flex items-center justify-center px-4 text-sm w-128 sm:w-96 text-center text-gray-500 focus:outline-none"
        @click.prevent="toggle"
      >
        <svg
          class="w-4 h-4 mr-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          ></path>
        </svg>
        {{ buttonTitle }}
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
        >
          {{ clearFiltersButtonTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      default: "Filter",
    },
    clearFiltersButtonTitle: {
      type: String,
      default: "Clear filters",
    },
    filters: {
      type: Array,
      default: () => {
        return [];
      },
    },
    urlQuery: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      open: false,
    };
  },
  created() {
    this.open = this.activeFiltersCount > 0;
  },
  computed: {
    activeFiltersCount() {
      let count = 0;
      this.filters.forEach((filter) => {
        if (
          this.urlQuery[filter] !== undefined &&
          this.urlQuery[filter] !== null &&
          this.urlQuery[filter] !== ""
        ) {
          count++;
        }
      });

      return count;
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
