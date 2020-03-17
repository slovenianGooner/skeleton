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
        <div class="w-screen h-screen p-6">
          <div
            class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all flex flex-col h-full"
          >
            <div class="border-b border-gray-200 px-4 py-5 sm:px-6 flex-none" v-if="$slots.header">
              <slot name="header" />
            </div>
            <div class="flex-grow overflow-y-auto">
              <slot name="body" />
            </div>
            <div class="border-t border-gray-200 px-4 py-4 sm:px-6 flex-none" v-if="$slots.footer">
              <slot name="footer" />
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
    modalOpen: {
      type: Boolean,
      default: false
    }
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