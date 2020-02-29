import { directive as onClickaway } from 'vue-clickaway';

import Skeleton from './components/Skeleton.vue'

export default {
  directives: {
    onClickaway: onClickaway,
  },
  components: {
    Skeleton
  }
}