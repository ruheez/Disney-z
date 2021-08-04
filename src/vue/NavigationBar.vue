<template>
  <div class="navigation-bar">
    <ul class="navigation-bar_list">
      <li
        class="navigation-bar_list_item"
        v-for="button in buttons"
        :key="button.id"
      >
        <a class="navigation-bar_list_item_link">
          <img
            class="navigation-bar_list_item_link_img"
            v-if="itemIsImg(button.link)"
            :src="getImgUrl(button.link)"
            :alt="button.text"
          />
          <span class="navigation-bar_list_item_link_text" v-else>{{
            button.text
          }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      buttons: [
        {
          id: 1,
          text: "Logo",
          link: "logo.png",
        },
        {
          id: 2,
          text: "Home",
        },
        {
          id: 3,
          text: "Watch again",
        },
        {
          id: 4,
          text: "Series",
        },
        {
          id: 5,
          text: "Movies",
        },
        {
          id: 6,
          text: "News",
        },
        {
          id: 7,
          text: "My list",
        },
        {
          id: 8,
          text: "Magnifying glass",
          link: "magnifying.png",
        },
        {
          id: 9,
          text: "Notifications",
          link: "bell.png",
        },
        {
          id: 10,
          text: "Account",
          link: "account.png",
        },
      ],
    };
  },
  methods: {
    assignClasses() {
      var images = document.getElementsByTagName("img");
      const magnifying = Array.from(images).filter(image => {
        return image.alt === 'Magnifying glass';
      })[0].parentElement.parentElement;
      magnifying.classList.add('images-margin-left');
      images[0].classList.add('images-margin-right');
    },
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.png|ico$/);
      return images("./" + pic);
    },
    itemIsImg(button) {
      if (button) {
        return true;
      }
      return false;
    },
  },
  mounted() {
      this.assignClasses();
  },
};
</script>

<style>
.navigation-bar {
  background-color: white;
}
.navigation-bar_list {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
}
.navigation-bar_list_item {
  float: left;
}
.navigation-bar_list_item_link {
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
.navigation-bar_list_item_link:hover {
  opacity: .7;
}
.navigation-bar_list_item_link_img {
  width: 25px;
  height: auto;
  margin: 14px 16px;
}
.navigation-bar_list_item_link_text {
  margin: 0 15px;
}
.images-margin-left {
  margin-left: auto;
}
.images-margin-right {
  margin-right: 25px;
}
</style>
