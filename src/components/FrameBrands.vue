<template>
    <div>
        <div class="frame9 ">
            <!-- frame9 of brand is here  -->
            <v-row class="frame9-inner" align="center">
                <img class="brand-images" src="Burger_King_2020.png" alt="user">
                <img class="brand-images" src="Domino's_pizza_logo.png" alt="user">
                <img class="brand-images-subway" src="Subway_2016_logo.png" alt="user">
                <img class="brand-images" src="McDonald's_Golden_Arches.png" alt="user">
            </v-row>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: "FrameBrands",
    components: { carousel },
    data() {
        return {
            // 
        }
    }
}
</script>

<style>
/* frame 9 style is here */
.frame9 {
    max-width: 976.76px;
    height: 120px;
    margin: 0 auto;
    display: block;
    margin-top: -60px;
    background: rgba(255, 255, 255, 0.7) !important;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 25px;
}

.frame9-inner {
    justify-content: center;
}

.brand-images {
    padding: 40px;
    margin-top: -10px;
}

.brand-images-subway {
    padding: 40px;
    margin-top: -10px;
}

/* media queries start from here */
@media screen and (max-width:600px) {
    .frame9 {
        margin-top: -40px;
        height: 80px;
        margin-left: 15px;
        margin-right: 15px;
    }

    .brand-images {
        padding: 23px;
        width: 87px;
        margin-top: -6px;
    }

    .brand-images-subway {
        padding: 23px;
        width: 140px;
    }
}

@media screen and (max-width:440px) {
    .brand-images {
        padding: 10px;
        width: 63px;
        margin-top: 5px;
    }

    .brand-images-subway {
        padding: 10px;
        width: 120px;
        margin-top: 10px;
    }
}
</style>

<!-- <template>
    <div>
        <div class="frame9 ">
            frame9 of brand is here 
            <v-row class="frame9-inner" align="center">
                <carousel :autoplay="true" :nav="false" :dots="false" :responsive="responsive">
                    <img class="brand-images" src="Burger_King_2020.png" alt="user" >
                    <img class="brand-images" src="Domino's_pizza_logo.png" alt="user">
                    <img class="brand-images" src="Subway_2016_logo.png" alt="user" width="300px">
                    <img class="brand-images" src="McDonald's_Golden_Arches.png" alt="user">
                    <img class="brand-images" src="Burger_King_2020.png" alt="user" >
                    <img class="brand-images" src="Domino's_pizza_logo.png" alt="user">
                    <img class="brand-images" src="Subway_2016_logo.png" alt="user">
                    <img class="brand-images" src="McDonald's_Golden_Arches.png" alt="user">
                </carousel>
            </v-row>
        </div>
    </div>
</template> -->

<!-- <style>
/* frame 9 style is here */
.frame9 {
    max-width: 976.76px;
    height: 120px;
    margin: 0 auto;
    display: block;
    margin-top: -60px;
    background: rgba(255, 255, 255, 0.7) !important;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 25px;
}

.frame9-inner {
    justify-content: center;
}

.brand-images {
    padding-right: 50px;
    margin-top: 30px;
    width: 120px !important;
}
</style> -->

