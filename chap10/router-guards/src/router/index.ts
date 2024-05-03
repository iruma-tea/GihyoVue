import { createRouter, createWebHistory } from 'vue-router'
import type {RouteRecordRaw} from "vue-router";
import AppTop from "@/views/AppTop.vue";

const routeSettings: RouteRecordRaw[] = [
	{
		path: "/",
		name: "AppTop",
		component: AppTop,
		beforeEnter: (to, from) => {
			console.log(`RouteTop#beforeEnter: to=${to.fullPath};from=${from.fullPath}`);
		}
	},
	{
		path: "/next/:id?",
		name: "Next",
		component: () => {
			return import("../views/Next.vue");
		},
		beforeEnter: (to, from) => {
			console.log(`RouteNext#beforeEnter: to=${to.fullPath};from=${from.fullPath}`);
		}
	}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings
})

export default router
