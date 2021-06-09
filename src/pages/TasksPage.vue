<template>
    <base-layout page-title="My tasks" >
        <template v-slot:actions-end>
            <ion-button router-link="/tasks/add">
                <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button>
        </template>
        <tasks-list :tasks="tasks"></tasks-list>
    </base-layout>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';

import TasksList from '../components/tasks/TasksList.vue';

export default {
    components: {
        TasksList,
        IonButton,
        IonIcon
    },
    data() {
        return { add };
    },
    computed: {
        tasks() {
            return this.$store.getters.tasks;
        }
    }
}
</script>