<template>
  <div>
    <div class="bg-white shadow overflow-hidden sm:rounded-md" v-if="data.length">
      <div v-if="header">
        <slot name="header" />
      </div>
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <slot :item="item" :index="index" />
        </li>
      </ul>
    </div>
    <div
      v-else
      class="bg-white shadow overflow-hidden sm:rounded-md p-8 flex items-center justify-center text-gray-600"
    >{{missingData}}</div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    missingData: {
      type: String,
      default: 'No items yet.'
    }
  }
}
</script>

<style lang="scss" scoped></style>
