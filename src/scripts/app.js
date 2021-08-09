import "../style/style.css";

import mount from "./mount";
import tooltip from "./tooltip.js"

import App from "../vue/App.vue";

import { createApp } from 'vue'

document.body.appendChild(mount());

createApp(App).mount('.app-root')