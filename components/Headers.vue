<template>
    <div class="hero">
        <!-- <img class="hero__logo" src="../assets/picture/logo.png"> -->
        <h1 class="hero__title"> Chambres d'hôtes au Saint Avit</h1>
        <p class="hero__presentation">
            Situés à 3 minutes des parkings du Mont Saint Michel, 
            <br/>
            nous vous accueillons dans notre maison en pierre restaurée au coeur de notre belle région de Normandie 
            <br/>
            pour un week-end ou des vacances. 
            <br>
            Vous pourrez si vous le souhaitez découvrir notre ferme et ses animaux.
        </p>
    </div>
</template>

<script>
export default{
    name:"Headers",
}
</script>

<style scoped>

/* ================================
    HEADER
   ================================ */

.hero{
    background-color: #dcc1c8;
    width: 100%;
    height: 100%;
    padding: 4rem 4rem;
}

.hero__logo{
    width: 20%;
}

.hero__title{
    color: white;
    padding: 0.5rem 0.5rem;
}

.hero__presentation{
    color: white; 
    margin:50px 50px;

    font-weight: 800;
}
</style>