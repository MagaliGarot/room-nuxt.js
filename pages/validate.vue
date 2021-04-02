<template>
    <div class="containerValidate">
        <p class="valid">
            Votre formulaire à bien été soumis
        </p>
        <img class="logo" src="../assets/picture/chambre_hote_Normandie.jpg">
        <p class="merci">
            Nulla vitae ex et velit consequat sagittis ac eu sem. <br>
            Sed commodo libero at arcu interdum, id efficitur eros semper. <br>
            Ut ac felis vitae tortor auctor feugiat nec ut diam. <br>
        </p>
    </div>
</template>

<script>
  export default {
    transition: 'bounce',
  }
</script>

<style scoped>

.containerValidate{
    width: 60%;
    height: 100%;
    min-height: 400px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}
.valid{
    height: 160px;
    font-family: 'PT Serif', serif;
    font-weight: 800;
    font-size: 1.8rem;
    color:#20202c;
    text-align: center;
}

.merci{
    margin-top: 40px;
    text-align: center;
    font-size: 1.1rem;
    color:#20202c;
    font-family: 'Prata', serif;
    font-weight: 800;
}

.logo{
    width: 200px;

    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
}

/* ================================
    Keyframe
   ================================ */

   .valid{
    animation-duration: 3s;
    animation-name: slidein;
   }

   @keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {

.valid{
    font-size: 2.5rem;
}

.merci{
    margin-top: 40px;
}

.logo{
    width: 600px;
}

}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {



}

</style>