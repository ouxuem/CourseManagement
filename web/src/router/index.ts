import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Main",
            component: () => import("../views/Main.vue"),
            children: [
                {
                    path: "/",
                    name: "Home",
                    component: () => import("../views/Home.vue"),
                },
                {
                    path: "/courses/list",
                    name: "CourseList",
                    component: () => import("../views/courses/CourseList.vue"),
                },
            ],
        },
    ],
});

export default router;
