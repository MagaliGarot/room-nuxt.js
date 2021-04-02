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
    <Map
     v-for="infoMap in map" 
     :key="infoMap.id"
     :item="infoMap"
    > 
    </Map>
  </div>
</template>

<script>
import { chambresData } from "@/assets/data.js";
import { mapState } from "vuex";
import Chambres from "@/components/Chambres.vue";
import Slider from "@/components/Slider.vue";
import Map from "@/components/Map.vue";

export default {
  transition: 'fade',

  components: {
    Chambres,
    Slider,
    Map,
  },

  transition: 'fade',
  mode: "out-in",

  data(){
    return{
      chambresInfo : chambresData,
    }
  },

  computed: {
            ...mapState([
                'map'
            ])
        }
}
</script>

<style>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      width: 100% !important;
      height: 100% !important;
  }

/* FLEX CARD CHAMBRE */
.container-flex{
    height: 100%;

    display:flex;
    flex-wrap: wrap;

    margin-top:70px;
    margin-bottom: 90px;
}

a{
  text-decoration: none;
}
</style>