<script setup>
import { useStore } from '../store';
import { ref } from 'vue';

const message = ref('')
const store = useStore();
console.log(store.cart);

const handleCheckout = () => {
  store.cart.clear(); 
  message.value = 'Thanks for purchasing!'; 
};
</script>

<template>
<div class = "checkout">
    <button @click="handleCheckout">Checkout</button>
    <p v-if="message">{{ message }}</p>
</div>
    <div class="cart">
        <h1>Shopping Cart</h1>
        <div class="item" v-for="([key, value]) in store.cart">
            <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" />
            <h1>{{ value.title }}</h1>
            <button @click="store.cart.delete(key)">Remove</button>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: #b08fb8;
    text-align: center;
}

button {
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

.cart {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100vw;
}

.item {
    display: flex;
    align-items: center;
    gap: 2rem;
}

img {
    width: 10%;
    border-radius: 5%;
}
</style>