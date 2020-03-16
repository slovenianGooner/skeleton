<template>
  <div>
    <label
      v-if="label"
      class="block text-sm font-medium leading-5 text-gray-700"
      :for="id"
    >{{ label }}</label>
    <div class="mt-2 flex items-center">
      <span
        class="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center"
      >
        <img :src="preview" alt="Preview" v-if="preview" class="object-cover absolute h-full" />
        <i class="fa fa-image" v-else></i>
      </span>
      <span class="ml-5 rounded-md shadow-sm">
        <button
          type="button"
          @click.prevent="$refs.input.click()"
          class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
        >{{changeTitle}}</button>
        <slot name="buttons"></slot>
        <input type="file" ref="input" @change="file = $event.target.files[0]" class="hidden" />
      </span>
    </div>
    <p class="mt-2 text-sm text-red-600" v-if="errors.length">{{errors[0]}}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    defaultPreview: {
      default: null
    },
    changeTitle: {
      type: String,
      default: 'Change'
    },
    id: {
      type: String,
      default() {
        return `file-input-${this._uid}`
      }
    },
    value: {},
    label: String,
    errors: {
      type: Array,
      default: () => []
    },
    inputClass: {},
    groupClass: {}
  },
  data() {
    return {
      file: null,
      preview: this.defaultPreview
    }
  },
  watch: {
    file() {
      var reader = new FileReader()
      reader.readAsDataURL(this.file)
      reader.onload = () => {
        this.preview = reader.result
      }
      this.$emit('input', this.file)
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
    computedInputClass() {
      let inputClass =
        'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
      if (this.inputClass !== undefined) {
        inputClass = this.inputClass
      }

      if (this.errors.length) {
        inputClass +=
          ' border-red-300 text-red-900 placeholder-red-300 focus:border-red-300'
      }

      return inputClass
    }
  }
}
</script>

<style lang="scss" scoped>
</style>