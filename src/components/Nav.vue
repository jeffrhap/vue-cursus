<template>
  <nav>
    <div class="title">Vue cursus</div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/test">Test</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
nav {
   background-color:#efefef;
   height: 48px;

   .title {
	   padding: 1rem;
	   font-weight: bold;
	   text-transform: uppercase;
	   color: #000000;
	   display: inline-block;
   }

   a {
       margin: 0 6px;
   }
 }
</style>