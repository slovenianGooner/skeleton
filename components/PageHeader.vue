<template>
  <div class="p-8 pb-0">
    <div class="md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
        >{{ title }}</h2>
      </div>
      <div class="mt-4 flex md:mt-0 md:ml-4">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {}
  }
}
</script>

<style lang="scss" scoped></style>
