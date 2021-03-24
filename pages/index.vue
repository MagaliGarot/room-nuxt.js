<template>
  <div class="container">
    <Headers />

    <div class="container-flex">
    <Chambres 
      v-for="Info in chambresInfo" 
      :key="Info.id"
      :cardsChambre="Info"
      >
    </Chambres>
    </div>

  </div>
</template>

<script>
import { chambresData } from "@/assets/data.js";
import Chambres from "@/components/Chambres.vue";

export default {
  components: {
    Chambres,
  },

  data(){
    return{
      chambresInfo : chambresData,
    }
  },
}
</script>

<style>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      width: 100%;
      height: 100%;
  }

/* FLEX CARD CHAMBRE */
.container-flex{
    display:flex;
    flex-wrap: wrap;
    margin-top:70px;
}
</style>