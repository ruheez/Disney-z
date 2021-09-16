<template>
  <li class="navigation-bar_list_item images-margin-left">
    <div
      class="navigation-bar_list_item_link"
      @click="toggleDropdown"
      tabindex="0"
    >
      <img
        class="navigation-bar_list_item_link_img"
        :src="getImgUrl(magnifying.link)"
        alt="Magnifying glass"
      />
    </div>
    <div class="icons_dropdown-content">
      <div class="icons_dropdown-content_form">
        <input
          class="navigation-bar_list_item_link_input"
          type="text"
          placeholder="Titles, Genres..."
          @input="
            debounce(() => {
              store.state.keyWord = $event.srcElement.value;
            })
          "
        />
      </div>
    </div>
  </li>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "SearchComponent",
  data() {
    return {
      magnifying: {
        id: 1,
        text: "Magnifying glass",
        link: "magnifying.png",
      },
    };
  },
  setup() {
    const store = useStore();

    function createDebounce() {
      let timeout = null;
      return function (fnc) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fnc();
        }, 500);
      };
    }

    return {
      store,
      debounce: createDebounce(),
    };
  },
  methods: {
    getImgUrl(pic) {
      const images = require.context("../../images/", false, /\.png$/);
      return images("./" + pic);
    },
    toggleDropdown(event) {
      const dropdownTarget =
        event.currentTarget.parentNode.getElementsByClassName(
          "icons_dropdown-content"
        )[0];
      const openDropdowns = document.querySelector(".show-dropdown");
      dropdownTarget.classList.toggle("show-dropdown");
      if (openDropdowns) {
        openDropdowns.classList.remove("show-dropdown");
      }
    },
  },
};
</script>

<style>
.images-margin-left {
  margin-left: auto;
}
input.navigation-bar_list_item_link_input:focus {
  outline-width: 0;
}
</style>
