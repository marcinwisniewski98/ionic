<template>
    <ion-item lines="full" id="itemList" :router-link="`/tasks/${task.id}`">
        <ion-label id="taskTitle">
            <b>{{task.title}}</b> 
        </ion-label>
        <ion-label id="deadLine" class="ion-text-wrap">
            {{task.deadline}}
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