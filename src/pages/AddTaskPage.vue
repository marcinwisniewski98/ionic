<template>
    <base-layout age-title="Add a task" page-default-back-link="/tasks">
        <create-task-form @save-task="saveTask"></create-task-form>
    </base-layout>
</template>

<script>
import CreateTaskForm from '../components/tasks/CreateTaskForm.vue'

export default {
   components: {
       CreateTaskForm
   },
    methods: {
        saveTask(taskData) {
            this.$store.dispatch('addTask', taskData);
            this.$router.replace('/tasks')
        }
    }
}
</script>