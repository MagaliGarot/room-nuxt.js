<template>
    <div class="noFlex">
        <div>
            <h1 class="titlePage">Articles</h1>
        </div>
        <div class="articles">
            <div class="article" v-for="article of articles" :key="article">
                <nuxt-link class="article__container" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <img class="article__picture" :src="require(`~/assets/picture/${article.img}`)" alt="Photo de l'article"/>
                    <h3 class="article__title"> {{ article.title }} </h3>
                    <p class="article__text"> {{ article.description }} </p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }){
        const articles = await $content('blog', params.slug)
            .only(['title', 'description' ,'img', 'slug'])
            .sortBy('createdAt', 'asc')
            .fetch()
        return { articles }
    }

}

</script>

<style scoped>


.articles{
    margin-right:1.5rem;
    margin-left:1.5rem;
}

.titlePage{
    margin-top: 60px;

    color: #20202c;
    text-align:center;
}

.article__container{
  text-decoration: none;
}

.article__picture{
    margin-top: 60px;

    display: block;
    width: 30rem;

    margin-right: auto;
    margin-left: auto;
}

.article__title{
    margin-top: 20px;
    margin-bottom: 5px;

    color: #20202c;

    display: block;
    width: 30rem;

    margin-right: auto;
    margin-left: auto;
}

.article__text{
    color:#20202c;

    display: block;
    width: 30rem;

    margin-right: auto;
    margin-left: auto;
}


.article__picture:hover{
-webkit-filter: contrast(101%) brightness(71%) saturate(159%) sepia(100%) hue-rotate(280deg);
    filter: contrast(101%) brightness(90%) saturate(190%) sepia(100%) hue-rotate(280deg);
}

.article__title:hover{
    color: #20202c;
}


/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {

.articles{
    margin-right:20%;
    margin-left:20%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {

.articles{
    margin-right:20%;
    margin-left:20%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

}

</style>