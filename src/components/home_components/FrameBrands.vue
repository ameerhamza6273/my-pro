<template>
    <div>
        <div class="frame9 ">
            <!-- frame9 of brand is here  -->
            <div class="frame9-inner" align="center">
                <carousel :autoplay="true" :nav="false" :loop="true" :dots="false" :responsive="responsive">
                    <img class="brand-images" src="Burger_King_2020.png" alt="user">
                    <img class="brand-images" src="Domino's_pizza_logo.png" alt="user">
                    <img class="brand-images-subway" src="Subway_2016_logo.png" alt="user">
                    <img class="brand-images" src="McDonald's_Golden_Arches.png" alt="user">
                </carousel>
            </div>
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
            responsive: {
                0: {
                    items: 4,
                },
                600: {
                    items: 4,
                },
                900: {
                    items: 4,
                }
            },
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
    padding-right: 80px;
    padding-left: 80px;
}

.brand-images {
    width: 60px !important;
    margin-top: 30px;
}

.brand-images-subway {
    width: 150px !important;
    margin-top: 45px;
}

/* media queries start from here */
@media screen and (max-width:980px) {
    .frame9 {
        margin-left: 15px;
        margin-right: 15px;
        height: 100px;
        margin-top: -50px;
    }

    .brand-images {
        margin-top: 20px;
    }

    .brand-images-subway {
        margin-top: 35px;
    }

}
@media screen and (max-width:800px) {
    .frame9-inner {
    padding-right: 0px;
    padding-left: 5px;
}
}
@media screen and (max-width:625px) {
    .frame9 {
        margin-top: -40px;
        height: 80px;
    }

    .brand-images {
        width: 50px !important;
        margin-top: 15px;
    }

    .brand-images-subway {
        margin-top: 25px;
    }
}

@media screen and (max-width:500px) {

    .brand-images-subway {
        margin-top: 30px;
        width: 80px !important;
        height: 20px;
    }
    .brand-images {
        width: 40px !important;
        margin-top: 20px;
    }
}
</style>

