<template>
  <form @submit.prevent="submit" class="w-full">
    <div class="flex" :class="[searchContainerClass]">
      <slot name="prefix"></slot>
      <div class="relative flex-grow focus-within:z-10" :class="[searchClass]">
        <input
          class="form-input block w-full rounded-none rounded-l-md transition ease-in-out duration-150 text-sm sm:leading-5 border-gray-300"
          :placeholder="placeholder"
          v-model="search"
          type="text"
        />
      </div>
      <button
        class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span class="ml-2">{{ searchTitle }}</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    preventDefaultSubmit: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Search here...",
    },
    searchTitle: {
      type: String,
      default: "Search",
    },
    value: {
      type: String,
      default: "",
    },
    urlQuery: {
      type: Object,
      default: () => {
        return {};
      },
    },
    searchContainerClass: {
      type: String,
      default: "rounded-md shadow-sm",
    },
    searchClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      search: this.value,
    };
  },
  created() {},
  methods: {
    submit() {
      this.$emit("submit", this.search);

      if (!this.preventDefaultSubmit) {
        this.$inertia.replace(
          route(route().current(), {
            ...this.urlQuery,
            search: this.search,
            page: 1,
          })
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
