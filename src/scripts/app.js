import "../style/style.css";

import mount from "./mount";

import App from "../vue/App.vue";

import store from "../store/index.js";

import { createApp } from "vue";

document.body.appendChild(mount());

createApp(App).use(store).mount(".app-root");
