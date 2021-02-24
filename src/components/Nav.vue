<template>
  <nav>
    <router-link to="/">
      <img class="logo" src="../assets/images/logo.svg" alt="Livewall" />
    </router-link>
    <div class="button" @click="showFavorites()">Favorites</div>
    <div class="menu-holder">
      <router-link class="link" to="/">Deelnemers</router-link>
      <router-link class="link" to="/upload">Upload foto</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    showFavorites() {
      console.log('favorites', this.$store.state.favorites)
    }
  }
};
</script>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
   background-color:#febb33;
   height: 36px;
   padding: 8px 16px;

   .logo {
     width: 24px;
     height: 24px;
   }

   .menu-holder {
     .link {
       margin: 0 8px;
       font-weight: bold;
       text-decoration: none;
       text-transform: uppercase;
     }
   }
 }
</style>