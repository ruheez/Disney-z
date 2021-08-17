import "../style/style.css";

import mount from "./mount";

import MoviePage from "../vue/MoviePage.vue";

import { createApp } from 'vue'

document.body.appendChild(mount());

createApp(MoviePage).mount('.app-root')