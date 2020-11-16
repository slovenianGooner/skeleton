<template>
  <div>
    <transition
      name="modal-opacity"
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="open" class="fixed z-20 inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
    </transition>
    <transition
      name="modal"
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div
        v-if="open"
        class="fixed z-30 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
      >
        <div
          class="bg-white rounded-lg px-4 pt-5 pb-4 shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
          :class="{ 'overflow-hidden': !overflows }"
        >
          <div>
            <slot name="body" />
          </div>
          <div
            class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
            v-if="$slots.footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    modalOpen: {
      type: Boolean,
      default: false
    },
    overflows: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: this.modalOpen
    }
  },
  watch: {
    modalOpen() {
      this.open = this.modalOpen
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
