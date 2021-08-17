<template>
  <div class="movies">
    <div class="movies_list" v-for="sort in movies" :key="sort.id">
      <h2 class="movies_list_title">{{ sort.name }}</h2>
      <div class="movies_list_container">
        <movie
          v-for="movie in sort.list"
          :key="movie.id"
          :img="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          :title="movie.title"
          :overview="movie.overview"
          :average="movie.vote_average"
          @openMoviePage="navigateMovie(movie.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie.vue";
import "regenerator-runtime/runtime";

export default {
  name: "Movies",
  components: {
    Movie,
  },
  data() {
    return {
      movies: {
        now_playing: {
          id: 1,
          name: "Now Playing",
          list: [],
        },
        popular: {
          id: 2,
          name: "Popular",
          list: [],
        },
        top_rated: {
          id: 3,
          name: "Top Rated",
          list: [],
        },
        upcoming: {
          id: 4,
          name: "Upcoming",
          list: [],
        },
      },
      images: [],
    };
  },
  methods: {
    async getDataFromApi() {
      const apiKey = "b9b95774804923e6978e27bc40df2c97";
      const movieLists = ["now_playing", "popular", "top_rated", "upcoming"];
      movieLists.forEach(async (sort, index) => {
        var url = `https://api.themoviedb.org/3/movie/${sort}?api_key=${apiKey}&language=en-US`;
        try {
          const response = await fetch(url);
          var data = await response.json();
          this.movies[sort].list = data.results;
        } catch (error) {
          console.log("Can't get data from API: " + error);
        }
      });
    },
    navigateMovie(id) {
      window.open("./movie-page.html?movie=" + encodeURI(id));
    },
  },
  created() {
    this.getDataFromApi();
  },
};
</script>

<style>
.movies {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
}
.movies_list {
  display: flex;
  flex-direction: column;
}
.movies_list_container {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
.movies_list_title {
  color: white;
  padding: 25px 25px 0 25px;
}
</style>
