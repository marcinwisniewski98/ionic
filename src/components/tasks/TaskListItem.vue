<template>
    <ion-item :router-link="`/tasks/${task.id}`">
        <ion-label>
            {{ task.title }}
        </ion-label>
        <ion-label>
            {{ task.deadline }}
        </ion-label>
    </ion-item>
</template>

<script>
import { IonItem,  IonLabel } from '@ionic/vue'
export default {
    props: ["task"],

    components: {
        IonItem,
        IonLabel
    }
}
</script>