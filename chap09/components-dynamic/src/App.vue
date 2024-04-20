<script setup lang="ts">
import { ref } from "vue";
import Input from "./components/InputName.vue";
import Radio from "./components/InputRadio.vue";
import Select from "./components/InputSelect.vue";

const currentComp = ref(Input);
const currentCompName = ref("Input");
const compList = [Input, Radio, Select];
const compNameList: string[] =["Input", "Radio", "Select"] ;
let currentCompIndex = 0;

const switchComp = (): void => {
  currentCompIndex++;
  if (currentCompIndex >= 3) {
    currentCompIndex = 0;
  }
  currentComp.value = compList[currentCompIndex];
  currentCompName.value = compNameList[currentCompIndex];
}

</script>

<template>
  <p>コンポーネント: {{ currentCompName }}</p>
  <KeepAlive>
    <component v-bind:is="currentComp" />
  </KeepAlive>
  <button v-on:click="switchComp">切り替え</button>
</template>
