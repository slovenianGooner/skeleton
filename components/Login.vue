<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div :class="[loginBoxClasses]">
      <div>
        <slot name="header">
          <h1
            class="text-center text-2xl leading-9 font-extrabold text-gray-700"
            :class="[titleColors]"
          >{{title}}</h1>
          <h2
            class="mt-1 text-center text-3xl leading-9 font-extrabold text-gray-900"
            :class="[subtitleColors]"
          >{{subtitle}}</h2>
        </slot>
      </div>
      <form class="mt-8" action="#" method="POST" @submit.prevent="$emit('submit', form)">
        <slot name="form">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm">
            <slot name="usernameField">
              <text-input
                v-model="form.username"
                :errors="$page.errors.username"
                placeholder="Username"
                input-class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                type="email"
                group-class="mt-0"
                autofocus
                autocapitalize="off"
              />
            </slot>
            <div class="-mt-px">
              <text-input
                v-model="form.password"
                placeholder="Password"
                input-class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                group-class="mt-0"
                type="password"
                autofocus
                autocapitalize="off"
              />
            </div>
          </div>

          <slot name="errors">
            <div
              v-if="Object.keys($page.errors).length"
              class="mt-2 text-red-600 text-sm"
            >{{$page.errors[Object.keys($page.errors)[0]][0]}}</div>
          </slot>

          <div class="mt-2 flex items-center justify-between" v-if="form.remember_me !== undefined">
            <div class="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                class="form-checkbox h-4 w-4 transition duration-150 ease-in-out"
                :class="['text-' + colorTheme + '-600']"
              />
              <label
                for="remember_me"
                class="ml-2 block text-sm leading-5 text-gray-900"
              >{{rememberMeTitle}}</label>
            </div>
          </div>
        </slot>

        <slot name="signInButton">
          <div class="mt-6">
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
              :class="['bg-' + colorTheme + '-600', 'hover:bg-' + colorTheme + '-500', 'focus:border-' + colorTheme + '-700', 'active:bg-' + colorTheme + '-700']"
            >
              <span class="absolute left-0 inset-y pl-3">
                <svg
                  class="h-5 w-5 transition ease-in-out duration-150"
                  :class="['text-' + colorTheme + '-500', 'group-hover:text-' + colorTheme + '-400']"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              {{signInButtonTitle}}
            </button>
          </div>
        </slot>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formProps: {},
    loginBoxClasses: {
      type: String,
      default: 'max-w-md w-full'
    },
    colorTheme: {
      type: String,
      default: 'indigo'
    },
    title: {},
    titleColors: {},
    subtitle: {
      type: String,
      default: 'Sign in to your account'
    },
    subtitleColors: {},
    rememberMeTitle: {
      type: String,
      default: 'Remember me'
    },
    signInButtonTitle: {
      type: String,
      default: 'Sign in'
    }
  },
  data() {
    return {
      form: {}
    }
  },
  created() {
    this.form = this.formProps
  }
}
</script>

<style lang="scss" scoped>
</style>