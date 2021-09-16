<template>
  <div class="movies">
    <div class="movies_list" v-for="sort in filteredMovies" :key="sort.id">
      <div v-if="sort.list.length">
        <h2 class="movies_list_title">{{ sort.name }}</h2>
        <div class="movies_list_container" @scroll="handleScrollingArrows">
          <movie
            v-for="movie in sort.list"
            :key="movie.id"
            :img="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
            :title="movie.title"
            :overview="movie.overview"
            :average="movie.vote_average"
            :genre="movie.genre"
            @openMoviePage="navigateMovie(movie.id, movie.genre)"
          />
          <a class="slideshow_arrow prev hide-arrow" @click="scrollLeft">❮</a>
          <a class="slideshow_arrow next" @click="scrollRight">❯</a>
        </div>
      </div>
    </div>
    <div class="no-results-container" v-if="noResultsFound">
      <span class="no-results">No results found...</span>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie.vue";
import "regenerator-runtime/runtime";
import { useStore } from "vuex";

export default {
  name: "Movies",
  components: {
    Movie,
  },
  data() {
    return {
      apiKey: "b9b95774804923e6978e27bc40df2c97",
      movies: [
        {
          id: 1,
          name: "Now Playing",
          list: [],
        },
        {
          id: 2,
          name: "Popular",
          list: [],
        },
        {
          id: 3,
          name: "Top Rated",
          list: [],
        },
        {
          id: 4,
          name: "Upcoming",
          list: [],
        },
      ],
      genres: [],
    };
  },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  computed: {
    filteredMovies() {
      const keyWord = this.$store.state.keyWord;
      if (keyWord) {
        return this.movies.map((sort) => {
          return {
            id: sort.id,
            list: Array.from(sort.list).filter((movie) => {
              if (movie.genre) {
                return (
                  movie.title.toLowerCase().includes(keyWord.toLowerCase()) ||
                  movie.genre.toLowerCase().includes(keyWord.toLowerCase())
                );
              }
            }),
            name: sort.name,
          };
        });
      }
      return this.movies;
    },
    noResultsFound() {
      return Array.from(this.filteredMovies).every((sort) => {
        return sort.list.length === 0;
      });
    },
  },
  created() {
    this.fetchGenre();
    this.fetchMovies();
    // this.xtmlHttpRequestGenre();
    // this.xtmlHttpRequestMovies();
  },
  updated() {
    this.sizeIsScrollable();
  },
  methods: {
    xtmlHttpRequestGenre() {
      const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
      let self = this;
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", genreUrl, true);
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const data = JSON.parse(xhttp.response);
          const target_copy = Object.assign({}, data);
          self.genres = target_copy.genres;
        }
      };
      xhttp.send(null);
    },
    xtmlHttpRequestMovies() {
      const movieLists = ["now_playing", "popular", "top_rated", "upcoming"];
      movieLists.forEach(async (sort, index) => {
        let xhttp = new XMLHttpRequest();
        let self = this;
        let url = `https://api.themoviedb.org/3/movie/${sort}?api_key=${this.apiKey}&language=en-US`;
        xhttp.open("GET", url, true);
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            self.movies[index].list = JSON.parse(xhttp.response).results;
            self.assignGenreToMovies(index);
          }
        };
        xhttp.send(null);
      });
    },
    async fetchGenre() {
      try {
        const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
        const genreResponse = await fetch(genreUrl);
        let genreData = await genreResponse.json();
        this.genres = genreData.genres;
      } catch (error) {
        console.log("Can't get data from API: " + error);
      }
    },
    async fetchMovies() {
      const movieLists = ["now_playing", "popular", "top_rated", "upcoming"];
      try {
        movieLists.forEach(async (sort, index) => {
          let url = `https://api.themoviedb.org/3/movie/${sort}?api_key=${this.apiKey}&language=en-US`;
          const response = await fetch(url);
          let data = await response.json();
          this.movies[index].list = data.results;
          this.assignGenreToMovies(index);
        });
      } catch (error) {
        console.log("Can't get data from API: " + error);
      }
    },
    assignGenreToMovies(index) {
      this.movies[index].list.forEach((movie) => {
        const genreReference = this.genres.find((element) => {
          return element.id === movie.genre_ids[0];
        });
        movie.genre = genreReference.name;
      });
    },
    navigateMovie(id, genre) {
      window.open("./movie-page.html?movie=" + encodeURI(id + "," + genre));
    },
    handleScrollingArrows(event) {
      const container = event.target;
      this.hideLeftArrow(container);
      this.hideRightArrow(container);
    },
    sizeIsScrollable() {
      const sorts = document.querySelectorAll(".movies_list_container");
      sorts.forEach((sort) => {
        this.hideRightArrow(sort);
      });
    },
    hideLeftArrow(container) {
      const leftArrow = Array.from(container.children).find((element) => {
        return element.className.includes("prev");
      });
      container.scrollLeft === 0
        ? leftArrow.classList.add("hide-arrow")
        : leftArrow.classList.remove("hide-arrow");
    },
    hideRightArrow(container) {
      const rightArrow = Array.from(container.children).find((element) => {
        return element.className.includes("next");
      });
      container.scrollLeft === container.scrollWidth - container.offsetWidth
        ? rightArrow.classList.add("hide-arrow")
        : rightArrow.classList.remove("hide-arrow");
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
  overflow-y: hidden;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.movies_list_container::-webkit-scrollbar {
  display: none;
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
  top: Calc(50% + 51.43px);
  width: 50px;
  height: 75px;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 65px;
  border-radius: 0 3px 3px 0;
  opacity: 1;
  transition-duration: 3s;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}
.slideshow_arrow:hover {
  font-size: 80px;
}
.prev {
  left: 0;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.hide-arrow {
  opacity: 0;
}
.no-results-container {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
.no-results {
  font-size: 26px;
  color: white;
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
