<template>
    <form class="ion-padding" @submit.prevent="updateTask">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enteredTitle"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Deadline</ion-label>
                <ion-input type="datetime-local" required v-model="enteredDeadline"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5" required v-model="enteredDescription"/>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="full">Update</ion-button>
        <ion-button expand="full" @click="deleteTask">Delete</ion-button>
        </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/vue';


export default {
    props: ['task'],

    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea
    },
    data() {
        return {
            enteredTitle: this.task.title,
            enteredDeadline: this.task.deadline,
            enteredDescription: this.task.description
        }
    },
    methods: {
        updateTask(){
            alert('task update');
        },
        deleteTask(){
            alert('usuwam task '+this.task.title);
        }
    }
}
</script>