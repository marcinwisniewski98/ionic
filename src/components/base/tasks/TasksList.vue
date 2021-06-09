<template>
    <ion-list>
        <task-list-item
            v-for="task in tasks"
            :key="task.id"
            :task="task"
        ></task-list-item>
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import TaskListItem from './TaskListItem.vue'

export default {
    props: ["tasks"],

    components: {
        IonList,
        TaskListItem
    }
}
</script>