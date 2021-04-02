<template>
    <div class="containerValidate">
        <p class="valid">
            Votre formulaire à bien été soumis
        </p>
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
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}
.valid{
    font-family: 'PT Serif', serif;
    font-weight: 800;
    font-size: 1.4rem;
    color:#20202c;
}

.merci{
    margin-top: 40px;
}

/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {

.containerValidate{
    width: 80%;
    margin-right: 35%;
    margin-left: 35%;
    margin-top: 90px;
}
.valid{
    font-size: 2.3rem;
    color:#20202c;
}

.merci{
    margin-top: 40px;
}

}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {



}

</style>