<template>
    <base-layout page-title="My tasks">
            <ion-list>
                <ion-item
                v-for="task in tasks"
                :router-link="`/tasks/${task.id}`"
                :key="task.key"
                >
                <ion-thumbnail slot="start">
                    <ion-img :src="task.image" :alt="task.title"></ion-img>
                </ion-thumbnail>
                <ion-label>
                    {{ task.title }}
                </ion-label>
                </ion-item>
            </ion-list>
    </base-layout>
</template>

<script>
import {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel
    } from '@ionic/vue';

export default {
    components: {
        IonList,
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel,
        
    },
    computed: {
        tasks() {
            return this.$store.getters.tasks;
        }
    }
}
</script>