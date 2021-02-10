<template>
  <div class="page">
    <Header />

    <div class="contestant-holder">
      <h1>Zoek deelnemer</h1>
      <input class="search" type="text" v-model="searchInput" />
      <Contestants
        :data="filterContestants"
        @contestantDetails="contestantDetails"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      searchInput: "",
      contestants: [],
    };
  },
  computed: {
    filterContestants() {
      const search = this.searchInput.toLowerCase().trim();

      if (!search) return this.contestants;

      return this.contestants.filter(
        (contestant) =>
          contestant.naam.toLowerCase().trim().indexOf(search) > -1 ||
          contestant.afdeling.toLowerCase().trim().indexOf(search) > -1
      );
    },
  },
  methods: {
    getContestants() {
      this.axios
        .get("http://dump.lwdev.nl/vue-cursus-api/deelnemers/")
        .then((response) => {
          this.contestants = response.data;
        });
    },

    contestantDetails(id) {
      this.$router.push({ path: `/contestant/${id}` });
    },
  },

  created() {
    this.getContestants();
  },
};
</script>

<style lang="scss">
  .contestant-holder {
    max-width: 760px;
    margin: -50px auto 0;
    padding: 40px 60px;
    background-color: #ffffff;

    .search {
      margin-bottom: 32px;
      width: 100%;
      padding: 8px;
      border: 1px solid lightgrey;
      border-radius: 4px;
    }
  }
</style>
