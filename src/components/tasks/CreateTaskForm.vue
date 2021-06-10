<template >
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list >
            <ion-item >
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enteredTitle"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Deadline</ion-label>
                <ion-input type="datetime-local" required v-model="enteredDeadline"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea auto-grow="true" required v-model="enteredDescription"/>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block">Save</ion-button>
        </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/vue';

export default {
    emits: ['save-task'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea
    },
    data() {
        return {
            enteredTitle: '',
            enteredDeadline: '',
            enteredImageUrl: '',
            enteredDescription: ''
        }
    },
    methods: {
        submitForm() {
            const taskData = {  
                title: this.enteredTitle,
                deadline: this.enteredDeadline,
                description: this.enteredDescription
            };
            this.$emit('save-task', taskData);
        }
    }
}
</script>