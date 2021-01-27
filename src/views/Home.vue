<template>
  <div class="page">
    <h1>Home</h1>
    <p>Welkom {{ name }} bij de cursus</p>
    <p>{{ team }} Rulez!!</p>

    <div
      class="contestant"
      v-for="contestant in contestants"
      :key="contestant.id"
    >
      <div class="contestant-info">
        <div class="name">{{ contestant.name }}</div>
        <div class="team">{{ contestant.team }}</div>
      </div>
      <div class="remove" @click="removeContestant(contestant.id)">X</div>
    </div>

    <div class="form">
      <h2>Voeg deelnemer toe</h2>
      <div class="name">Naam:</div>
      <input type="text" v-model="newContestantName" />
      <div class="name">Team:</div>
      <input type="text" v-model="newContestantTeam" />
      <button @click="newContestant">Voeg toe</button>
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
      contestants: [
        {
          id: 3,
          name: "Mark",
          team: "Platforms",
        },
        {
          id: 1,
          name: "Pim",
          team: "Platforms",
        },
        {
          id: 2,
          name: "Tom",
          team: "Platforms",
        },
        {
          id: 6,
          name: "Dennis",
          team: "Engagement",
        },
        {
          id: 4,
          name: "Nick",
          team: "Engagement",
        },
        {
          id: 5,
          name: "Jeffrey",
          team: "Engagement",
        },
      ],
    };
  },
  methods: {
    newContestant() {
      if (this.newContestantName && this.newContestantTeam) {
        this.contestants.push({
          id: this.contestants.length + 1,
          name: this.newContestantName,
          team: this.newContestantTeam,
        });

        this.newContestantName = "";
        this.newContestantTeam = "";
      } else {
        console.error("Niet alle velden zijn ingevuld");
      }
    },

    removeContestant(id) {
      const removeObject = this.contestants.find(contestant => contestant.id == id);
      const removeIndex = this.contestants.indexOf(removeObject);
      this.contestants.splice(removeIndex, 1);      
    },
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
