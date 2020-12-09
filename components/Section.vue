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
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </span>
          <span v-else>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </span>
        </span>
      </button>
    </div>
    <div class="p-4" :class="{ hidden: collapsed, block: !collapsed }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startCollapsed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      collapsed: this.startCollapsed,
    };
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
