<template>
  <div>
    <nav>
      <div class="title">Vue cursus</div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

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
 }
</style>
