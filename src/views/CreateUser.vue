<script setup>
import api from "@/api.js";
import { ref } from "vue";

const name = ref("");
const pekerjaan = ref("");

const createUser = async () => {
  try {
    const response = await api.post("/api/users", {
      name: name.value,
      pekerjaan: pekerjaan.value,
    });

    console.log(response.data);

    alert("User berhasil ditambahkan!");
    name.value = "";
    pekerjaan.value = "";
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="container">
    <div class="card">
      <h2 class="title">Tambah User</h2>

      <div class="form-group">
        <label>Nama</label>
        <input type="text" v-model="name" class="form-control" />
      </div>

      <div class="form-group">
        <label>Pekerjaan</label>
        <input type="text" v-model="pekerjaan" class="form-control" />
      </div>

      <button @click="createUser" class="btn">Simpan User</button>
    </div>
  </div>
</template>
