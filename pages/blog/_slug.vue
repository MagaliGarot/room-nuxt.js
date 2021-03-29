<template>
    <div>
        <article>
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

<style>

article{
    margin-right: 20%;
    margin-left: 20%;
    margin-top: 100px;
}

</style>