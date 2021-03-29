<template>
    <div class="map">
        <div class="containerText">
          <p class="textInfo"> N'hésitez pas à nous contacter pour toutes information et réservations : 
            <br>
            tel : {{item.tel}}
            <br>
            mail : {{item.mail}} 
             </p>
          <p class="textInfo"> {{item.adresse}} </p>
        </div>

        <h1 class="map__title"> Map </h1>
        <div id="map-wrap" style="height: 50vh">
            <client-only>
                <l-map :zoom=13 :center="[48.61938213605044, -1.456640210937492]">
                    <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                    <l-marker :lat-lng="[48.61938213605044, -1.456640210937492]">
                         <l-icon ref="icon">
                            <img class="map-icon" src="../assets/picture/logo.png"/>
                        </l-icon>
                        <l-popup>
                            Mr Lumé pascal
                            <br/>
                            15 rue de montitier
                            <br/>
                            Huisnes sur mer
                             <br/>
                            50170
                             <br/>
                            PONTORSON
                        </l-popup>
                    </l-marker>
                </l-map>
            </client-only>
        </div>
    </div>
</template>

<script>

export default {
props: ['item']
}

</script>

<style>

.containerText{
  margin: 50px 40px;
}

.textInfo{
    margin-top: 20px;
    color: #20202c;
    font-size:1.2rem;
    font-family: 'Prata', serif;
    font-weight: 800;
    line-height: 40px;
}

.map{
  margin-top: 10px;
}

.map__title{
    color:#20202c;
    font-size: 2.4rem;
    font-family: 'PT Serif', serif;

    margin-bottom: 60px;
    text-align: center;
}

.map-icon{
  height: 60px;
  width: auto;
}

/* ================================
    RESPONSIVE --> SCREEN DESKTOP
   ================================ */

@media screen and (min-width: 1000px) {

.map{
  margin-top: 190px;
}

.containerText{
  width: 80%;
  margin-right: 35%;
  margin-left: 35%;
}

}

/* ================================
    RESPONSIVE --> TABLETTE
   ================================ */

@media screen and (min-width: 500px) and (max-width: 1000px) {

.map{
  margin-top: 60px;
}

}

</style>