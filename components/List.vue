<template>
  <div>
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <div v-if="$slots.header">
        <slot name="header" />
      </div>
      <div v-if="data.length">
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
      <div v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
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
