<template>
  <div class="page">
    <Header />

    <div class="holder">
      <router-link class="back" to="/">< Terug</router-link>
      <h1 class="title">Deelnemer details</h1>

      <h2>Voeg nieuwe foto toe voor</h2>
      <select class="user-select" name="contestant" v-model="contestantId">
        <option
          v-for="contestant in this.contestants"
          :key="contestant.id"
          :value="contestant.id"
          @change="setUser(contestant.id)"
        >
          {{ contestant.naam }}
        </option>
      </select>

      <vue-dropzone
        ref="myVueDropzone"
        id="dropzone"
        :options="dropzoneOptions"
        :useCustomSlot="true"
        v-on:vdropzone-sending="sendingEvent"
      >
        <div class="dropzone-custom-content">
          <h3 class="dropzone-custom-title">
            Sleep hier of klik om te selecteren
          </h3>
        </div>
      </vue-dropzone>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "Upload",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: function () {
    return {
      contestants: [],
      contestantId: "",
      dropzoneOptions: {
        url: "http://dump.lwdev.nl/vue-cursus-api/uploadFoto/upload.php",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {},
        acceptedFiles: ".jpeg, .png, .jpg",
      },
    };
  },
  methods: {
    fillUserSelect() {
      this.axios
        .get("http://dump.lwdev.nl/vue-cursus-api/deelnemers/")
        .then((response) => {
          this.contestants = response.data;
        });
    },
    setUser(id) {
      console.log(id);
    },
    sendingEvent(file, xhr, formData) {
      formData.append("id", this.contestantId);
    },
  },

  created() {
    this.fillUserSelect();
  },
};
</script>

<style lang="scss">
    .holder {
        max-width: 760px;
        margin: -50px auto 0;
        padding: 40px 60px;
        background-color: #ffffff;
    }

    .back {
    margin-bottom: 12px;
    text-transform: uppercase;
    text-decoration: none;
    color: #febb33;  
  }

  .title {
    width: 100%;
    margin-bottom: 24px;
  }

  .user-select {
      margin-bottom: 48px;
  }

  .vue-dropzone {
    border-color:  #febb33;

    .dropzone-custom-title {
      color:  #febb33;
    }
  }
</style>