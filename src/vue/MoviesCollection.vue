<template>
  <div class="movies">
    <movie
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :img="getImgUrl(movie.img)"
    />
  </div>
</template>

<script>
import Movie from "./Movie.vue";

export default {
  name: "Movies",
  components: {
    Movie,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "Spiderman",
          img: "spiderman.jpeg",
        },
        {
          id: 2,
          title: "Hulk",
          img: "hulk.jpeg",
        },
        {
          id: 3,
          title: "Luca",
          img: "luca.jpeg",
        },
        {
          id: 4,
          title: "The Tomorrow War",
          img: "tomorrow-war.jpeg",
        },
        {
          id: 5,
          title: "Men in black",
          img: "mib.jpeg",
        },
        {
          id: 6,
          title: "Forrest Gump",
          img: "forrest-gump.jpeg",
        },
        {
          id: 7,
          title: "3%",
          img: "3perc.jpeg",
        },
        {
          id: 9,
          title: "The Good Place",
          img: "good-place.jpeg",
        },
        {
          id: 10,
          title: "The Big Bang Theory",
          img: "big-bang.jpeg",
        },
        {
          id: 11,
          title: "Cruella",
          img: "cruella.jpeg",
        },
        {
          id: 12,
          title: "Avatar",
          img: "avatar.jpeg",
        },
        {
          id: 13,
          title: "New Amsterdam",
          img: "new-amsterdam.jpeg",
        },
        {
          id: 14,
          title: "Titanic",
          img: "titanic.jpeg",
        },
        {
          id: 15,
          title: "Catch me if you can",
          img: "catch-me.jpeg",
        },
        {
          id: 16,
          title: "The revenant",
          img: "revenant.jpeg",
        },
        {
          id: 17,
          title: "Mortal Kombat",
          img: "mortal-kombat.jpeg",
        },
        {
          id: 18,
          title: "Meet the parents",
          img: "meet-the-parents.jpeg",
        },
        {
          id: 19,
          title: "Paw patrol",
          img: "paw-patrol.jpeg",
        },
        {
          id: 20,
          title: "15:17 Paris",
          img: "1517-paris.jpeg",
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.jpeg$/);
      return images("./" + pic);
    },
  },
};
</script>

<style>
.movies {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: absolute;
  margin: -50px 25px 25px 25px;
}
</style>
