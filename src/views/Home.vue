<template>
  <div class="page">
    <h1>Home</h1>
    <p>Welkom {{ name }} bij de cursus</p>
    <p>{{ team }} Rulez!!</p>

    <Contestants v-bind:data="this.contestants" v-on:removeContestant="removeContestant" />

    <div class="form">
      <h2>Voeg deelnemer toe</h2>
      <div class="name">Naam:</div>
      <input type="text" v-model="newContestantName" />
      <div class="name">Team:</div>
      <input type="text" v-model="newContestantTeam" />
      <button @click="newContestant">Voeg toe</button>

      <!-- <Button to="/test" text="To test" />
      <Button to="/about" text="To about" type="back" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "Jeffrey",
      team: "Engagement",
      newContestantName: "",
      newContestantTeam: "",
      contestants: [],
    };
  },
  methods: {
    newContestant() {
      if (this.newContestantName && this.newContestantTeam) {
        this.axios
          .post("http://dump.lwdev.nl/vue-cursus-api/addDeelnemer/", {
            naam: this.newContestantName,
            afdeling: this.newContestantTeam,
          })
          .then((response) => {
            this.getContestants();

            this.newContestantName = "";
            this.newContestantTeam = "";
          });
      } else {
        console.error("Niet alle velden zijn ingevuld");
      }
    },

    removeContestant(id) {
      this.axios
        .post("http://dump.lwdev.nl/vue-cursus-api/deleteDeelnemer/", {
          id: id,
        })
        .then((response) => {
          this.getContestants();
        });
    },

    getContestants() {
      this.axios
        .get("http://dump.lwdev.nl/vue-cursus-api/deelnemers/")
        .then((response) => {
          this.contestants = response.data;
        });
    },
  },
  beforeCreate() {},

  created() {
    this.getContestants();
  },
};
</script>

<style lang="scss">
  .contestant {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 16px;
    background-color: lightblue;

    .name {
      font-size: 20px;
      font-weight: bold;
    }

    .remove {
      cursor: pointer;
    }
  }

  .form {
    button {
      display: block;
    }
  }
</style>
