<template>
    <base-layout :page-title="loadedTask ? loadedTask.title : 'Loading...'" page-default-back-link="/tasks">
        <h2 v-if="!loadedTask">Task not found.</h2>
        <h2 v-else>Loaded</h2>
    </base-layout>
</template>

<script>
import {

    } from '@ionic/vue';

export default {
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