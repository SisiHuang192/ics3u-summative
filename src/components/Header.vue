<script setup>
import { computed } from "vue";
import { useRouter, RouterView, useRoute } from 'vue-router';
import { useStore } from '../store';
import imageSrc from "../images/image-removebg-preview.png";
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';


const route = useRoute();
const store = useStore();
const router = useRouter();


const logout = () => {
  store.user = null;
  signOut(auth);
  router.push(`/`);
}

const currentPath = computed(() => route.path);
const isMovieRoute = computed(() => route.name === 'movie' || route.path.startsWith('/movies/'));
</script>

<template>
  <div class="button-container">
    <RouterLink v-if="currentPath === '/login' || currentPath === '/'" to="/register" class="button register">
      Register
    </RouterLink>

    <RouterLink v-if="currentPath === '/register' || currentPath === '/'" to="/login" class="button login">
      Login
    </RouterLink>

    <RouterLink v-if="isMovieRoute || currentPath === '/settings' || currentPath === '/movies'" to="/cart"
      class="button">
      Cart
    </RouterLink>

    <RouterLink v-if="isMovieRoute || currentPath === '/cart' || currentPath === '/movies'" to="/settings"
      class="button">
      Settings
    </RouterLink>

    <RouterLink @click="logout()"
      v-if="isMovieRoute || currentPath === '/settings' || currentPath === '/cart' || currentPath === '/movies'" to="/"
      class="button">
      Logout
    </RouterLink>

    <RouterLink v-if="isMovieRoute || currentPath === '/settings' || currentPath === '/cart'" to="/movies"
      class="button">
      Browser Movies
    </RouterLink>

  </div>
  <div class="bg">
    <div class="hc">
      <h1 v-if="currentPath === '/' || currentPath === '/register' || currentPath === '/login'">
        <img :src="imageSrc" class="mgc" alt="Solstice Logo" />
        Solstice
      </h1>
      <h1 v-else>
        {{ `Hello ${store.user.displayName || store.user.first}!` }}
      </h1>
    </div>
  </div>
</template>



<script>
export default {
  name: "Component",
};
</script>

<style scoped>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: #4e37a3;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.hc {
  color: #fff;
  width: 100%;
  text-align: center;
  margin-top: -30px;
}

h1 {
  font-size: 40px;
  display: block;
  padding: 0;
  text-align: center;
}

.mgc {
  margin: 50px;
  width: 50px;
  margin-right: 10px;
  vertical-align: middle;
}

html {
  padding: 0px 0px;
  margin: 0px 0px;

}

.bg {
  background-color: #000000;
  height: 190px;
}
</style>