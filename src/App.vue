<template>
  <div>
    <header class="navbar">
      <div class="logo">User</div>

      <nav class="nav-menu">
        <router-link to="/" class="nav-link"> Daftar User </router-link>

        <router-link to="/create" class="nav-link"> Tambah User </router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>
