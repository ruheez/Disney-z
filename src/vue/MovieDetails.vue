<template>
  <div class="movie-details">
    <youtube :ykey="getYoutubeUrl(youtubeKey)" />
    <div class="movie-details_info">
      <div class="movie-details_info_first-line">
        <h1>{{ movie.title }}</h1>
        <div>
          <span class="star"></span>&nbsp; 
          <span class="movie-details_info_first-line_score">{{
            movie.vote_average
          }}</span>
        </div>
      </div>
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
      <h3>{{ movie.tagline }}</h3>
    </div>
  </div>
</template>

<script>
import "regenerator-runtime/runtime";
import Youtube from "./Youtube.vue";

export default {
  name: "MovieDetails",
  components: {
    Youtube,
  },
  data() {
    return {
      movie: "",
      youtubeKey: "sd",
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
        this.youtubeKey = data.videos.results[0].key;
        this.movie = data;
      } catch (error) {
        console.log("Can't get data from API: " + error);
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
  line-height: 20px;
  font-size: 16px;
}
.movie-details_trailer {
  max-width: 800px;
}
.movie-details_info {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 5px;
}
.movie-details_info_first-line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.movie-details_info_first-line_score {
  font-size: 20px;
}
.star {
  color: #ff8c00;
}
.star::before {
  content: "\2605";
}
</style>
