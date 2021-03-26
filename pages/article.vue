<template>
    <div>
        <h1 class="titlePage">Articles</h1>
        <div class="articles">
            <div class="article" v-for="article of articles" :key="article">
                <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
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

.titlePage{
    text-align:center;
}

.article__picture{
    display: block;
    width: 20rem;

    margin-right: auto;
    margin-left: auto;
}

.article__title{
    text-align:center;

    text-decoration: none;
}

.article__text{
    text-align:center;

    text-decoration: none;
}

</style>