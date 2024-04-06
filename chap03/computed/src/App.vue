<script setup lang="ts">
import {ref, computed} from "vue";

// 半径
const radiusInit = Math.round(Math.random() * 10);
// 円周率
const PI = ref(3.14);
// 半径(ref)
const radius = ref(radiusInit);
// 円の面積の算出プロパティ
const area = computed((): number => {
  return radius.value * radius.value * PI.value;
});

setInterval((): void => {
  radius.value = Math.round(Math.random() * 10);
}, 1000);
</script>

<template>
  <p>半径{{ radius }}の円の面積を円周率{{ PI }}で計算すると、{{ area }}</p>
</template>
