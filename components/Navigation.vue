<template>
  <nav>
    <div class="nav">
      <nuxt-link class="linkNav" to="/">
        <h3 class="linkNav__text">Accueil</h3>
      </nuxt-link>
       <nuxt-link class="linkNav" to="/article">
        <h3 class="linkNav__text">Articles</h3>
      </nuxt-link>
      <nuxt-link class="linkNav" to="/contact">
        <h3 class="linkNav__text">Contact</h3>
      </nuxt-link>
    </div>
  </nav>
</template>

<style scoped>
  .nav{
    display: flex;
    background-color: #20202c;
    padding: 20px 20px;
  }

  .linkNav {
  text-decoration: none;
  color: black;

  padding: 20px 20px;
  }

.linkNav__text{
  font-family: 'PT Serif', serif;
  color:white;

  padding: 20px 20px;
}

</style>