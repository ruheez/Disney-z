<template>
  <div class="movie">
    <div class="movie-inner">
      <div class="movie-inner_front">
        <img class="movie-inner_movie_img" :src="img" :alt="title" />
      </div>
      <div class="movie-inner_back">
        <h3>
          <span class="movie-inner_back_definitions">Title: </span> {{ title }}
        </h3>
        <div class="movie-inner_back_overview">
          <span class="movie-inner_back_definitions">Overview: </span>
          <span v-if="textIsShort()"> {{ overview }}</span>
          <span v-else v-html="breakTextAt250Char()"></span>
        </div>
        <div class="movie-inner_back_genre">
          <span class="movie-inner_back_definitions">Genre: </span> {{ genre }}
        </div>
        <div class="movie-inner_back_duration">
          <span class="movie-inner_back_definitions">Duration: </span>
          {{ duration }}min
        </div>
        <div class="movie-inner_back_play-icon">
          <img
            class="play-icon"
            :src="getImgUrl(playIcon)"
            @click="$emit('openMoviePage', { event: $event, id })"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {
      playIcon: "play-icon.jpeg",
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.png|jpeg$/);
      return images("./" + pic);
    },
    textIsShort() {
      if (this.$props.overview.length < 300) {
        return true;
      }
      return false;
    },
    breakTextAt250Char() {
      return (
        this.$props.overview.substring(0, 250) +
        '... <a class="read-more">read more</a>'
      );
    },
  },
};
</script>

<style>
.movie {
  background-color: transparent;
  width: fit-content;
  height: 300px;
  margin: 5px;
  perspective: 1000px;
  cursor: pointer;
}
.movie-inner {
  position: relative;
  width: 250px;
  height: 300px;
  text-align: left;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.movie:hover .movie-inner {
  transform: rotateY(180deg);
}
.movie-inner_front,
.movie-inner_back {
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.movie-inner_back {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: #141414;
  color: white;
  transform: rotateY(180deg);
}
.movie-inner_movie_img {
  width: 250px;
  height: 300px;
}
.movie-inner_back_overview {
  padding: 5px 0;
}
.movie-inner_back_genre {
  padding: 5px 0;
}
.movie-inner_back_duration {
  padding: 0;
}
.movie-inner_back_definitions {
  color: #777;
}
.read-more {
  color: #0071c2;
  text-decoration: underline;
}
.read-more:hover {
  opacity: 0.7;
}
.movie-inner_back_play-icon {
  margin-left: auto;
}
.movie-inner_back_play-icon:hover {
  opacity: 0.7;
}
.play-icon {
  width: 50px;
  height: auto;
}
</style>
