<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const router = useRouter();
const password = ref('');

const handleLogin = () => {
  if (password.value === "haveagreatday") {
    router.push("/movies");
  } else {
    alert("Invalid Password");
  }
};
</script>

<template>
  <Header />
  <div class="container2">
    <div class="form-container">
      <h2>Login to Your Account</h2>
      <form @submit.prevent="handleLogin">
        <input type="email" placeholder="Email" class="input-field" required />
        <input v-model:="password" type="password" placeholder="Password" class="input-field" required />
        <button type="submit" class="button login">Login</button>
      </form>
    </div>
  </div>
  <br>
  <br>
  <br>
  <Footer />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
}

.container2 {
  background-color: #bea8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  margin-top: 10px;
  margin-left: 500px;

}

.form-container {
  text-align: center;
}

.form-container h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4e37a3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
</style>