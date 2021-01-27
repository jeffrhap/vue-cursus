<template>
  <div>
    <router-link :to="to" class="button" v-if="type == 'back'">Back</router-link>
    <router-link :to="to" class="button" v-else>{{ text }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    to: String,
    text: String || null,
    type: String || null,
  },
};
</script>

<style lang="scss">
    .button {
        display: inline-block;
        padding: 12px 24px;
        background-color: lightblue;
    }
</style>