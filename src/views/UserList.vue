<script setup>
import api from "@/api.js";
import { ref, onMounted } from "vue";

const users = ref([]);

const getUsers = async () => {
  try {
    const response = await api.get("/api/users");

    users.value = response.data.data;
  } catch (error) {
    console.log("ERROR:", error.response || error);
  }
};

onMounted(() => {
  getUsers();
});
</script>

<template>
  <div class="container">
    <h1 class="title">Daftar User</h1>

    <div class="user-grid">
      <div class="card" v-for="user in users" :key="user.id">
        <img :src="`https://i.pravatar.cc/150?img=${user.id}`" class="avatar" />

        <h3>
          {{ user.first_name }}
          {{ user.last_name }}
        </h3>

        <p>{{ user.email }}</p>

        <router-link :to="`/detail/${user.id}`" class="btn">
          Lihat Detail
        </router-link>
      </div>
    </div>
  </div>
</template>
