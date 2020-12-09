<template>
  <div class="overflow-hidden relative">
    <a
      href
      :title="title"
      :class="buttonClass"
      @click.prevent="clickItem"
      class="flex justify-between items-center"
    >
      <div class="flex items-center">
        <div v-if="$slots.icon" class="mr-2">
          <slot name="icon"></slot>
        </div>
        <i :class="iconClass" v-if="icon !== undefined"></i>
        <span>{{ title }}</span>
        <span
          v-if="badge"
          class="ml-1.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800"
          >{{ badge }}</span
        >
      </div>
      <div
        class="flex items-center h-full text-gray-300 text-sm"
        v-if="$slots.children"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          v-if="open"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
        <svg
          v-else
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
      </div>
    </a>
    <div v-if="$slots.children && open" class="bg-gray-900 pl-4">
      <slot name="children" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    badge: {
      default: null,
    },
    title: {},
    to: {},
    icon: {},
    itemClass: {
      type: String,
      default:
        "group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 focus:outline-none transition ease-in-out duration-150",
    },
    hoverClass: {
      type: String,
      default:
        "hover:text-white hover:bg-gray-700 focus:text-white focus:bg-gray-700",
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: this.isOpen,
    };
  },
  computed: {
    buttonClass() {
      let buttonClass = this.itemClass;
      buttonClass += " " + this.hoverClass;

      if (this.open) {
        buttonClass += " bg-gray-700";
      }

      return buttonClass;
    },
    iconClass() {
      let iconClass = "fas fa-fw mr-2";
      iconClass += " " + this.icon;

      return iconClass;
    },
  },
  methods: {
    clickItem() {
      if (this.$slots.children) {
        this.open = !this.open;
        return;
      }

      this.$store.commit("startLoading");
      this.$inertia.visit(this.to);
    },
  },
};
</script>

<style lang="scss" scoped></style>
