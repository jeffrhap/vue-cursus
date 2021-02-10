<template>
  <div class="page">
    <Header />

    <div class="contestant-holder">
      <h1 class="title">Deelnemer details</h1>
      <div class="content-holder">
        <div class="content-row">
          <div class="heading">Naam</div>
          <div class="content">{{ this.contestant.naam }}</div>
        </div>
        <div class="content-row">
          <div class="heading">Afdeling</div>
          <div class="content">{{ this.contestant.afdeling }}</div>
        </div>
        <div class="content-row">
          <div class="heading">Persoonlijke tekst</div>
          <div class="content">{{ this.contestant.tekst }}</div>
        </div>
      </div>
      <div class="image-holder">
        <img :src="this.contestant.img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contestant",
  data() {
    return {
      contestant: "",
    };
  },
  methods: {
    getContestantDetails() {
      this.axios
        .post("http://dump.lwdev.nl/vue-cursus-api/deelnemerDetails/", {
          id: this.$route.params.id,
        })
        .then((response) => {
          const data = response.data;
          this.contestant = data;
        });
    },
  },
  created() {
    this.getContestantDetails();
  },
};
</script>

<style lang="scss" scoped>
  .contestant-holder {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .title {
    width: 100%;
    margin-bottom: 24px;
  }

  .content-holder {
    width: calc(50% - 12px);
    margin-right: 24px;
    .content-row {
      margin-bottom: 24px;

      .heading {
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
      }

      .content {
        font-size: 24px;
      }
    }
  }

  .image-holder {
    width: calc(50% - 12px);

    img {
      width: 100%;
    }
  }  
</style>