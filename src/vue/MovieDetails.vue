<template>
  <div class="movie-details">
    <div class="movie-details_trailer">
      <iframe
        width="100%"
        height="100%"
        :src="getYoutubeUrl(youtubeKey)"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="movie-details_info">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
      <div class="movie-details_genres">
        <span v-for="genre in movie.genres" :key="genre.id">
          {{ genre.name }}&nbsp;
        </span>
      </div>
      <div class="movie-details_production">
        <span
          v-for="production in movie.production_companies"
          :key="production.id"
        >
          {{ production.name }}
        </span>
      </div>
      <div class="movie-details_production-countries">
        <span v-for="country in movie.production_countries" :key="country.id">
          {{ country.name }}
        </span>
      </div>
      <span>{{ movie.release_date }}</span>
      <span>{{ movie.vote_average }}</span>
      <h3>{{ movie.tagline }}</h3>
    </div>
  </div>
</template>

<script>
import "regenerator-runtime/runtime";

export default {
  name: "MovieDetails",
  data() {
    return {
      movie: "",
      youtubeKey: "",
    };
  },
  methods: {
    getMovie() {
      const urlParams = new URLSearchParams(window.location.search);
      var movie = urlParams.get("movie");
      return movie;
    },
    async getDataFromApi() {
      const apiKey = "b9b95774804923e6978e27bc40df2c97";
      const movie = `https://api.themoviedb.org/3/movie/${this.getMovie()}?api_key=${apiKey}&append_to_response=videos`;
      try {
        const response = await fetch(movie);
        var data = await response.json();
        console.log(data.videos.results[0].key);
        this.youtubeKey = data.videos.results[0].key;
        this.movie = data;
      } catch (error) {
        console.log(error);
      }
    },

    getYoutubeUrl(key) {
      const url = `https://www.youtube.com/embed/${key}?controls=0&autoplay=1&cc_load_policy=1&rel=0`;
      return url;
    },
  },
  created() {
    this.getDataFromApi();
  },
};
</script>

<style>
.movie-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.movie-details_trailer {
  width: 100%;
  height: 350px;
}
.movie-details_info {
  max-width: 650px;
  padding: 25px;
}
</style>
