import { directive as onClickaway } from 'vue-clickaway';

// Base
import Login from './components/Login.vue'
import Skeleton from './components/Skeleton.vue'
import NavigationItem from './components/NavigationItem.vue'
import PageHeader from './components/PageHeader.vue'

// Buttons
import LinkButton from './components/Buttons/Link.vue'
import FormButton from './components/Buttons/Form.vue'
import LoadingButton from './components/Buttons/Loading.vue'

// Inputs
import TextInput from './components/Inputs/Text.vue'
import SearchInput from './components/Inputs/Search.vue'
import SelectInput from './components/Inputs/Select.vue'
import ToggleInput from './components/Inputs/Toggle.vue'
import ArrayableInput from './components/Inputs/Arrayable.vue'

import List from './components/List.vue'
import Modal from './components/Modal.vue'
import CardPagination from './components/CardPagination.vue'
import Dropdown from './components/Dropdown.vue'
import CollapsibleSection from './components/Section.vue'

export default {
  directives: {
    onClickaway: onClickaway,
  },
  components: {
    // Base
    Login,
    Skeleton,
    NavigationItem,
    PageHeader,
    // Buttons
    LoadingButton,
    LinkButton,
    FormButton,
    // Inputs
    TextInput,
    SearchInput,
    SelectInput,
    ToggleInput,
    ArrayableInput,
    // Other
    List,
    Modal,
    CardPagination,
    Dropdown,
    CollapsibleSection
  },
  methods: {
    openModal($ref) {
      document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden");
      $ref.open = true;
    },
    closeModal($ref) {
      document.getElementsByTagName("body")[0].removeAttribute("style");
      $ref.open = false;
    }
  }
}