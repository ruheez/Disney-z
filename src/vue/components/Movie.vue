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
          <span v-else
            >{{ breakTextAt200Char()
            }}<a
              class="read-more"
              @click="$emit('openMoviePage', { event: $event, id })"
              >...read more</a
            ></span
          >
        </div>
        <div>
          <span class="star"></span>&nbsp;
          <span class="movie-details_info_first-line_score">{{ average }}</span>
        </div>
        <h4 class="movie-inner_back__genre">{{ genre }}</h4>
        <div class="movie-inner_back_play-icon">
          <img
            class="play-icon"
            :src="getImgUrl(playIcon)"
            alt="play-icon"
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
    average: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImgUrl(pic) {
      const images = require.context("../../images/", false, /\.png|jpeg$/);
      return images("./" + pic);
    },
    textIsShort() {
      if (this.$props.overview.length < 200) {
        return true;
      }
      return false;
    },
    breakTextAt200Char() {
      return this.$props.overview.substring(0, 200);
    },
  },
};
</script>

<style>
.movie {
  display: flex;
  flex-direction: row;
  background-color: transparent;
  margin: 10px 10px 10px 0;
  perspective: 1000px;
  cursor: pointer;
}
.movie-inner {
  position: relative;
  width: 250px;
  height: 375px;
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
  border: 1px solid white;
  background-color: #141414;
  color: white;
  transform: rotateY(180deg);
}
.movie-inner_movie_img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.movie-inner_back_overview {
  padding: 5px 0;
}
.movie-inner_back_definitions {
  color: #777;
}
.read-more {
  color: #0071c2;
  text-decoration: underline;
  white-space: nowrap;
}
.read-more:hover {
  opacity: 0.7;
}
.movie-inner_back__genre {
  margin: 5px 0;
}
.movie-inner_back_play-icon {
  margin-left: auto;
  margin-top: auto;
}
.movie-inner_back_play-icon:hover {
  opacity: 0.7;
}
.play-icon {
  width: 50px;
  height: auto;
}
.star {
  color: #ff8c00;
}
.star::before {
  content: "\2605";
}
</style>
