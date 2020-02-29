import { mixin as clickaway } from "vue-clickaway"

import Skeleton from './components/Skeleton.vue'

export default {
  mixins: [clickaway],
  components: {
    Skeleton
  }
}