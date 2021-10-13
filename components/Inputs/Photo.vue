<template>
  <div>
    <label
      v-if="label"
      class="block text-sm font-medium leading-5 text-gray-700 dark:text-white"
      :class="{ 'text-red-500': errors.length }"
      :for="id"
      >{{ label }}</label
    >
    <div class="mt-2 flex items-center">
      <a
        :href="preview"
        target="_blank"
        class="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center"
      >
        <img
          :src="preview"
          alt="Preview"
          v-if="preview"
          class="object-cover absolute h-full"
        />
        <svg
          v-else
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </a>
      <span class="ml-5 rounded-md shadow-sm">
        <button
          type="button"
          @click.prevent="$refs.input.click()"
          class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 dark:text-white font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
        >
          {{ changeTitle }}
        </button>
        <slot name="buttons"></slot>
        <input
          type="file"
          ref="input"
          @change="file = $event.target.files[0]"
          class="hidden"
        />
      </span>
    </div>
    <p class="mt-2 text-sm text-red-600" v-if="errors.length">
      {{ errors[0] }}
    </p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    defaultPreview: {
      default: null,
    },
    changeTitle: {
      type: String,
      default: "Change",
    },
    id: {
      type: String,
      default() {
        return `file-input-${this._uid}`;
      },
    },
    value: {},
    label: String,
    errors: {
      type: Array,
      default: () => [],
    },
    inputClass: {},
    groupClass: {},
  },
  data() {
    return {
      file: null,
      preview: this.defaultPreview,
    };
  },
  watch: {
    file() {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.preview = reader.result;
      };
      this.$emit("input", this.file);
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    computedInputClass() {
      let inputClass =
        "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5";
      if (this.inputClass !== undefined) {
        inputClass = this.inputClass;
      }

      if (this.errors.length) {
        inputClass +=
          " border-red-300 text-red-900 placeholder-red-300 focus:border-red-300";
      }

      return inputClass;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
