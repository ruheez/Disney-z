<template>
  <div class="movies">
    <div class="movies_list" v-for="sort in movies" :key="sort.id">
      <h2 class="movies_list_title">{{ sort.name }}</h2>
      <div class="movies_list_container" @scroll="handleArrows">
        <movie
          v-for="movie in sort.list"
          :key="movie.id"
          :img="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          :title="movie.title"
          :overview="movie.overview"
          :average="movie.vote_average"
          @openMoviePage="navigateMovie(movie.id)"
        />
        <a class="slideshow_arrow prev" @click="scrollLeft">❮</a>
        <a class="slideshow_arrow next" @click="scrollRight">❯</a>
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
  created() {
    this.getDataFromApi();
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
    handleArrows(event) {
      const container = event.target;
      const children = Array.from(container.children);
      const leftArrow = children.find((element) => {
        return element.className.includes("prev");
      });
      const rightArrow = children.find((element) => {
        return element.className.includes("next");
      });
      this.hideLeftArrow(container, leftArrow);
      this.hideRightArrow(container, rightArrow);
    },
    hideLeftArrow(container, leftArrow) {
      if (container.scrollLeft === 0) {
        leftArrow.style.display = "none";
      } else {
        leftArrow.style.display = "flex";
      }
    },
    hideRightArrow(container, rightArrow) {
      if (
        container.scrollLeft ===
        container.scrollWidth - container.offsetWidth
      ) {
        rightArrow.style.display = "none";
      } else {
        rightArrow.style.display = "flex";
      }
    },
    scrollLeft(event) {
      const container = event.target.parentNode;
      container.scrollLeft -= 600;
    },
    scrollRight(event) {
      const container = event.target.parentNode;
      container.scrollLeft += 600;
    },
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
  position: relative;
}
.movies_list_container {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scroll-behavior: smooth;
}
.movies_list_title {
  color: white;
  padding: 25px 25px 0 25px;
}
.slideshow_arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 250px;
  width: 50px;
  height: 75px;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 65px;
  border-radius: 0 3px 3px 0;
  transition-duration: 0.5s;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}
.slideshow_arrow:hover {
  font-size: 80px;
}
.prev {
  display: none;
  left: 0;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
@media only screen and (max-width: 750px) {
  .slideshow_arrow {
    font-size: 40px;
  }
  .slideshow_arrow:hover {
    font-size: 65px;
  }
}
</style>
