import { directive as onClickaway } from 'vue-clickaway';

import Skeleton from './components/Skeleton.vue'
import NavigationItem from './components/NavigationItem.vue'
import PageHeader from './components/PageHeader.vue'
import NavigationLink from './components/NavigationLink.vue'
import FormButton from './components/FormButton.vue'
import List from './components/List.vue'

export default {
  directives: {
    onClickaway: onClickaway,
  },
  components: {
    Skeleton,
    NavigationItem,
    PageHeader,
    NavigationLink,
    FormButton,
    List
  }
}