<template>
  <modal ref="modal" @close="close" :modal-open="open">
    <template slot="body">
      <h1 class="text-lg leading-6 font-medium text-gray-900 mb-4">{{ title }}</h1>
      <div class="alert alert-danger mb-4 w-full" role="alert" v-if="message">
        <span class="block sm:inline">{{ message }}</span>
      </div>

      <slot />
    </template>
    <template slot="footer">
      <span class="flex w-full rounded-md shadow-sm sm:col-start-2">
        <loading-button
          @click="submit"
          :loading="loading"
          type="button"
          class="inline-flex justify-center items-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
        >
          <i class="fa fa-trash fa-fw mr-1"></i>
          {{ btnText }}
        </loading-button>
      </span>
      <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1">
        <button
          @click.prevent="close"
          type="button"
          class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
        >Cancel</button>
      </span>
    </template>
  </modal>
</template>

<script>
export default {
  props: ['title', 'btnClass', 'btnText'],
  data() {
    return {
      loading: false,
      open: false,
      message: null,
      data: {}
    }
  },
  methods: {
    close() {
      this.closeModal(this)
      this.data = {}
    },
    submit() {
      document.getElementsByTagName('body')[0].removeAttribute('style')
      this.$emit('confirm', this.data)
      this.data = {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
