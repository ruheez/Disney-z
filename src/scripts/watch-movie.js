import "../style/style.css";

import mount from "./mount";

import WatchMovie from "../vue/WatchMovie.vue";

import { createApp } from "vue";

document.body.appendChild(mount());

createApp(WatchMovie).mount(".app-root");
