<template>
  <div v-on-clickaway="closeDropdown" class="relative">
    <div
      v-show="open && dropUp"
      :class="[positionDropUp]"
      class="absolute w-48 rounded-md shadow-lg z-10"
    >
      <div class="py-1 rounded-md bg-white dark:bg-gray-600 shadow-xs">
        <slot name="content" :toggleDropdown="toggleDropdown"></slot>
      </div>
    </div>
    <div>
      <slot name="button" :toggleDropdown="toggleDropdown">
        <button @click.prevent="toggleDropdown" :class="dropdownClass">
          <slot name="title">Title</slot>
        </button>
      </slot>
    </div>
    <div
      v-show="open && !dropUp"
      class="absolute w-48 rounded-md shadow-lg"
      :class="[positionDropDown]"
    >
      <div class="py-1 rounded-md bg-white dark:bg-gray-600 shadow-xs">
        <slot name="content" :toggleDropdown="toggleDropdown"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shouldDropUp: {
      type: Boolean,
      default: false,
    },
    positionDropDown: {
      type: String,
      default: "origin-top-right right-0 mt-2",
    },
    positionDropUp: {
      type: String,
      default: "origin-bottom-right bottom-full mb-2",
    },
    dropdownClass: {
      type: String,
      default:
        "inline-flex justify-center items-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white dark:bg-gray-600 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150",
    },
  },
  data() {
    return {
      open: false,
      dropUp: this.shouldDropUp,
    };
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    closeDropdown() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
