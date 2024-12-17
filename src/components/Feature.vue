<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);
const numbers = ref([]);

numbers.value = (() => {
  const set = new Set();

  while (true) {
    set.add(Math.floor(Math.random() * 19));

    if (set.size === 5) {
      return set;
    }
  }
})();
onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
})
</script>

<template>
  <div class="movie-gallery">
    <h1>Featured Movies</h1>
    <div v-if="response" class="movie-list">
      <div v-for="number in numbers" :key="response.data.results[number].id" class="movie-card">
        <img :src="`https://image.tmdb.org/t/p/w500${response.data.results[number].poster_path}`" alt="Movie Poster"
          class="movie-poster" />
        <p class="movie-title">{{ response.data.results[number].title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-gallery {
  flex: 1;
  padding: 20px;
  background-color: #0f023f;
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
  background-color: #0f023f;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(128, 0, 128, 0.6);
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