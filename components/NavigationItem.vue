<template>
  <inertia-link
    :href="to"
    :title="title"
    class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
  >
    <i :class="iconClass"></i>
    <span>{{ title }}</span>
  </inertia-link>
</template>

<script>
export default {
  props: ['title', 'to', 'icon'],
  computed: {
    iconClass() {
      let iconClass = 'fas fa-fw mr-4'
      iconClass += ' ' + this.icon

      return iconClass
    }
  }
}
</script>

<style lang="scss" scoped></style>
