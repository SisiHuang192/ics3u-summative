<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "../store";

const props = defineProps(["genres"]);
const router = useRouter();
const selectedGenre = ref(28);
const response = ref(null);
const store = useStore();

async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
  router.push(`/movies/${id}`)
}

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
})


</script>

<template>
  <div class="movie-gallery">
    <select v-model="selectedGenre" @change="getMovieByGenre()">
      <option v-for="genre of genres" :value="genre.id">{{ genre.genreName }}</option>
    </select>
    <div v-if="response" class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" @click="getMovieDetails(movie.id)"/>
        <p class="movie-title">{{ movie.title }}</p>
        <center><button
          @click="store.cart.set(movie.id, { title: movie.original_title, url: movie.poster_path })"
          class="movie-site">
          {{ store.cart.has(movie.id) ? "Added" : "Buy" }}
        </button> </center>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: #4e37a3;
  border-radius: 80px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 100px;
  height: 35px;
}
.movie-gallery {
  flex: 1;
  padding: 20px;
  background-color: #1c0332;
  color: #e6d1f2;
}

.movie-gallery h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #b08fb8;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.movie-card {
  background-color: #2e2452;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(146, 83, 197, 0.6);
}

.movie-poster {
  width: 100%;
  height: auto;
  border-bottom: 2px solid #b08fb8;
}

.movie-title {
  padding: 10px;
  text-align: center;
  font-size: 1.1rem;
  color: #e6d1f2;
}

select {
  background-color: #290029;
  color: #e6d1f2;
  padding: 10px;
  border: 2px solid #442244;
  border-radius: 5px;
  font-size: 1rem;
  width: 200px;
  margin: 10px 0;
}

select:focus {
  border-color: #b08fb8;
  outline: none;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #120012;
  color: #e6d1f2;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #b08fb8;
  margin-bottom: 20px;
  background-color: black;
  margin-top: -0px;
}
</style>