<template>
<div>
    <div class="chambre" v-if="chambreData">
        <h3 class="chambre__title">
            {{ chambreData.nom }}
        </h3>
        <p class="chambre__tarif">
            {{ chambreData.tarif }}
        </p>
        <p class="chambre__infos">
            {{ chambreData.infos }}
        </p>
        <p class="chambre__descri">
            {{ chambreData.description }}
        </p>
        <p class="chambre__descri">
            {{ chambreData.taxe }}
        </p>
        <p class="chambre__descri">
            {{ chambreData.paiment }}
        </p>
        <p class="chambre__descri">
            {{ chambreData.condition }}
        </p>
        <img :src="require(`@/assets/picture/${chambreData.image}`)" alt="" class="chambreData.alt">
    </div>

    <div v-else>
        <Notfound />
    </div>
</div>
</template>

<script>

    export default {

         computed: {
            // Permet d'appeler l'id d'une page => voir index ds store 
            chambreData() {
                return this.$store.getters.getProductById(this.$route.params.id)
            }
        },
    }

</script>

<style scoped>

.chambre{
    width: 20rem;
    margin-right: auto;
    margin-left: auto;
}

.chambre__title{
    margin-top: 60px;
    color: #20202c;
    font-size:2.3rem;
    font-family: 'PT Serif', serif;
    text-align:center;
}

.chambre__tarif{
    margin-top: 60px;
    color: #20202c;
    font-size:1.2rem;
    font-family: 'Prata', serif;
    font-weight: 800;
}

.chambre__infos{
    margin-top: 10px;
    color: #20202c;
    font-size:1.2rem;
    font-family: 'Prata', serif;
    font-weight: 800;
}

.chambre__descri{
    margin-top: 10px;
    margin-bottom: 20px;
    color: #20202c;  
    font-size:1.2rem;
    font-family: 'Prata', serif;
    font-weight: 800;
}

img{
    width: 20rem;
    margin-bottom: 60px;
}

/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {

.chambre{
    width: 40rem;
    margin-right: 32%;
    margin-left: 32%;
}

img{
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 40rem;
    margin-bottom: 60px;
}

}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {

.chambre{
    width: 40rem;
    margin-right: auto;
    margin-left: auto;
}

img{
    display: block;
      margin-right: auto;
    margin-left: auto;
    width: 40rem;
    margin-bottom: 60px;
}

}
</style>