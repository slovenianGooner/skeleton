<template>
  <div class="text-lg leading-7">
    <div>
      <button
        @click.prevent="toggleCollapse"
        class="p-4 cursor-pointer text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
      >
        <span class="text-xl leading-6 font-extrabold text-gray-900">
          <slot name="title"></slot>
        </span>
        <span class="ml-6 h-7 flex items-center">
          <span v-if="collapsed">
            <i class="fal fa-chevron-down"></i>
          </span>
          <span v-else>
            <i class="fal fa-chevron-up"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="p-4" :class="{ 'hidden': collapsed, 'block': !collapsed }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startCollapsed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      collapsed: this.startCollapsed
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
</style>