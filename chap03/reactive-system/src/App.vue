<script setup lang="ts">
import {ref} from "vue";

// 現在の日時
const now = new Date();
// 現在の時刻の文字を取得
const nowStr = now.toLocaleTimeString();
// 現在の時刻文字列をテンプレート変数として用意
let timeStr = nowStr;
// 現在の時刻文字列をテンプレオート変数として用意(ref)
const timeStrRef = ref(nowStr);

function changeTime():void {
  // 現在の日時
  const newTime = new Date();
  // 現在の時刻の文字を取得
  const newTimeStr = newTime.toLocaleTimeString();
  // 現在の時刻文字列をテンプレオート変数に再代入
  timeStrRef.value = newTimeStr;
}

setInterval(changeTime, 1000);

</script>

<template>
  <p>現在時刻: {{ timeStr }}</p>
  <p>現在時刻(ref): {{ timeStrRef }}</p>
</template>

