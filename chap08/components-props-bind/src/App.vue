<script setup lang="ts">
import {ref} from "vue"
import OneInfo from "./components/OneInfo.vue";

const propsTitle = ref("発生した乱数");
const rand = Math.round(Math.random() * 100);
const propsContent = ref(rand);


</script>

<template>
  <h2>テンプレート変数を利用</h2>
  <section>
    <OneInfo v-bind:title="propsTitle" v-bind:content="propsContent" />
  </section>
</template>

<style scoped>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
