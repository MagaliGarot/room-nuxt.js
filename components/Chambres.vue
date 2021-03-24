<template>
        <NuxtLink class="chambre" :to="`products/${cardsChambre.id}`">
            <h4 class="chambre__title">{{ cardsChambre.nom }}</h4>
            <img class="chambre__picture" :src="require(`@/assets/picture/${cardsChambre.image}`)" alt="cardsChambre.alt">
            <p> ... </p>
        </NuxtLink>
</template>

<script>
export default {
  name: 'Chambres',
  props: [ 'cardsChambre' ],
   data: () => {
        return {

        }
    },
}
</script>

<style>

.chambre{
    margin-right: auto;
    margin-left: auto;

    margin-top: 5rem;

    text-decoration: none;
}


.chambre__picture{
    width: 20rem;
}

.chambre__title{
    color:#6a6c7c;
    font-size: 2rem;

    margin-bottom: 60px;
    text-align: center;
}

</style>