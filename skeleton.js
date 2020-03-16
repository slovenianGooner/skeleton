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
import FileInput from './components/Inputs/File.vue'
import PhotoInput from './components/Inputs/Photo.vue'
import TextInput from './components/Inputs/Text.vue'
import TextInputWithButton from './components/Inputs/TextWithButton.vue'
import SearchInput from './components/Inputs/Search.vue'
import SelectInput from './components/Inputs/Select.vue'
import SelectInputWithButton from './components/Inputs/SelectWithButton.vue'
import ToggleInput from './components/Inputs/Toggle.vue'
import ArrayableInput from './components/Inputs/Arrayable.vue'

import List from './components/List.vue'
import Modal from './components/Modals/Modal.vue'
import ConfirmBox from './components/Modals/ConfirmBox.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import CardPagination from './components/CardPagination.vue'
import Dropdown from './components/Dropdown.vue'
import CollapsibleSection from './components/Section.vue'
import FilterBlock from './components/FilterBlock.vue'

export default {
  directives: {
    onClickaway: onClickaway,
    updown: {
      inserted(el, binding, vnode) {
        el.addEventListener('click', () => {
          let space = window.innerHeight - el.getBoundingClientRect().bottom
          let height = Math.max(el.children[0].offsetHeight, el.children[2].offsetHeight)
          vnode.componentInstance.$data.dropUp = space < height
        })
      }
    }
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
    FileInput,
    PhotoInput,
    TextInputWithButton,
    SelectInputWithButton,
    // Other
    List,
    Modal,
    ConfirmBox,
    CardPagination,
    Dropdown,
    CollapsibleSection,
    LoadingSpinner,
    FilterBlock
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