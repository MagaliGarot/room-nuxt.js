<template>
     <div class='container'>
        <h1> 404 </h1>
        <p> Chambre non trouvée </p>
        <p> Merci de nous signaler le problème à l'adresse e-mail : truc@mail.com  </p>
    </div>
</template>

<script>

export default {
  name: 'Notfound',
}
</script>

<style scoped>
.container{
height: 100%;
min-height: 400px;
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
</style>