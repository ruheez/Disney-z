<template>
  <div class="movies">
  <span>{{ images }}</span>
    <movie
      v-for="movie in movies"
      :key="movie.id"
      :img="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
      :title="movie.title"
      :overview="movie.overview"
      :genre="movie.genres[0].name"
      :duration="movie.runtime"
    />
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
      movies: [],
      images: [],
    };
  },
  methods: {
    async getDataFromApi() {
      const apiKey = "b9b95774804923e6978e27bc40df2c97";
      var moviesId = [
        "tt12801262",
        "tt3228774",
        "tt3480822",
        "tt3554046",
        "tt10648714",
        "tt1099212",
        "tt0109830",
        "tt0068646",
        "tt0293429",
        "tt0241527",
        "tt0172495",
        "tt0468569",
        "tt4160708",
        "tt3758814",
        "tt10954652",
        "tt6402468",
        "tt9243804",
        "tt1893273",
        "tt10895576",
        "tt11083552",
        "tt10327252",
        "tt11580854",
      ];
      moviesId.forEach(async (movie) => {
        movie = `https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}&language=en-US`;
        try {
          const response = await fetch(movie);
          var data = await response.json();
          this.movies.push(data);
        } catch (error) {
          console.log(error);
        }
      });
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
  flex-flow: row wrap;
  justify-content: center;
  position: absolute;
}
</style>
