<template>
  <div class="navigation-bar">
    <ul class="navigation-bar_list">
      <li class="navigation-bar_list_item">
        <a class="navigation-bar_list_item_link">
          <img
            class="navigation-bar_list_item_link_img"
            :src="getImgUrl(logo.link)"
            :alt="logo.text"
          />
        </a>
      </li>
      <li class="navigation-bar_list_item">
        <span
          class="navigation-bar_list_item_more navigation-bar_list_item_link"
          :data-tooltip="toolTipMenu.template"
          >More</span
        >
        <div class="dropdown-content">
          <ul class="navigation-bar_list_buttons">
            <li
              class="navigation-bar_list_item navigation-bar_list_item_button"
              v-for="button in buttons"
              :key="button.id + button.text"
            >
              <a class="navigation-bar_list_item_link">
                {{ button.text }}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li
        class="navigation-bar_list_item"
        v-for="icon in icons"
        :key="icon.id + icon.text"
      >
        <a class="navigation-bar_list_item_link">
          <img
            class="navigation-bar_list_item_link_img"
            :src="getImgUrl(icon.link)"
            :alt="icon.text"
          />
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
      logo: {
        id: 1,
        text: "Logo",
        link: "logo.png",
      },
      buttons: [
        {
          id: 1,
          text: "Home",
        },
        {
          id: 2,
          text: "Watch again",
        },
        {
          id: 3,
          text: "Series",
        },
        {
          id: 4,
          text: "Movies",
        },
        {
          id: 5,
          text: "News",
        },
        {
          id: 6,
          text: "My list",
        },
      ],
      icons: [
        {
          id: 1,
          text: "Magnifying glass",
          link: "magnifying.png",
        },
        {
          id: 2,
          text: "Notifications",
          link: "bell.png",
        },
        {
          id: 3,
          text: "Account",
          link: "account.png",
        },
      ],
      toolTipMenu: {
        id: 2,
        template: `<ul class="navigation-bar_list_buttons">
        <li class="navigation-bar_list_item navigation-bar_list_item_button">
        <a class="navigation-bar_list_item_link">Home</a>
        </li>
        <li class="navigation-bar_list_item navigation-bar_list_item_button">
        <a class="navigation-bar_list_item_link">Watch again</a>
        </li>
        <li class="navigation-bar_list_item navigation-bar_list_item_button">
        <a class="navigation-bar_list_item_link">Series</a>
        </li>
        <li class="navigation-bar_list_item navigation-bar_list_item_button">
        <a class="navigation-bar_list_item_link">Movies</a>
        </li>
        <li class="navigation-bar_list_item navigation-bar_list_item_button">
        <a class="navigation-bar_list_item_link">News</a>
        </li>
        <li class="navigation-bar_list_item navigation-bar_list_item_button">
        <a class="navigation-bar_list_item_link">My list</a>
        </li>
        </ul>`,
      },
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
  white-space: nowrap;
}
.navigation-bar_list_item {
  list-style-type: none;
}
.navigation-bar_list_item_button {
  margin: 0 10px;
}
.navigation-bar_list_buttons {
  display: flex;
  flex-direction: row;
  font-weight: bold;
}
.navigation-bar_list_item_link {
  display: block;
  color: black;
  text-align: center;
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
.navigation-bar_list_item_more {
  display: none;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .dropdown-content {
    display: none;
  }
  .navigation-bar_list_item_more {
    display: block;
  }
  .navigation-bar_list_buttons {
    flex-direction: column;
    padding: 5px;
    line-height: 40px
  }
}
</style>
