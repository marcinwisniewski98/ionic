<template>
    <base-layout page-title="My tasks">
        <tasks-list :tasks="tasks"></tasks-list>
    </base-layout>
</template>

<script>
import TasksList from '../components/base/tasks/TasksList.vue';

export default {
    components: {
        TasksList
    },
    computed: {
        tasks() {
            return this.$store.getters.tasks;
        }
    }
}
</script>