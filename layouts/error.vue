<template>
     <div class="container">
        <h1 v-if="error.statusCode === 404"> 404 </h1>
        <h1 v-else>An error occurred - {{ error.statusCode }}</h1>

         <button class="button" @click="show = !show"></button>
         <transition name="img-anim">
             <div class="animate" v-show="show">
                <img class="logo" src="../assets/picture/logo.png">
             </div>
         </transition>
        <p> Page non trouvée </p>
    </div>
</template>

<script scoped>

export default {
    name: 'Notfound',
    props: ['error'],
    layout: 'error', // you can set a custom layout for the error page

    data () {
        return {
            show: false
        }
    }

}
</script>

<style scoped>

.container{
height: 100%;
min-height: 370px;
}

h1{
    color:#20202c;
    font-size: 5rem;
     font-family: 'PT Serif', serif;
    margin-top: 60px;    
    margin-bottom: 30px;
    text-align: center;
}

p{
    text-align: center;
    font-size: 1.1rem;
    color:#20202c;
    font-family: 'Prata', serif;
    font-weight: 800;

    margin-top: 30px;
}

.logo{
    width: 200px;

    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
}

.button{
    display: block;
    margin-right: auto;
    margin-left: auto;

    border: none;
    background-color: #20202c;
    padding: 10px 10px;
    border-radius: 10px;
}

.button:hover{
background: rgb(76,117,162);
background: linear-gradient(180deg, rgba(76,117,162,1) 0%, rgba(171,134,161,1) 50%, rgba(255,148,158,1) 100%);
}

/* ================================
    Transition
   ================================ */

.img-anim-enter-active, .img-anim-leave-active{
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.img-anim-enter, .img-anim-leave-to{
    transform: rotateY(45deg);
    opacity:0;
}

.anim-img-enter-to, .img-img-leave{
    transform: translateZ(200px);
    opacity: 1;
}

/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {

.logo{
    width: 700px;
}

.container{
min-height: 690px;
}
}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {

.logo{
    width: 420px;
}

.container{
min-height: 520px;
}

}
</style>