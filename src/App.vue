<template>

<router-view></router-view>
</template>


<script setup>
import Home from "./components/Home.vue";
import KeXie from "./components/KeXie.vue";
import {onMounted} from "vue";
import router from "./router/index.js";
router.push(
 {
 name:'home'
 }
)
</script>


<style scoped>

</style>
