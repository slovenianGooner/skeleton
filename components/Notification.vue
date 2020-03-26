<template>
  <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 flex justify-end w-full">
    <transition
      name="notification-opacity"
      enter-active-class="transform ease-out duration-300 transition"
      enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="flex-1 max-w-md w-auto px-2 sm:px-6 lg:px-8">
        <div class="p-2 rounded-lg shadow-lg sm:p-3" :class="['bg-' + theme + '-500']">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg" :class="['bg-' + theme + '-400']">
                <i class="fal fa-check text-white" v-if="type === 'success'"></i>
                <i class="fal fa-exclamation-triangle text-white" v-if="type === 'error'"></i>
              </span>
              <p class="ml-3 font-medium text-white truncate">{{message}}</p>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                @click.prevent="show = false"
                type="button"
                class="-mr-1 flex p-2 rounded-md focus:outline-none transition ease-in-out duration-150"
                :class="['hover:bg-' + theme + '-600 focus:bg-' + theme + '-600']"
              >
                <svg
                  class="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
    theme() {
      if (this.type === 'success') {
        return 'green'
      }

      return 'red'
    }
  },
  mounted() {
    let timeout = setTimeout(() => {
      this.show = false
      clearTimeout(timeout)
      this.$emit('close')
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
</style>