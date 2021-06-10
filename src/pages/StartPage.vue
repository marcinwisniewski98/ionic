<template color="itemcolor">
    <ion-content id="home">
    <img id="jpg" alt="logo" src="..\tasksLogo.png" @click="goTasks">
    </ion-content>
    
</template>
<script>
import router from '../router' 
export default {
    methods:{
        goTasks(){ router.push('/tasks');}

        }
    }
</script>
