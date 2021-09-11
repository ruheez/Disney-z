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
          id="sdata"
          name="sdata"
          placeholder="Titles, Genres..."
          v-model.trim="keyWord"
          @keyup.enter="navigateFilteredMovies"
        />
        <input
          class="navigation-bar_list_item_link_submit"
          type="image"
          :src="getImgUrl(boxMagnifying.link)"
          @click="navigateFilteredMovies"
        />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      magnifying: {
        id: 1,
        text: "Magnifying glass",
        link: "magnifying.png",
      },
      boxMagnifying: {
        id: 2,
        text: "White magnifying glass",
        link: "white-magnifying.png",
      },
      keyWord: "",
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
    navigateFilteredMovies() {
      window.open("./index.html?key=" + encodeURI(this.keyWord));
    },
  },
};
</script>

<style>
.images-margin-left {
  margin-left: auto;
}
</style>
