import CityList from '@/views/CityList.vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routeSetting: RouteRecordRaw[] = [
  {
    path: "/",
    name: "CityList",
    component: CityList
  },
  {
    path: "/weatherInfo/:id",
    name: "WeatherInfo",
    component: () => {
      return import("@/views/WeatherInfo.vue");
    },
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSetting
})

export default router
