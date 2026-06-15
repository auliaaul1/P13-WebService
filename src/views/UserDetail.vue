<script setup>
import api from "@/api.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const user = ref({});

const getUser = async () => {
  try {
    const response = await api.get(`/api/users/${route.params.id}`);

    user.value = response.data.data;

    console.log(user.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getUser();
});
</script>

<template>
  <div class="container">
    <div class="card">
      <img :src="`https://i.pravatar.cc/150?img=${user.id}`" class="avatar" />

      <h2>
        {{ user.first_name }}
        {{ user.last_name }}
      </h2>

      <p>Email: {{ user.email }}</p>

      <p>ID: {{ user.id }}</p>

      <router-link to="/" class="btn"> Kembali </router-link>
    </div>
  </div>
</template>
