<template>
  <div class="p-8 pb-0">
    <div v-if="breadcrumbs.length">
      <nav class="sm:hidden">
        <!-- always go to last breadcrumb on mobile -->
        <inertia-link
          :href="breadcrumbs[breadcrumbs.length - 1].href"
          class="
            flex
            items-center
            text-sm
            leading-5
            font-medium
            text-gray-500
            hover:text-gray-700
            dark:text-white
            focus:outline-none
            focus:underline
            transition
            duration-150
            ease-in-out
          "
        >
          <svg
            class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            v-if="breadcrumbs.length > 1"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          {{ breadcrumbs.length > 1 ? __("Back") : breadcrumbs[0].title }}
        </inertia-link>
      </nav>
      <nav class="hidden sm:flex items-center text-sm leading-5 font-medium">
        <template v-for="(breadcrumb, index) in breadcrumbs">
          <svg
            v-if="index > 0"
            :key="index + 'icon'"
            class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400 dark:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <inertia-link
            :key="index + 'link'"
            :href="breadcrumb.href"
            @click="$store.commit('startLoading')"
            class="
              truncate
              text-gray-500
              hover:text-gray-700
              dark:text-white
              focus:outline-none
              focus:underline
              transition
              duration-150
              ease-in-out
            "
          >{{ breadcrumb.title }}
          </inertia-link
          >
        </template>
      </nav>
    </div>
    <div
      class="md:flex md:items-center md:justify-between"
      :class="{ 'mt-2': breadcrumbs.length }"
    >
      <div class="flex-1 min-w-0">
        <h2
          class="
            text-2xl
            font-bold
            leading-7
            text-gray-900
            dark:text-white
            sm:text-3xl
            sm:leading-9
            sm:truncate
          "
        >
          {{ title }}
        </h2>
      </div>
      <div class="mt-4 flex md:mt-0 md:ml-4" v-if="$slots.buttons">
        <slot name="buttons"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    breadcrumbs: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
