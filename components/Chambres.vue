<template>
        <NuxtLink class="chambre" :to="`products/${cardsChambre.id}`">
            <h4 class="chambre__title">{{ cardsChambre.nom }}</h4>
            <img class="chambre__picture" :src="require(`@/assets/picture/${cardsChambre.image}`)" alt="cardsChambre.alt">
            <br/>
            <button class="chambre__link"> Details </button>
        </NuxtLink>
        <!-- Page chambre ds product : _id.vue -->
</template>

<script>

export default {
  name: 'Chambres',
  props: [ 'cardsChambre' ],
}
</script>

<style scoped>

.chambre{
    margin-right: auto;
    margin-left: auto;

    margin-top: 5rem;

    text-decoration: none;
}


.chambre__picture{
    width: 20rem;
}


.chambre__picture:hover{
    -webkit-filter: contrast(101%) brightness(71%) saturate(159%) sepia(100%) hue-rotate(280deg);
    filter: contrast(101%) brightness(90%) saturate(190%) sepia(100%) hue-rotate(280deg);
}

.chambre__title{
    color:#20202c;
    font-size: 2rem;
    font-family: 'PT Serif', serif;

    margin-bottom: 60px;
    text-align: center;
}

.chambre__link{
    font-size: 1.1rem;
    color:white;
    font-family: 'Prata', serif;

    background-color:#20202c;
    text-decoration: none;
    border: none;

    padding: 10px 15px;
    border-radius: 10px;
    margin-top: 20px;
}

.chambre__link:hover{
  background-color:#747474;
}

/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {

    .chambre__picture{
    width: 40rem;
}
}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {

    .chambre__picture{
    width: 30rem;
}

}

</style>