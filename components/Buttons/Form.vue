<template>
  <span class="shadow-sm rounded-md">
    <slot>
      <button
        @click="$emit('click', $event)"
        class="inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        :class="[colors]"
        :href="href"
      >
        <i :class="[icon]" class="fa-fw mr-2"></i>
        {{ title }}
      </button>
    </slot>
  </span>
</template>

<script>
export default {
  props: {
    title: {},
    href: {},
    colors: {},
    icon: {}
  }
}
</script>

<style lang="scss" scoped></style>
