<template>
    <base-layout :page-title="loadedTask ? loadedTask.title : 'Loading...'" page-default-back-link="/tasks">
        <h2 v-if="!loadedTask">Task not found.</h2>
        <task-overview v-else :task="loadedTask"></task-overview>
    </base-layout>
</template>

<script>
import TaskOverview from '../components/tasks/TaskOverview.vue'

export default {
    components: {
        TaskOverview,
    },
    data() {
        return {
            taskId: this.$route.params.id,
        }
    },
    computed: {
        loadedTask() {
            return this.$store.getters.task(this.taskId)
        }
    },
    // watch: {
    //     '$route'(currentRoute) {
    //         this.taskId = currentRoute.params.id;
    //     }
    // }
}
</script>