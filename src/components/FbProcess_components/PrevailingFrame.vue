<template>
    <div>
        <v-container>
            <carousel :autoplay="false" :loop="true" :dots="false" :center="true" :slideBy=1 :navText="navText"
                    :navClass="navClass" :responsive="responsive">
            <v-row class="prevailing-frame">
                <!-- prevailing frame content is here-->
                <v-col cols="12" md="6" sm="12" class="prevailing-frame-inner">
                    <h1 class="prevailing-frame-heading">Prevailing Wage Determination (PWD)</h1>
                    <p class="prevailing-frame-text mt-6">
                        Once an employer signs the contract with Ambar Immigration, our attorneys file Prevailing Wage 
                        Determination also known as PWD with the National Prevailing Wage Center (NPWC). The PWD form 
                        contains job title, work details, wage and work location.
                    </p>
                </v-col>
                <!-- prevailing frame image is here-->
                <v-col cols="12" md="6" sm="12">
                    <v-img src="Image Placeholder process.png" alt="user" class="prevailing-frame-img mt-9" ></v-img>
                </v-col>
            </v-row>
            <v-row class="prevailing-frame">
                <!-- prevailing frame content is here-->
                <v-col cols="12" md="6" sm="12" class="prevailing-frame-inner">
                    <h1 class="prevailing-frame-heading">Prevailing Wage Determination (PWD)</h1>
                    <p class="prevailing-frame-text mt-6">
                        Once an employer signs the contract with Ambar Immigration, our attorneys file Prevailing Wage 
                        Determination also known as PWD with the National Prevailing Wage Center (NPWC). The PWD form 
                        contains job title, work details, wage and work location.
                    </p>
                </v-col>
                <!-- prevailing frame image is here-->
                <v-col cols="12" md="6" sm="12">
                    <img src="Image Placeholder process.png" alt="user" class="prevailing-frame-img mt-9" >
                </v-col>
            </v-row>
        </carousel>
        </v-container>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: "prevailingFrame",
    components: { carousel },
    data() {
        return {
            navText: ['<img src="Down_Arrow_3_.png">', '<img src="Down_Arrow_3_ (1).png">'],
            navClass: ["owl-prev", "owl-next"],
            // for responsive carousel --- 
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                900: {
                    items: 1,
                    nav: true
                }
            },
        }
    }
}
</script>

<style>
/* prevailing frame style is here */
.prevailing-frame {
    margin-top: 60px;
    min-height: 500px;
    padding: 10px;
}

.prevailing-frame-inner{
    align-self: center;
}

/* prevailing frame heading style is here */

.prevailing-frame-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 45px;
    color: #222222;
}

/* prevailing frame text style is here */

.prevailing-frame-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #222222;
}

.owl-theme .owl-nav [class*='owl-next'] {
    margin-left: 20px;
    background-color: transparent;
}

.owl-theme .owl-nav [class*='owl-next']:hover {
    background-color: transparent;
}

.owl-theme .owl-nav [class*='owl-prev'] {
    margin-right: 20px;
    background-color: transparent !important;
}

/* media queries start from here */
@media screen and (min-width:1900px) {
    .prevailing-frame{
        margin-left: 165px;
        margin-right: 145px;
    }
}
@media screen and (max-width:900px) {
    .prevailing-frame-heading{
        text-align: center !important;
    }
    .prevailing-frame-text{
        text-align: center !important;
    }
    .prevailing-frame-img{
        min-height: 550px !important;
        border-radius: 20px !important
    }
}
</style>