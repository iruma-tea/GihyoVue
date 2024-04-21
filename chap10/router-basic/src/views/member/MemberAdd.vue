<script setup lang="ts">
import { inject, reactive } from "vue";
import { RouterLink } from "vue-router";
import type { Member } from '@/interfaces';

const memberList = inject("memberList") as Map<number, Member>;
const member = reactive({
    id: 0,
    name: "",
    email: "",
    points: 0,
    note: "",
});

const onAdd = () => {
    console.log(member);
};
</script>
<template>
    <h1>会員管理</h1>
    <nav id="breadcrumbs">
        <li>
            <RouterLink v-bind:to="{name: 'AppTop'}">TOP</RouterLink>
        </li>
        <li>
            <RouterLink v-bind:to="{name: 'MemberList'}">会員リスト</RouterLink>
        </li>
        <li>会員情報追加</li>
    </nav>
    <section>
        <h2>会員情報追加</h2>
        <p>情報を入力し、登録ボタンをクリックしてください。</p>
        <form v-on:submit.prevent="onAdd">
            <dl>
                <dt>
                    <label for="addId">ID&nbsp;</label>
                </dt>
                <dd>
                    <input type="number" name="addId" id="addId" v-model="member.id" required>
                </dd>
                <dt>
                    <label for="addName">名前&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" name="addName" id="addName" v-model="member.name" required>
                </dd>
                <dt>
                    <label for="addEmail">メールアドレス&nbsp;</label>
                </dt>
                <dd>
                    <input type="email" name="addEmail" id="addEmail" v-model="member.email" required>
                </dd>
                <dt>
                    <label for="addPoints">保留ポイント</label>
                </dt>
                <dd>
                    <input type="number" name="addPoints" id="addPoints" v-model="member.points">
                </dd>
                <dt>
                    <label for="addNote">備考</label>
                </dt>
                <dd>
                    <textarea name="addNote" id="addNote" v-model="member.note"></textarea>
                </dd>
            </dl>
            <button type="submit">登録</button>
        </form>
    </section>
</template>