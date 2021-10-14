<template>
  <modal ref="modal" @close="close" :modal-open="open">
    <template slot="body">
      <h1
        class="text-lg leading-6 font-medium text-gray-900 mb-4 dark:text-white"
      >
        {{ title }}
      </h1>
      <div class="alert alert-danger mb-4 w-full" role="alert" v-if="message">
        <span class="block sm:inline">{{ message }}</span>
      </div>

      <slot :data="data" :content="content">
        <div v-html="content"></div>
      </slot>
    </template>
    <template slot="footer">
      <slot name="footer" :data="data">
        <span class="flex w-full rounded-md shadow-sm sm:col-start-2">
          <slot name="button" :submit="submit" :loading="loading">
            <loading-button
              @click="submit"
              :loading="loading"
              type="button"
              class="
                inline-flex
                justify-center
                items-center
                w-full
                rounded-md
                border border-transparent
                px-4
                py-2
                bg-red-600
                text-base
                leading-6
                font-medium
                text-white
                shadow-sm
                hover:bg-red-500
                focus:outline-none
                focus:border-red-700
                focus:shadow-outline-red
                transition
                ease-in-out
                duration-150
                sm:text-sm
                sm:leading-5
              "
            >
              <svg
                class="w-6 h-6 mr-1.5"
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
              {{ btnText }}
            </loading-button>
          </slot>
        </span>
        <span
          class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1"
        >
          <button
            @click.prevent="close"
            type="button"
            class="
              inline-flex
              justify-center
              w-full
              rounded-md
              border border-gray-300
              px-4
              py-2
              bg-white
              text-base
              leading-6
              font-medium
              text-gray-700
              shadow-sm
              hover:text-gray-500
              dark:bg-gray-600
              dark:text-white
              focus:outline-none
              focus:border-blue-300
              focus:shadow-outline
              transition
              ease-in-out
              duration-150
              sm:text-sm
              sm:leading-5
            "
          >
            {{ cancelText }}
          </button>
        </span>
      </slot>
    </template>
  </modal>
</template>

<script>
export default {
  props: {
    title: {},
    btnClass: {},
    btnText: {},
    cancelText: {
      type: String,
      default: "Cancel",
    },
  },
  data() {
    return {
      loading: false,
      open: false,
      message: null,
      content: null,
      data: {},
    };
  },
  methods: {
    close() {
      this.closeModal(this);
      this.data = {};
      this.content = null;
    },
    submit() {
      document.getElementsByTagName("body")[0].removeAttribute("style");
      this.$emit("confirm", this.data);
      this.data = {};
      this.content = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
