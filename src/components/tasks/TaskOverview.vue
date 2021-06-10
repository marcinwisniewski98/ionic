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
        <ion-button type="submit">Update</ion-button>
        <ion-button  @click="removeTask" color="danger">Delete</ion-button>
        </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/vue';


export default {
    emits: ['update-task', 'remove-task'],
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
            id: this.task.id,
            enteredTitle: this.task.title,
            enteredDeadline: this.task.deadline,
            enteredDescription: this.task.description
        }
    },
    methods: {
        updateTask(){
            const taskData = {
                id: this.task.id,
                title: this.enteredTitle,
                deadline: this.enteredDeadline,
                description: this.enteredDescription
            };
            this.$emit('update-task', taskData);
        },
        removeTask(){
            this.$emit('remove-task', this.task);
        }
    }
}
</script>