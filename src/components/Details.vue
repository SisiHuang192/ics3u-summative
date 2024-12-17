<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useStore } from "../store";

const route = useRoute();
const store = useStore();
const buttonText = ref("Buy");

const response = await axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos,images`);
console.log(store)

function changeButtonText() {
  buttonText.value = "Added";
}

</script>

<template>
  <div class="movie-detail">
    <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
    <h1 class="movie-title">{{ response.data.original_title }}</h1>
    <p class="movie-release-date">Release Date: {{ response.data.release_date }}</p>
    <p class="genres">Genres: <span v-for="(genre, index) in response.data.genres" :key="genre.id">{{ genre.name }}<span
          v-if="index < response.data.genres.length - 1">, </span></span></p>
    <br>
    <p class="movie-overview">{{ response.data.overview }}</p>
    <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster" class="movie-poster" />
    <h2 class="trailers-title">Trailers</h2>
    <div class="trailers-container">
      <div v-for="trailer in response.data.videos.results" :key="trailer.id" class="trailer-tile">
        <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
          <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer"
            class="trailer-thumbnail" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-detail {
  padding: 20px;
  color: white;
  background-color: #141414;
}

.movie-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-align: center;
  color: #b08fb8;
}

.movie-overview {
  font-size: 1.2rem;
  margin-bottom: 10px;
  align-items: center;
  text-align: center;
  font: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.movie-release-date {
  font-size: 1rem;
  margin-bottom: 20px;
}

.movie-site {
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #4e37a3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.movie-poster {
  width: 25%;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-left: 500px;
  margin-top: 45px;
}

.trailers-title {
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  color: #b08fb8;
}

.trailers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.trailer-tile {
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;
  width: 200px;
}

.trailer-tile:hover {
  transform: scale(1.05);
}

.trailer-thumbnail {
  width: 100%;
  height: auto;
}
</style>