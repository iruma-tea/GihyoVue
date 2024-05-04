<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useWeatherStore } from '@/stores/weather';
import type { City } from '@/stores/weather';


interface Props {
    id: string;
}
const props = defineProps<Props>();

const weatherStore = useWeatherStore();
weatherStore.recieveWeatherInfo(props.id);

const isLoading = computed(
    (): boolean => {
        return weatherStore.isLoading;
    }
);

const selectCity = computed(
    (): City => {
        return weatherStore.selectedCity;
    }
);

const weatherDescription = computed(
    (): string => {
        return weatherStore.weatherDescription;
    }
);

</script>

<template>
    <p v-if="isLoading">データ取得中・・・</p>
    <section>
        <h2>{{ selectCity.name }}の天気</h2>
        <p>{{ weatherDescription }}</p>
    </section>
    <p>リストに<RouterLink v-bind:to="{name: 'CityList'}">戻る</RouterLink></p>
</template>