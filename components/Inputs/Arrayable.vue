<template>
  <div>
    <label v-if="label" class="mb-2 block text-sm font-medium leading-5 text-gray-700">{{ label }}</label>
    <div class="flex flex-wrap -mx-2">
      <div v-for="(item, index) in items" :key="index" class="px-2" :class="[blockWidth]">
        <div class="border border-gray-200 rounded-lg mb-4">
          <div class="flex justify-between items-center">
            <div
              class="px-2 bg-gray-200 text-gray-800 py-1 rounded-br-lg rounded-tl-lg font-semibold"
            >#{{index + 1}}</div>
            <button
              @click.prevent="removeItem(index)"
              class="px-2 flex hover:bg-red-300 rounded-bl-lg rounded-tr-lg justify-center items-center py-2 bg-red-200 text-red-600 text-sm"
            >
              <i class="fa fa-trash fa-fw"></i>
            </button>
          </div>
          <div class="p-4">
            <slot :newItem="item"></slot>
          </div>
        </div>
      </div>
    </div>
    <button
      @click.prevent="addItem"
      class="mt-2 inline-flex justify-center items-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
    >
      <i class="fa fa-plus fa-fw mr-1"></i>
      {{addTitle}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    blockWidth: {
      type: String,
      default: 'w-1/4'
    },
    placeholder: {
      required: true,
      type: Object
    },
    addTitle: {
      type: String,
      default: 'Add new'
    },
    label: String,
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      items: []
    }
  },
  watch: {
    items: {
      deep: true,
      handler() {
        this.$emit('input', this.items)
      }
    }
  },
  created() {
    this.items = this.value
  },
  methods: {
    addItem() {
      this.items.push(this.placeholder)
    },
    removeItem(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>