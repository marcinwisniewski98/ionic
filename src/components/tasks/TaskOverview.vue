<template>
    <ion-img :src="task.image" alt="task.title"></ion-img>
    <h2 class="ion-text-center">{{ task.title }}</h2>
    <p class="ion-text-center">{{ task.description }}</p>
</template>

<script>
import { IonImg } from '@ionic/vue';

export default {
    props: ['task'],

    components: {
        IonImg
    }
}
</script>