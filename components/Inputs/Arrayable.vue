<template>
  <div>
    <label
      v-if="label"
      class="mb-2 block text-sm font-medium leading-5 text-gray-700"
      >{{ label }}</label
    >

    <div
      class="-mx-2"
      :class="{
        'flex flex-wrap': !simple,
      }"
    >
      <div
        class="px-2"
        :class="[blockWidth]"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="mb-2" :class="{ 'border rounded-lg': !simple }">
          <div class="flex" v-if="header">
            <div class="border-r p-2">
              <button
                @click.prevent="toggleCollapse(index)"
                class="flex items-center"
              >
                <svg
                  class="w-6 h-6"
                  v-if="item.collapsed"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <svg
                  v-if="!item.collapsed"
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
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="p-2">#{{ index + 1 }}</div>
          </div>
          <div
            v-if="!item.collapsed"
            :class="{
              'border-t': header,
              'items-center': !header,
              flex: !simple,
            }"
          >
            <div class="p-2 flex flex-col space-y-4" v-if="!simple">
              <button @click.prevent="moveUp(index)" v-if="index > 0">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
              </button>
              <div v-else>&nbsp;</div>
              <button
                @click.prevent="moveDown(index)"
                v-if="index < items.length"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </button>
              <div v-else>&nbsp;</div>
              <button @click.prevent="removeItem(index)">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="w-full flex-1"
              :class="{
                'border-l p-4': !simple,
                'flex space-x-2': simple,
              }"
            >
              <slot
                :newItem="item"
                :data="additionalData"
                :index="index"
              ></slot>
              <button @click.prevent="removeItem(index)" v-if="simple">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
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
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
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
import uniqid from "uniqid";

export default {
  props: {
    blockWidth: {
      type: String,
      default: "w-full",
    },
    additionalData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    placeholder: {
      required: true,
      type: Object,
    },
    addTitle: {
      type: String,
      default: "Add new",
    },
    label: String,
    value: {
      type: Array,
      default: () => {
        return [];
      },
    },
    startCollapsed: {
      type: Boolean,
      default: true,
    },
    singleValue: {
      type: Boolean,
      default: false,
    },
    header: {
      type: Boolean,
      default: true,
    },
    assign: {
      type: Boolean,
      default: false,
    },
    simple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapsed: this.startCollapsed,
      items: [],
    };
  },
  watch: {
    items: {
      deep: true,
      handler() {
        if (this.singleValue) {
          this.$emit(
            "input",
            this.items.map((item) => {
              return item.value;
            })
          );
        } else {
          this.$emit("input", this.items);
        }
      },
    },
  },
  created() {
    if (this.singleValue) {
      this.items = this.value.map((item) => {
        let newItem = { value: item, collapsed: this.startCollapsed };
        return newItem;
      });
    } else {
      this.items = this.value.map((item) => {
        if (this.assign) {
          Object.keys(this.placeholder).forEach((key, value) => {
            if (item[key] === undefined) {
              item[key] = this.placeholder[key];
            }
          });

          if (item.uid === undefined) {
            item.uid = uniqid();
          }
        }
        item.collapsed = this.startCollapsed;
        return item;
      });
    }
  },
  methods: {
    toggleCollapse(index) {
      let items = [...this.items];
      items[index].collapsed = !items[index].collapsed;
      this.items = items;
    },
    addItem() {
      let item = { ...this.placeholder, uid: uniqid() };
      this.items.push(item);
    },
    moveUp(index) {
      if (index > 0) {
        this.items = this.arrayMove([...this.items], index, index - 1);
      }
    },
    moveDown(index) {
      if (index < this.items.length) {
        this.items = this.arrayMove([...this.items], index, index + 1);
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    arrayMove(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr; // for testing
    },
  },
};
</script>

<style lang="scss" scoped></style>
