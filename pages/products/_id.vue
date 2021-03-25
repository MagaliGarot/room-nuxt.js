<template>
    <!-- Permet d'appeler l'id d'une page => voir index ds store -->
<div>
    <div v-if="chambreData">
        <h3>
            {{ chambreData.nom }}
        </h3>
        <p>
            {{ chambreData.tarif }}
        </p>
        <p>
            {{ chambreData.infos }}
        </p>
        <p>
            {{ chambreData.description }}
        </p>
        <img :src="require(`@/assets/picture/${chambreData.image}`)" alt="" class="chambreData.alt">
    </div>

    <div v-else>
        <Notfound />
    </div>
</div>
</template>

<script>
// import { mapState } from "vuex";

    export default {

         computed: {

            chambreData() {
                return this.$store.getters.getProductById(this.$route.params.id)
            }
        },
        // computed: {
        //     ...mapState([
        //         'chambresData'
        //     ])
        // }
    }

</script>