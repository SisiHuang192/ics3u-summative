<script setup>
import { useStore } from '../store';

const store = useStore();
console.log(store.cart);
</script>

<template>
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
    display: inline-block;
    margin-bottom: 20px;
    padding: 10px 15px;
    background-color: #4e37a3;
    color: white;
    text-decoration: none;
    border-radius: 5px;
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