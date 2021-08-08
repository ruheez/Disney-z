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
      <li class="navigation-bar_list_hamburger">
        <button
          type="button"
          @click="showHamburger()"
          class="navigation-bar_list_hamburger_button"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar last-bar"></div>
        </button>
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
      const magnifying = Array.from(images).filter((image) => {
        return image.alt === "Magnifying glass";
      })[0].parentElement.parentElement;
      magnifying.classList.add("images-margin-left");
      images[0].classList.add("images-margin-right");
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
    showHamburger() {
      const navigation = document.querySelector(".navigation-bar_list");
      const images = document.querySelectorAll(
        ".navigation-bar_list_item_link_img"
      );
      const buttons = document.querySelectorAll(
        ".navigation-bar_list_item_link_text"
      );
      const magnifying = document.querySelector(".images-margin-left");
      const hamburger = document.querySelector(".navigation-bar_list_hamburger");
      if (!navigation.classList.contains("hamburger-open")) {
        navigation.classList.add("hamburger-open");
        buttons.forEach((button) => {
          button.classList.add("hamburger-style");
        });
        images.forEach((image) => {
          image.classList.add("hamburger-style");
        });
        magnifying.classList.add("center-magnifying");
        hamburger.classList.add("hamburger-position");
      } else {
        navigation.classList.remove("hamburger-open");
        buttons.forEach((button) => {
          button.classList.remove("hamburger-style");
        });
        images.forEach((image) => {
          image.classList.remove("hamburger-style");
        });
        magnifying.classList.remove("center-magnifying");
        hamburger.classList.remove("hamburger-position");
      }
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
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-right: 15px;
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
  opacity: 0.7;
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
.navigation-bar_list_hamburger {
  display: none;
}
.navigation-bar_list_hamburger_button {
  padding: 0;
  border: 0;
  cursor: pointer;
}
.bar {
  width: 35px;
  height: 4px;
  background-color: #1c55ff;
  margin-bottom: 5px;
}
.bar:hover {
  opacity: .7;
}
.last-bar {
  margin: 0;
}
@media only screen and (max-width: 750px) {
  .navigation-bar_list_item_link_text {
    display: none;
  }
  .navigation-bar_list_hamburger {
    display: block;
  }
}
.hamburger-open {
  flex-direction: column;
  padding-bottom: 15px;
}
.hamburger-style {
  display: block;
  margin: 15px;
}
.center-magnifying {
  margin: 0;
}
.hamburger-position {
  margin-top: 15px;
}
</style>
