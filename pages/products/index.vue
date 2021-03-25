<template>
     <div class="container-flex">
         <!-- Permet d'appeler qu'une chambre à la fois -->
    <Chambres 
      v-for="Info in chambresInfo.slice(0,1)" 
      :key="Info.id"
      :cardsChambre="Info"
      >
    </Chambres>
    </div>
</template>

<script>
import { chambresData } from "@/assets/data.js";

    export default{
        data(){
            return{
                chambresInfo : chambresData,
            }
        }
    }
</script>