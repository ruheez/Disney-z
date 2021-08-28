<template>
  <div class="navigation-bar">
    <ul class="navigation-bar_list">
      <li class="navigation-bar_list_item">
        <a class="navigation-bar_list_item_link" href="./index.html">
          <img
            class="navigation-bar_list_item_link_img"
            :src="getImgUrl(logo.link)"
            :alt="logo.text"
          />
        </a>
      </li>
      <li class="navigation-bar_list_item">
        <div
          class="
            navigation-bar_list_item_more navigation-bar_list_item_link
            hide-on-big-screen
          "
          @click="toggleDropdown"
          tabindex="0"
        >
          <span>More</span>
          <div
            class="navigation-bar_list_item_more_triangle hide-on-big-screen"
          ></div>
        </div>
        <div class="icons_dropdown-content icons_dropdown-content_menu">
          <ul class="navigation-bar_list_buttons">
            <li
              class="navigation-bar_list_item navigation-bar_list_item_button"
              v-for="button in buttons"
              :key="button.id + button.text"
            >
              <a
                class="
                  navigation-bar_list_item_link
                  navigation-bar_list_item_link_menu
                "
                href="./index.html"
              >
                {{ button.text }}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation-bar_list_item images-margin-left">
        <div
          class="navigation-bar_list_item_link"
          @click="toggleDropdown"
          tabindex="0"
        >
          <img
            class="navigation-bar_list_item_link_img"
            :src="getImgUrl(icons[0].link)"
            alt="Magnifying glass"
          />
        </div>
        <div class="icons_dropdown-content">
          <form class="icons_dropdown-content_form" action="example.php">
            <input
              class="navigation-bar_list_item_link_input"
              type="text"
              id="sdata"
              name="sdata"
              placeholder="Titles, Actors, Genres..."
            />
            <input
              class="navigation-bar_list_item_link_submit"
              type="image"
              :src="getImgUrl(icons[3].link)"
            />
          </form>
        </div>
      </li>
      <li class="navigation-bar_list_item">
        <div
          class="navigation-bar_list_item_link"
          @click="toggleDropdown"
          tabindex="0"
        >
          <img
            class="navigation-bar_list_item_link_img"
            :src="getImgUrl(icons[1].link)"
            alt="notifications"
          />
          <span class="icons_dropdown-content_notifications_length">
            <span class="icons_dropdown-content_notifications_number">{{
              notifications.length
            }}</span>
          </span>
        </div>
        <div
          class="icons_dropdown-content icons_dropdown-content-notifications"
        >
          <div class="icons_dropdown-content_notifications">
            <div
              class="
                icons_dropdown-content_notifications_notification-container
              "
              v-for="notification in notifications"
              :key="notification.id + notification.text"
            >
              <a
                class="navigation-bar_list_item_notification"
                href="./index.html"
              >
                {{ notification.text }}
              </a>
              <div class="icons_dropdown-content_notifications_close-button">
                <div
                  class="icons_dropdown-content_notifications_cross"
                  @click="deleteNotification"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="navigation-bar_list_item">
        <div
          class="navigation-bar_list_item_link"
          @click="toggleDropdown"
          tabindex="0"
        >
          <img
            class="navigation-bar_list_item_link_img"
            :src="getImgUrl(icons[2].link)"
            alt="account"
          />
        </div>
        <div class="icons_dropdown-content">
          <ul class="icons_dropdown-content_account">
            <li
              class="icons_dropdown-content_account_li"
              v-for="link in account"
              :key="link.id + link.text"
            >
              <a
                class="
                  icons_dropdown-content_account_li_link
                  navigation-bar_list_item_notification
                "
                :href="link.path"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </div>
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
        {
          id: 4,
          text: "White magnifying glass",
          link: "white-magnifying.png",
        },
      ],
      notifications: [
        {
          id: 1,
          text: "Welcome to streaming!!!",
        },
        {
          id: 2,
          text: "Suicide Squad is suggested for you",
        },
        {
          id: 3,
          text: "La casa del papel will be available on 23rd December",
        },
      ],
      account: [
        {
          id: 1,
          text: "Sign up",
          path: "./sign-up.html",
        },
        {
          id: 2,
          text: "Log in",
          path: "./index.html",
        },
        {
          id: 3,
          text: "Account",
          path: "./index.html",
        },
        {
          id: 4,
          text: "Customer Service",
          path: "./index.html",
        },
      ],
    };
  },
  mounted() {
    this.dropdownBlur();
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.png$/);
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
    dropdownBlur() {
      document.addEventListener("click", this.eventDelegation);
    },
    eventDelegation(event) {
      const target = event.target.closest("div");
      const targetClasses = Array.from(target.classList).join("");
      if (
        targetClasses.includes("icons_dropdown-content") ||
        targetClasses.includes("navigation-bar_list_item_link")
      ) {
        return;
      }
      this.closeDropdowns();
    },
    closeDropdowns() {
      const dropdowns = document.querySelectorAll(".icons_dropdown-content");
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("show-dropdown");
      });
    },
    deleteNotification(event) {
      const notificationText = event.target.parentNode.parentNode.textContent;
      this.notifications = this.notifications.filter((notification) => {
        return notification.text !== notificationText;
      });
      const notificationLength = document.querySelector(
        ".icons_dropdown-content_notifications_length"
      );
      const dropdown = document.querySelector(
        ".icons_dropdown-content-notifications"
      );
      if (this.notifications.length <= 0) {
        dropdown.classList.add("hide-notifications");
        notificationLength.classList.add("hide-notifications");
      }
    },
  },
};
</script>

<style>
.navigation-bar {
  background-color: white;
  position: relative;
}
.navigation-bar_list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  font-size: 16px;
  white-space: nowrap;
}
.navigation-bar_list_item {
  list-style-type: none;
}
.navigation-bar_list_item_button {
  color: white;
  margin: 0 10px;
}
.navigation-bar_list_buttons {
  display: flex;
  flex-direction: row;
  font-weight: bold;
}
.navigation-bar_list_item_link {
  display: block;
  position: relative;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
.navigation-bar_list_item_link_menu {
  color: black;
}
.navigation-bar_list_item_link:hover {
  opacity: 0.7;
}
.icons_dropdown-content {
  display: none;
  flex-direction: column;
  position: absolute;
  max-width: 250px;
  margin-top: 25px;
  right: 25px;
  border: 1px solid white;
  background-color: black;
  opacity: 0.8;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.icons_dropdown-content_menu {
  display: flex;
  position: initial;
  margin: 15px 14px;
  max-width: initial;
  background-color: transparent;
  color: black;
  box-shadow: none;
}
.icons_dropdown-content_form {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  padding: 15px;
}
.navigation-bar_list_item_link_input {
  width: 100%;
  height: 25px;
  border: 0;
  border-radius: 5px;
  background-color: black;
  color: white;
}
.navigation-bar_list_item_link_submit {
  width: 20px;
  height: 30px;
  padding: 2px;
  border: 0;
  cursor: pointer;
}
.icons_dropdown-content_notifications {
  display: flex;
  flex-direction: column;
  position: relative;
  word-break: break-word;
  white-space: break-spaces;
}
.navigation-bar_list_item_notification {
  color: white;
  padding: 5px 5px 0 0;
  text-decoration: none;
}
.navigation-bar_list_item_notification:hover {
  text-decoration: underline;
}
.icons_dropdown-content_notifications_length {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 30px;
  width: 18px;
  height: 18px;
  margin-left: auto;
  border-radius: 50%;
  background-color: red;
  font-size: 12px;
  color: white;
  text-align: center;
  cursor: pointer;
}
.icons_dropdown-content_notifications_length:hover {
  opacity: 0.7;
}
.icons_dropdown-content_notifications_notification-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin: 0;
}
.icons_dropdown-content_notifications_notification-container:hover {
  background-color: #1c55ff;
}
.icons_dropdown-content_notifications_close-button {
  margin: 5px;
  margin-left: auto;
  cursor: pointer;
}
.icons_dropdown-content_notifications_close-button:hover {
  opacity: 0.7;
}
.icons_dropdown-content_notifications_cross::before {
  content: "x";
  color: white;
  font-weight: 300;
  font-family: Arial, sans-serif;
}
.hide-notifications {
  display: none;
}
.icons_dropdown-content_account {
  padding: 15px;
}
.icons_dropdown-content_account_li {
  list-style-type: none;
  padding: 5px 0;
}
.icons_dropdown-content_account_li_link {
  padding: 0;
}
.icons_dropdown-content_account_li_link:hover {
  color: #1c55ff;
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
.navigation-bar_list_item_more {
  font-weight: bold;
  color: black;
  margin: 20px 0;
}
.navigation-bar_list_item_more_triangle {
  content: " ";
  position: absolute;
  left: 19px;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #1c55ff transparent transparent transparent;
}
.hide-on-big-screen {
  display: none;
}
@media only screen and (max-width: 750px) {
  .hide-on-big-screen {
    display: block;
  }

  .icons_dropdown-content_menu {
    display: none;
    position: absolute;
    margin: 25px 14px 15px 14px;
    background-color: black;
    left: 5px;
    max-width: 150px;
  }

  .navigation-bar_list_item_link_menu {
    color: white;
  }

  .navigation-bar_list_buttons {
    flex-direction: column;
    padding: 5px;
    line-height: 40px;
  }
}
.show-dropdown {
  display: flex;
}
</style>
