<template>
  <div>
    <div class="contestant" v-for="contestant in data" :key="contestant.id">
      <div class="contestant-info">
        <div class="name">{{ contestant.naam }}</div>
        <div class="team">{{ contestant.afdeling }}</div>
      </div>
      <div class="remove" v-on:click="$emit('removeContestant', contestant.id)">X</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contestants",
  props: {
      data: Array
  }
};
</script>

<style lang="scss">

</style>