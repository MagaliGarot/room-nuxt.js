<template>
  <div class="container">
    <Headers> 
    </Headers>
    <div class="container-flex">
    <Chambres 
      v-for="Info in chambresInfo" 
      :key="Info.id"
      :cardsChambre="Info"
      >
    </Chambres>
    </div>
    <Slider />

  </div>
</template>

<script>
import { chambresData } from "@/assets/data.js";
import Chambres from "@/components/Chambres.vue";
import Slider from "@/components/Slider.vue";

export default {
  components: {
    Chambres,
    Slider,
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
    height: 100%;

    display:flex;
    flex-wrap: wrap;

    margin-top:70px;
    margin-bottom: 90px;
}
</style>