<template>
  <div class="movie">
    <img class="movie_img" :src="img" :alt="title" />
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.movie {
  cursor: pointer;
  margin: 5px;
}
.movie:hover {
  opacity: .7;
}
.movie_img {
  width: 250px;
  height: 150px;
}
</style>
