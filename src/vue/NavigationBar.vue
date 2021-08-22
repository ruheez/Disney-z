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
      <li class="navigation-bar_list_item dropdown">
        <div class="navigation-bar_list_item_more-container">
          <span
            class="navigation-bar_list_item_more navigation-bar_list_item_link"
            >More
          </span>
          <div class="navigation-bar_list_item_more_triangle"></div>
        </div>
        <div class="dropdown-content">
          <ul class="navigation-bar_list_buttons">
            <li
              class="navigation-bar_list_item navigation-bar_list_item_button"
              v-for="button in buttons"
              :key="button.id + button.text"
            >
              <a class="navigation-bar_list_item_link" href="./index.html">
                {{ button.text }}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li
        class="
          navigation-bar_list_item navigation-bar_list-icons
          images-margin-left
        "
      >
        <a class="navigation-bar_list_item_link" @click="openDropdown">
          <img
            class="navigation-bar_list_item_link_img"
            :src="getImgUrl(icons[0].link)"
            alt="Magnifying glass"
          />
        </a>
        <div class="icons_dropdown-content">
          <form class="icons_dropdown-content_form" action="example.php">
            <input
              class="navigation-bar_list_item_link_input"
              type="text"
              id="sdata"
              name="sdata"
            />
            <input
              class="navigation-bar_list_item_link_submit"
              type="image"
              :src="getImgUrl(icons[0].link)"
            />
          </form>
        </div>
      </li>
      <li class="navigation-bar_list_item navigation-bar_list-icons">
        <a class="navigation-bar_list_item_link" @click="openDropdown">
          <img
            class="navigation-bar_list_item_link_img"
            :src="getImgUrl(icons[1].link)"
            alt="notifications"
          />
        </a>
        <div class="icons_dropdown-content">
          <div class="icons_dropdown-content_notifications">
            <div class="icons_dropdown-content_notifications_length">
              <span class="icons_dropdown-content_notifications_number">{{
                notifications.length
              }}</span>
            </div>
            <a
              v-for="notification in notifications"
              :key="notification.id + notification.text"
              class="navigation-bar_list_item_notification"
              href="./index.html"
            >
              {{ notification.text }}
            </a>
          </div>
        </div>
      </li>
      <li class="navigation-bar_list_item navigation-bar_list-icons">
        <a class="navigation-bar_list_item_link" @click="openDropdown">
          <img
            class="navigation-bar_list_item_link_img"
            :src="getImgUrl(icons[2].link)"
            alt="account"
          />
        </a>
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
                href="./index.html"
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
          text: "Sign in",
        },
        {
          id: 2,
          text: "Log in",
        },
        {
          id: 3,
          text: "Account",
        },
        {
          id: 4,
          text: "Customer Service",
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.png$/);
      return images("./" + pic);
    },
    openDropdown(event) {
      const parent = event.target.parentNode.parentNode;
      const dropdown = parent.childNodes[1];
      dropdown.classList.contains("show-dropdown")
        ? dropdown.classList.remove("show-dropdown")
        : dropdown.classList.add("show-dropdown");
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
  text-decoration: none;
  cursor: pointer;
}
.navigation-bar_list_item_link:hover {
  opacity: 0.7;
}
.icons_dropdown-content {
  display: none;
  flex-direction: column;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 175px;
  border: 2px solid #1c55ff;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.show-dropdown {
  display: flex;
}
.icons_dropdown-content_form {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.navigation-bar_list_item_link_input {
  width: 100%;
  height: 25px;
  border: 0;
  border-radius: 5px;
}
.navigation-bar_list_item_link_submit {
  width: 30px;
  height: 25px;
  padding: 2px;
  border: 0;
  cursor: pointer;
}
.icons_dropdown-content_notifications {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: auto;
  padding: 15px;
  word-break: break-word;
  white-space: break-spaces;
}
.navigation-bar_list_item_notification {
  color: black;
  padding: 5px 0;
  text-decoration: none;
}
.navigation-bar_list_item_notification:hover {
  color: #1c55ff;
}
.icons_dropdown-content_notifications_length {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: auto;
  border: 2px solid black;
  border-radius: 50%;
  background-color: #1c55ff;
  color: white;
  text-align: center;
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
.navigation-bar_list_item_more-container {
  display: none;
  position: relative;
}
.navigation-bar_list_item_more {
  font-weight: bold;
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
@media only screen and (max-width: 750px) {
  .dropdown {
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    border: 2px solid #1c55ff;
    border-radius: 5px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .navigation-bar_list_item_more-container {
    display: block;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .navigation-bar_list_buttons {
    flex-direction: column;
    padding: 5px;
    line-height: 40px;
  }
}
</style>
