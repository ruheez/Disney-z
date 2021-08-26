<template>
  <div class="movie-details">
    <youtube :ykey="getYoutubeUrl(youtubeKey)" />
    <div class="movie-details_info">
      <div class="movie-details_info_first-line">
        <h1 class="movie-details_info_title">{{ movie.title }}</h1>
        <div>
          <span class="star"></span>&nbsp;
          <span class="movie-details_info_first-line_score">{{
            movie.vote_average
          }}</span>
        </div>
      </div>
      <div class="movie-details_info_details">
        <p class="movie-details_info_details_detail">{{ movie.overview }}</p>
        <span class="movie-details_info_details_detail">{{ productions }}</span>
        <span class="movie-details_info_details_detail">{{ countries }}</span>
        <span class="movie-details_info_details_detail">{{ year }}</span>
        <h3 class="movie-details_info_details_detail">{{ movie.tagline }}</h3>
      </div>
    </div>
    <div class="movie-inner_back_play-icon">
      <img
        class="play-icon"
        :src="getImgUrl(playIcon)"
        @click="playMovie(movie.id)"
        alt="play-icon"
      />
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
      youtubeKey: "",
      playIcon: "play-icon.jpeg",
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
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.png|jpeg$/);
      return images("./" + pic);
    },
    playMovie(id) {
      window.open("./watch-movie.html?movie=" + encodeURI(id));
    },
  },
  computed: {
    productions() {
      var productions = Object(this.movie.production_companies);
      productions = Array.from(productions).map((production) => {
        return production.name;
      });
      return productions.join(" - ");
    },
    year() {
      var year = String(this.movie.release_date).substring(0, 4);
      return year;
    },
    countries() {
      var countries = Object(this.movie.production_countries);
      countries = Array.from(countries).map((country) => {
        return country.name;
      });
      return countries.join(" - ");
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
.movie-details_info {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 50px;
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
.movie-details_info_title {
  line-height: 35px;
}
.star {
  color: #ff8c00;
}
.star::before {
  content: "\2605";
}
.movie-details_info_details {
  display: flex;
  flex-direction: column;
}
.movie-details_info_details_detail {
  margin: 15px 0;
}
.movie-inner_back_play-icon {
  margin: auto 50px auto auto;
  cursor: pointer;
}
.movie-inner_back_play-icon:hover {
  opacity: 0.7;
}
.play-icon {
  width: 150px;
  height: auto;
}
</style>
