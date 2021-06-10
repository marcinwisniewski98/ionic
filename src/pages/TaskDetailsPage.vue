<template>
    <base-layout :page-title="loadedTask ? loadedTask.title : 'Loading...'" page-default-back-link="/tasks">
        <h2 v-if="!loadedTask">Task not found.</h2>
        <task-overview v-else :task="loadedTask" @remove-task="removeTask" @update-task="updateTask"></task-overview>
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
    methods: {
        updateTask(taskData){
            this.$store.dispatch('updateTask', taskData);
            this.$router.replace('/tasks');
        },
        removeTask(taskData){
            const res = window.confirm(`Do you really want do delete ${taskData.title}?`);
            if(res){
                this.$store.dispatch('removeTask', taskData);
                this.$router.replace('/tasks');
            }
        }
    }
}
</script>