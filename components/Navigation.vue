<template>
  <nav>
    <div class="nav">
      <nuxt-link class="linkNav" to="/">
        <h3 class="linkNav__text">Accueil</h3>
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
    background-color: #dcc1c8;
    padding: 20px 20px;
  }

  .linkNav {
  text-decoration: none;
  color: black;

  padding: 20px 20px;
  }

.linkNav__text{
  color:white;
}

</style>