<script setup lang="ts">
import { ref } from "vue";

const randValue = ref('まだです。');
const onButtonClick = ():void => {
  const rand = Math.round(Math.random() * 10);
  randValue.value = String(rand);
};
</script>

<template>
  <button v-on:click="onButtonClick">クリック</button>
  <p>クリックの結果{{ randValue }}</p>
</template>

<style>
</style>
