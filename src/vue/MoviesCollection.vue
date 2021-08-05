<template>
  <div class="movies">
    <movie
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :img="getImgUrl(movie.img)"
      :cast="movie.cast"
      :genre="movie.genre"
      :duration="movie.duration"
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
          cast: "Tom Holland, Michael Keaton etc",
          genre: "Action",
          duration: '1h35min'
        },
        {
          id: 2,
          title: "Hulk",
          img: "hulk.jpeg",
          cast: "Eric Bana, Jennifer Connely etc",
          genre: "Action",
          duration: '2h15min'
        },
        {
          id: 3,
          title: "Luca",
          img: "luca.jpeg",
          cast: "Giacomo Gianniotti, Jacob Tremblay etc",
          genre: "Animation",
          duration: '2h15min'
        },
        {
          id: 4,
          title: "The Tomorrow War",
          img: "tomorrow-war.jpeg",
          cast: "Chris Pratt, Yvonne Strahovski etc",
          genre: "War",
          duration: '1h55min'
        },
        {
          id: 5,
          title: "Men in black",
          img: "mib.jpeg",
          cast: "Tommy Lee Jones, Will Smith etc",
          genre: "Action",
          duration: '1h35min'
        },
        {
          id: 6,
          title: "Forrest Gump",
          img: "forrest-gump.jpeg",
          cast: "Tom Hanks, Robin Wright",
          genre: "Comedy",
          duration: '1h45min'
        },
        {
          id: 7,
          title: "3%",
          img: "3perc.jpeg",
          cast: "Bianca Comparato, Vaneza Oliveira etc",
          genre: "Action",
          duration: '1h30min'
        },
        {
          id: 9,
          title: "The Good Place",
          img: "good-place.jpeg",
          cast: "Kristen Bell, Ted Danson etc",
          genre: "Comedy",
          duration: '1h30min'
        },
        {
          id: 10,
          title: "The Big Bang Theory",
          img: "big-bang.jpeg",
          cast: "Johnny Galecki, Jim Parsons etc",
          genre: "Comedy",
          duration: '1h40min'
        },
        {
          id: 11,
          title: "Cruella",
          img: "cruella.jpeg",
          cast: "Emma Stone, Emma Thompsons etc",
          genre: "Comedy",
          duration: '1h50min'
        },
        {
          id: 12,
          title: "Avatar",
          img: "avatar.jpeg",
          cast: "Zoe Saldana, Sam Worthington etc",
          genre: "Action",
          duration: '2h50min'
        },
        {
          id: 13,
          title: "New Amsterdam",
          img: "new-amsterdam.jpeg",
          cast: "Ryan Eggold, Freema Agyeman etc",
          genre: "Comedy",
          duration: '1h50min'
        },
        {
          id: 14,
          title: "Titanic",
          img: "titanic.jpeg",
          cast: "Kate Winslet, Leonardo Di Caprio etc",
          genre: "Romantic",
          duration: '2h15min'
        },
        {
          id: 15,
          title: "Catch me if you can",
          img: "catch-me.jpeg",
          cast: "Tom Hanks, Leonardo Di Caprio etc",
          genre: "Comedy",
          duration: '1h15min'
        },
        {
          id: 16,
          title: "The revenant",
          img: "revenant.jpeg",
          cast: "Leonardo Di Caprio, Tom Hardy etc",
          genre: "Action",
          duration: '2h15min'
        },
        {
          id: 17,
          title: "Mortal Kombat",
          img: "mortal-kombat.jpeg",
          cast: "Jessica McNamee, Lewis Tan etc",
          genre: "Action",
          duration: '2h35min'
        },
        {
          id: 18,
          title: "Meet the parents",
          img: "meet-the-parents.jpeg",
          cast: "Ben Stillwe, Teri Polo etc",
          genre: "Comedy",
          duration: '1h45min'
        },
        {
          id: 19,
          title: "Paw patrol",
          img: "paw-patrol.jpeg",
          cast: "Kallan Holley, Ron Pardo etc",
          genre: "Animation",
          duration: '1h25min'
        },
        {
          id: 20,
          title: "15:17 Paris",
          img: "1517-paris.jpeg",
          cast: "Spencer Stone, Anthony Sandler etc",
          genre: "Action",
          duration: '1h50min'
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
