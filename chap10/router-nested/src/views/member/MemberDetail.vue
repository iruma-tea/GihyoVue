<script setup lang="ts">
import {ref, inject, computed, watchEffect} from "vue";
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import type { Member } from '@/interfaces';

const route = useRoute();
const memberList = inject("memberList") as Map<number, Member>;
let id = Number(route.params.id);
const member = ref(memberList.get(id) as Member);
const localNote = computed(
    (): string => {
        let localNote = "--";
        if (member.value.note != undefined) {
            localNote = member.value.note;
        }
        return localNote;
    }
);
onBeforeRouteUpdate(
    (to, from) => {
        id = Number(to.params.id);
        member.value = memberList.get(id) as Member;
    }
);
// watchEffect(() => {
//     id = Number(route.params.id);
//     member.value = memberList.get(id) as Member;
// });
</script>
<template>
    <h1>会員管理</h1>
    <section>
        <h2>会員情報詳細</h2>
        <dl>
            <dt>ID</dt>
            <dd>{{ member.id }}</dd>
            <dt>名前</dt>
            <dd>{{ member.name }}</dd>
            <dt>メールアドレス</dt>
            <dd>{{ member.email }}</dd>
            <dt>保有ポイント</dt>
            <dd>{{ member.points }}</dd>
            <dt>備考</dt>
            <dd>{{ localNote }}</dd>
        </dl>
    </section>
</template>