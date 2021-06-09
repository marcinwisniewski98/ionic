<template>
    <ion-img :src="task.image" alt="task.title"></ion-img>
    <h2 class="ion-text-center">{{ task.title }}</h2>
    <h3 class="ion-text-center">{{ task.deadline }}</h3>
    <p class="ion-padding">{{ task.description }}</p>
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