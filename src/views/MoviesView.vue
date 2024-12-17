<script setup>
import Genres from "../components/Genres.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const genresList = [{
  id: 16,
  genreName: "Animation"
},
{
  id: 14,
  genreName: "Fantasy"
},
{
  id: 12,
  genreName: "Adventure"
},
{
  id: 9648,
  genreName: "Mystery"
},
{
  id: 36,
  genreName: "History"
},
{
  id: 10402,
  genreName: "Music"
},
]
</script>

<template>
  <Header />
  <Genres :genres="genresList" />
  <Footer />
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


header,
.genres-container,
footer {
  width: 100%;
  margin: 0;
  padding: 0;
}


.genres-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;

}

footer {
  background-color: black;
  color: white;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin: 0;
}
</style>
