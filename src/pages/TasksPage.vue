<template>
    <base-layout page-title="My tasks">
            <ion-list>
                <ion-item router-link="/tasks/1">Client X meeting</ion-item>
                <ion-item>Client Y meeting</ion-item>
                <ion-item>Mail to Z</ion-item>
            </ion-list>
    </base-layout>
</template>

<script>
import {
    IonList,
    IonItem
    } from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue';

export default {
    components: {
        IonList,
        IonItem,
        BaseLayout
    }
}
</script>