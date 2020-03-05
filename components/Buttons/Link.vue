<template>
  <span class="shadow-sm rounded-md">
    <slot>
      <inertia-link
        @click="$store.commit('startLoading')"
        class="inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        :class="[colors]"
        :href="href"
      >
        <i :class="[icon]" class="fa-fw"></i>
        <span class="ml-2" v-if="title">{{ title }}</span>
      </inertia-link>
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
