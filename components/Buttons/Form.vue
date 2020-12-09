<template>
  <span class="shadow-sm rounded-md">
    <slot>
      <button
        @click="$emit('click', $event)"
        class="inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        :class="[colors]"
        :href="href"
      >
        <div v-if="$slots.icon" class="mr-2">
          <slot name="icon"></slot>
        </div>
        <i :class="[icon]" class="fa-fw mr-2" v-if="icon !== undefined"></i>
        <span v-if="title">{{ title }}</span>
      </button>
    </slot>
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    href: {},
    colors: {},
    icon: {},
  },
};
</script>

<style lang="scss" scoped></style>
