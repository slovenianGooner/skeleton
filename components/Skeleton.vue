<template>
  <div
    class="h-screen flex overflow-hidden bg-gray-100 dark:bg-gray-700"
    @keydown.esc="sidebarOpen = false"
  >
    <!-- Off-canvas menu for mobile -->
    <div :class="[mobileNavigationBreakpoint]" v-if="$slots.navigation">
      <div
        @click="sidebarOpen = false"
        class="
          fixed
          inset-0
          z-30
          bg-gray-600
          opacity-0
          pointer-events-none
          transition-opacity
          ease-linear
          duration-300
        "
        :class="{
          'opacity-75 pointer-events-auto': sidebarOpen,
          'opacity-0 pointer-events-none': !sidebarOpen,
        }"
      ></div>
      <div
        class="
          fixed
          inset-y-0
          left-0
          flex flex-col
          z-40
          max-w-xs
          w-full
          transform
          ease-in-out
          duration-300
        "
        :class="[
          {
            'translate-x-0': sidebarOpen,
            '-translate-x-full': !sidebarOpen,
          },
          sidebarColor,
        ]"
      >
        <div class="absolute top-0 right-0">
          <button
            x-show="sidebarOpen"
            @click="sidebarOpen = false"
            class="
              flex
              items-center
              justify-center
              h-16
              w-16
              rounded-full
              focus:outline-none
            "
            :class="[textColor]"
          >
            <svg
              class="h-6 w-6"
              :class="[textColor]"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-shrink-0 flex items-center h-16 px-4 pr-16"
          :class="[headerColor]"
        >
          <div class="text-2xl text-white font-semibold">
            <slot name="logo" />
          </div>
        </div>
        <div class="flex-1 h-0 overflow-y-auto">
          <nav class="px-2 py-4">
            <slot name="navigation" />
          </nav>
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden" :class="[desktopNavigationBreakpoint]">
      <div class="flex flex-col w-64" v-if="$slots.navigation">
        <div
          class="flex items-center h-16 flex-shrink-0 px-4"
          :class="[headerColor]"
        >
          <div class="text-2xl font-semibold" :class="[textColor]">
            <slot name="logo" />
          </div>
        </div>
        <div class="h-0 flex-1 flex flex-col overflow-y-auto">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="flex-1 px-2 py-4" :class="[sidebarColor]">
            <slot name="navigation" />
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div
        class="relative z-10 flex-shrink-0 flex h-16 shadow"
        :class="[headerColor]"
      >
        <div class="flex flex-col w-64" v-if="!$slots.navigation">
          <div
            class="flex items-center h-16 flex-shrink-0 px-4"
            :class="[headerColor]"
          >
            <div class="text-2xl font-semibold" :class="[textColor]">
              <slot name="logo" />
            </div>
          </div>
        </div>
        <button
          v-if="$slots.navigation"
          @click.stop="sidebarOpen = true"
          :class="[textColor, mobileNavigationBreakpoint]"
          class="px-4 focus:outline-none focus:bg-gray-100 focus:text-gray-600"
        >
          <svg
            class="h-6 w-6 mr-1.5"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div class="flex-1 px-4 flex justify-end">
          <div
            class="flex items-center w-full justify-end"
            v-if="$slots.headerButtons"
          >
            <slot name="headerButtons"></slot>
          </div>
          <div class="flex items-center" v-if="showUserDropdown">
            <div v-on-clickaway="closeUserDropdown" class="ml-3 relative">
              <div>
                <slot
                  name="userDropdownButton"
                  :toggleUserDropdown="toggleUserDropdown"
                >
                  <button
                    @click="toggleUserDropdown"
                    class="max-w-xs flex items-center focus:outline-none"
                    :class="[textColor]"
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    <slot name="userDropdownTitle">User's name</slot>
                  </button>
                </slot>
              </div>
              <div
                v-if="userDropdownOpen"
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-48
                  rounded-md
                  shadow-lg
                "
              >
                <div
                  class="py-1 rounded-md bg-white dark:bg-gray-700 shadow-xs"
                >
                  <slot
                    name="userDropdownContent"
                    :toggleUserDropdown="toggleUserDropdown"
                  ></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main
        class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showUserDropdown: {
      type: Boolean,
      default: true,
    },
    headerColor: {
      type: String,
      default: "bg-gray-900",
    },
    textColor: {
      type: String,
      default: "text-white",
    },
    sidebarColor: {
      type: String,
      default: "bg-gray-800",
    },
    mobileNavigationBreakpoint: {
      type: String,
      default: "md:hidden",
    },
    desktopNavigationBreakpoint: {
      type: String,
      default: "md:flex md:flex-shrink-0",
    },
  },
  data() {
    return {
      sidebarOpen: false,
      userDropdownOpen: false,
    };
  },
  methods: {
    toggleUserDropdown() {
      this.userDropdownOpen = !this.userDropdownOpen;
    },
    closeUserDropdown() {
      this.userDropdownOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
