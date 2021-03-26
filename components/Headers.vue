<template>
    <div class="header-flex">
        <div class="hero">
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
        <div class="fond-logo">
            <img class="hero__logo" src="../assets/picture/logo.png">
        </div>
    </div>
</template>

<script>
export default{
    name:"Headers",
}
</script>

<style scoped>

.hero{
    background-color: #20202c;
    width: 100%;
    height: 975px;
    padding: 4rem 4rem;
}

.hero__logo{
    display:block;

    position: absolute;
    top: 1020px;
    /* z-index: 1; */

    width: 20rem;
    margin-right: 10%;
    margin-left: 10%;

    padding-bottom: 4rem;
}

.fond-logo{
    padding-top: 100px;
    background-color: #20202c;
}

.hero__title{
    padding: 0.5rem 0.5rem;
    margin-bottom: 5rem;

    font-size:2.6rem;
    font-family: 'PT Serif', serif;
    color: white;
}

.hero__presentation{
    margin:10px 10px;

    font-weight: 900;
    line-height: 2em;
    font-size:1.2rem;
    font-family: 'Prata', serif;
    color: white; 
}

/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {


.hero{
    height: 520px;
}

.fond-logo{
    height: 520px;
    background-color: #20202c;
}
.hero__logo{
    width: 50rem;
    top: 39px;
    margin-right: 50px;
    margin-left: 50px;
    position: relative;
}

.header-flex{
    display:flex;
}

}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {

.hero{
    height: 420px;
}
    
.fond-logo{
    height: 400px;
    background-color: #20202c;
}

.hero__logo{
    display:block;

    position: absolute;
    top: 640px;
    z-index: 1;

    width: 40rem;
    margin-right: 10%;
    margin-left:10%;

    padding-bottom: 0rem;
}

}

</style>