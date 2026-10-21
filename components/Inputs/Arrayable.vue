<template>
  <div>
    <label v-if="label" class="mb-2 block text-sm font-medium leading-5 text-gray-700">{{ label }}</label>

    <div class="flex flex-wrap -mx-2">
      <div class="px-2" :class="[blockWidth]" v-for="(item, index) in items" :key="index">
        <div class="border rounded-lg mb-2">
          <div class="flex" v-if="header">
            <div class="border-r p-2">
              <button @click.prevent="toggleCollapse(index)">
                <i class="fas fa-plus-square fa-fw" v-if="item.collapsed"></i>
                <i class="fas fa-minus-square fa-fw" v-if="!item.collapsed"></i>
              </button>
            </div>
            <div class="p-2">#{{ index + 1 }}</div>
          </div>
          <div
            v-if="!item.collapsed"
            class="flex"
            :class="{ 'border-t': header, 'items-center': !header }"
          >
            <div class="p-2 flex flex-col space-y-4">
              <button @click.prevent="moveUp(index)" v-if="index > 0">
                <i class="fas fa-arrow-up fa-fw"></i>
              </button>
              <div v-else>&nbsp;</div>
              <button @click.prevent="moveDown(index)" v-if="index < items.length">
                <i class="fas fa-arrow-down fa-fw"></i>
              </button>
              <div v-else>&nbsp;</div>
              <button @click.prevent="removeItem(index)">
                <i class="fas fa-trash fa-fw"></i>
              </button>
            </div>
            <div class="border-l p-4 w-full flex-1">
              <slot :newItem="item" :data="additionalData" :index="index"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <button
        @click.prevent="addItem"
        class="inline-flex justify-center items-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
      >
        <i class="fas fa-plus fa-fw mr-1"></i>
        {{ addTitle }}
      </button>
      <div v-if="$slots.buttons">
        <slot name="buttons"></slot>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import uniqid from 'uniqid'

export default {
  props: {
    blockWidth: {
      type: String,
      default: 'w-full'
    },
    additionalData: {
      type: Object,
      default: () => {
        return {}
      }
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
    },
    startCollapsed: {
      type: Boolean,
      default: true
    },
    singleValue: {
      type: Boolean,
      default: false
    },
    header: {
      type: Boolean,
      default: true
    },
    assign: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      collapsed: this.startCollapsed,
      items: []
    }
  },
  watch: {
    items: {
      deep: true,
      handler() {
        if (this.singleValue) {
          this.$emit(
            'input',
            this.items.map(item => {
              return item.value
            })
          )
        } else {
          this.$emit('input', this.items)
        }
      }
    }
  },
  created() {
    if (this.singleValue) {
      this.items = this.value.map(item => {
        let newItem = { value: item, collapsed: this.startCollapsed }
        return newItem
      })
    } else {
      this.items = this.value.map(item => {
        if (this.assign) {
          Object.keys(this.placeholder).forEach((key, value) => {
            if (item[key] === undefined) {
              item[key] = this.placeholder[key]
            }
          })

          if (item.uid === undefined) {
            item.uid = uniqid()
          }
        }
        item.collapsed = this.startCollapsed
        return item
      })
    }
  },
  methods: {
    toggleCollapse(index) {
      let items = [...this.items]
      items[index].collapsed = !items[index].collapsed
      this.items = items
    },
    addItem() {
      let item = { ...this.placeholder, uid: uniqid() }
      this.items.push(item)
    },
    moveUp(index) {
      if (index > 0) {
        this.items = this.arrayMove([...this.items], index, index - 1)
      }
    },
    moveDown(index) {
      if (index < this.items.length) {
        this.items = this.arrayMove([...this.items], index, index + 1)
      }
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
    arrayMove(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1
        while (k--) {
          arr.push(undefined)
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
      return arr // for testing
    }
  }
}
</script>

<style lang="scss" scoped></style>
