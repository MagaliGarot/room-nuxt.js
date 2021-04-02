<template>
    <div>
        <article>
            <img class="article__picture" :src="require(`~/assets/picture/${article.img}`)" alt="Photo de l'article"/>
            <nuxt-content :document="article" />
        </article>
    </div>    
</template>

<script>
export default {
    // appel asynchrone des articles pr le blog -> content/blog
    async asyncData({ $content, params }){
        const article = await $content('blog', params.slug).fetch();

        return { article }
    }
}
</script>

<style scoped>

article{
    margin-right: 20%;
    margin-left: 20%;
    margin-top: 100px;

    font-family: 'Prata', serif;
    font-weight: 800;
    line-height: 2em;
}

.article__picture{
    width: 100%;
    margin-bottom: 30px;
}

</style>