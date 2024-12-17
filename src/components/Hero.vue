<script setup>
import { RouterLink } from 'vue-router';
import imageSrc from "../images/Summer-Movie-Comeback.jpg";
</script>

<template>
    <div class="container">
        <img :src="imageSrc" class="mg1" />
        <div class="content">
            <div class="centered">Unlimited Movies, Unforgettable Moments</div>
            <div class="p3">For only $3.99 a month, you can experience something spectacular</div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    width: 100%;
    height: 500px;
}

.mg1 {
    width: 100%;
    opacity: 19%;
    height: 500px;
    background-color: #000000;

}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    width: 100%;
    margin-top: 100px;
}

.centered {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.p3 {
    font-size: 1.2rem;
}

@media (max-width: 768px) {
    .centered {
        font-size: 2rem;
    }

    .p3 {
        font-size: 1rem;
    }
}
</style>
