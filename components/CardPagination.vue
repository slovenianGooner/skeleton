<template>
  <div>
    <div
      class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
    >
      <div class="hidden sm:block">
        <p class="text-sm leading-5 text-gray-700">
          Showing
          <span class="font-medium">{{data.from}}</span>
          to
          <span class="font-medium">{{data.to}}</span>
          of
          <span class="font-medium">{{data.total}}</span>
          results
        </p>
      </div>
      <div
        class="flex-1 flex justify-between sm:justify-end"
        v-if="data.next_page_url || data.prev_page_url"
      >
        <slot name="links">
          <a
            href="#"
            @click.prevent="$emit('changePage', data.current_page - 1)"
            v-if="data.prev_page_url"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >Previous</a>
          <a
            href="#"
            v-if="data.next_page_url"
            @click.prevent="$emit('changePage', data.current_page + 1)"
            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >Next</a>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>