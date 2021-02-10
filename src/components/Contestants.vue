<template>
  <div>
    <div class="contestant" v-for="contestant in data" :key="contestant.id" @click="$emit('contestantDetails', contestant.id)">
      <div class="contestant-info">
        <div class="name">{{ contestant.naam }}</div>
        <div class="team">{{ contestant.afdeling }}</div>
      </div>
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
.contestant {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 16px;
    border: 1px solid #febb33;
    border-left: 6px solid #febb33;
    box-shadow: 0 3px 6px 0 rgba($color: #000000, $alpha: 0.12);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }

    .name {
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>