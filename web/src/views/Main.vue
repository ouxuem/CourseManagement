<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const menu = reactive({
    items: [
        {
            title: "内容管理",
            items: [
                {
                    title: "首页",
                    path: "/",
                },
                {
                    title: "课程管理",
                    path: "/courses/list",
                },
                {
                    title: "课时管理",
                    path: "/courses/list",
                },
            ],
        },
        {
            title: "运营管理",
            items: [
                {
                    title: "用户管理",
                    path: "/users/list",
                },
            ],
        },
    ],
});
</script>

<template>
    <el-container>
        <el-aside width="200px">
            <el-menu router :default-active="route.path" style="height: 100vh">
                <el-sub-menu
                    v-for="(item, index) in menu.items"
                    :index="index + 1"
                    :key="index"
                >
                    <template #title>{{ item.title }}</template>
                    <el-menu-item
                        v-for="(value, i) in item.items"
                        :index="value.path"
                        :key="i"
                    >
                        {{ value.title }}
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>课程后台管理界面</el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
