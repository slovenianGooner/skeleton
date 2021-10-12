<template>
  <div>
    <label
      v-if="label"
      class="block text-sm font-medium leading-5 text-gray-700 dark:text-white"
      :class="{ 'text-red-500 dark:text-red-300': errors.length }"
      :for="id"
      >{{ label }}</label
    >
    <div
      class="relative rounded-md shadow-sm"
      :class="[groupClass !== null ? groupClass : 'mt-1']"
    >
      <slot
        name="input"
        :id="id"
        :computedInputClass="computedInputClass"
        :value="value"
        :emitInput="emitInput"
      >
        <input
          :id="id"
          ref="input"
          v-bind="$attrs"
          :class="[computedInputClass()]"
          :type="type"
          :value="value"
          @input="emitInput"
        />
      </slot>
      <div
        class="
          absolute
          inset-y-0
          right-0
          pr-3
          flex
          items-center
          pointer-events-none
        "
        v-if="errors.length"
      >
        <svg
          class="h-5 w-5 text-red-500 dark:text-red-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p class="mt-2 text-sm text-red-600 dark:text-red-300" v-if="errors.length">
      {{ errors[0] }}
    </p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${this._uid}`;
      },
    },
    type: {
      type: String,
      default: "text",
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
  methods: {
    emitInput($event) {
      this.$emit("input", $event.target.value);
    },
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    },
    computedInputClass() {
      let inputClass =
        "appearance-none block w-full px-3 py-2 border border-gray-300 dark:text-white dark:bg-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5";
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
