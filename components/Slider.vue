<template>
  <div class="container-slider">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="slider-picture" :src="currentImg" />
        <div class="link-flex">
            <img class="prev" @click="prev" src="../assets/picture/left.svg"/>
            <img class="next" @click="next" src="../assets/picture/right.svg"/>
        </div>
        <img class="stop" @click="stop" src="../assets/picture/stop.svg"/>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        require('@/assets/picture/chambres_hote.jpg'),
        require('@/assets/picture/chambre_hote_Normandie.jpg'),
        require('@/assets/picture/cuisine.jpeg'),
        require('@/assets/picture/jardin.jpeg'),
        require('@/assets/picture/vue_Mont_St_Michel.jpeg'),
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4500);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
    stop: function() {
      clearInterval(this.timer);
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>

.container-slider{
  height:400px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.slider-picture {
  height:300px;
  width:100%
}

.link-flex{
    display: flex;
    justify-content: space-between;
}

.prev, .next {
  cursor: pointer;
  position: relative;
  top: -200px;
  width: 4rem;
  padding: 16px;
  transition: 0.7s ease;

  text-decoration: none;
  user-select: none;
}

.stop {
  display: block;
  cursor: pointer;
  position: relative;
  top: -150px;
  width: 3rem;
  padding: 16px;

  margin-right: auto;
  margin-left: auto;

  transition: 0.7s ease;

  text-decoration: none;
  user-select: none;
}

.prev:hover, .next:hover{
  background-color: rgb(233, 220, 220);
  border-radius: 20px;
}

/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {

    .container-slider{
    height:900px;
    width: 80rem;

    margin-top: 140px;
    margin-right: auto;
    margin-left: auto;
    }

    .fade-enter-active,
    .fade-leave-active {
     width:80rem;
    }

    .fade-enter,
    .fade-leave-to {
      width:80rem;
    }

    .slider-picture {
    height:900px;
     width: 80rem;
    } 

    .prev, .next {
    top: -450px;
}

    .stop {
    top: -200px;
    width: 5rem;
    }
}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {

    .container-slider{
    height:600px;
    }

    .slider-picture {
    height:600px;
    width:100%
    }

    .prev, .next {
    top: -320px;
}

    .stop {
    top: -200px;
    width: 4rem;
    
    }

}

</style>