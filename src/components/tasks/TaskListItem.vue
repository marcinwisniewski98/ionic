<template>
    <ion-item :router-link="`/tasks/${task.id}`">
        <ion-thumbnail slot="start">
            <ion-img :src="task.image" :alt="task.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
            {{ task.title }}
        </ion-label>
        <ion-label>
            {{ task.deadline }}
        </ion-label>
    </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/vue'
export default {
    props: ["task"],

    components: {
        IonItem,
        IonThumbnail,
        IonImg,
        IonLabel
    }
}
</script>