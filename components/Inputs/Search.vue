<template>
  <form @submit.prevent="submit" class="w-full">
    <div class="flex rounded-md shadow-sm">
      <div class="relative flex-grow focus-within:z-10">
        <input
          class="form-input block w-full rounded-none rounded-l-md transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          :placeholder="placeholder"
          v-model="search"
        />
      </div>
      <button
        class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
      >
        <i class="fa fa-search"></i>
        <span class="ml-2">{{searchTitle}}</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    preventDefaultSubmit: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Search here...'
    },
    searchTitle: {
      type: String,
      default: 'Search'
    },
    value: {
      type: String,
      default: ''
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
      search: this.value
    }
  },
  created() {},
  methods: {
    submit() {
      this.$emit('submit')

      if (!this.preventDefaultSubmit) {
        this.$inertia.replace(
          route(route().current(), {
            ...this.urlQuery,
            search: this.search,
            page: 1
          })
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>