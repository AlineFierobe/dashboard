<template>
  <div id="app">
    <header class="header">
      <nav id="nav">
        <ul>
          <li>
            <router-link to="/">
              DashBoard
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'Profile',
                params: { id: user.id },
              }"
            >
              Profil
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      &copy; 2021
    </footer>
  </div>
</template>

<style lang="scss">
@import "./assets/sass/style.scss";
</style>
