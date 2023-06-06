<template>
    <div>
        <v-container>
            <!-- confidence content is here -->
            <div class="confidence">
                <p class="confidence-text">Apply with</p>
                <h1 class="confidence-heading">Confidence</h1>
            </div>
            <!-- confidence cards is here -->
            <div class="confidence-inner">
                <carousel :autoplay="false" :loop="true" :dots="false" :center="true" :slideBy=1 :navText="navText"
                    :navClass="navClass" :responsive="responsive">
                    <v-card max-width="360" flat class="confidence-inner-cards" id="confidence-card" v-for="(item, index) in confidenceCardsArray" :key="index">
                        <img alt="user" :src="item.img" class="confidence-inner-cards-img">
                        <v-card-title class="confidence-inner-cards-heading">
                            {{ item.title }}
                        </v-card-title>
                        <v-card-text class="confidence-inner-cards-text">
                            <p>{{ item.text }}</p>
                        </v-card-text>
                    </v-card>
                </carousel>
            </div>
            <div class="text-center">
                <v-btn class="confidence-btn">Apply Now</v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: "Confidence",
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
                    items: 3,
                    nav: false
                }
            },
            confidenceCardsArray: [
                {
                    img: "Happy Icon.png", title: "Online application Process", text: `We have implemented a new online EB-3 unskilled application system that enables applicants to
                apply and track their application process online throughout their journey. Sign Up today.`},
                {
                    img: "shieldtick.png", title: "We care for your Privacy", text: `We strictly follow US privacy laws and don’t share your personal data with anyone not working on
                your application. We will not share your application details and updates with anyone without your prior consent.`},
                {
                    img: "Happy Icon.png", title: " Do what you Love", text: `The EB-3 Unskilled green card requires the applicant to work for the sponsor for one year.
                            Choose a job you like and fulfil your commitment.`},
                {
                    img: "Happy Icon.png", title: "Online application Process", text: `We have implemented a new online EB-3 unskilled application system that enables applicants to
                apply and track their application process online throughout their journey. Sign Up today.`},
                {
                    img: "shieldtick.png", title: "We care for your Privacy", text: `We strictly follow US privacy laws and don’t share your personal data with anyone not working on
                your application. We will not share your application details and updates with anyone without your prior consent.`},
                {
                    img: "Happy Icon.png", title: " Do what you Love", text: `The EB-3 Unskilled green card requires the applicant to work for the sponsor for one year.
                            Choose a job you like and fulfil your commitment.`},
            ]
        }
    }
}
</script>

<style>
/* confidence style is here */

.confidence {
    margin-top: 90px;
}

.confidence .confidence-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #4172A0 !important;
}

.confidence .confidence-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #222222 !important;
    margin-top: -5px;
}

.confidence-inner {
    margin-top: 70px;
    min-height: 500px;
}

/*  confidence cards style is here*/

.confidence-inner-cards {
    border-radius: 24px !important;
    padding-top: 30px;
    margin-top: 100px;
}

.confidence-inner-cards-img {
    margin: 0 auto;
    display: block;
    width: 75px !important;
}

.confidence-inner-cards-heading {
    justify-content: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #222222;
    margin-top: 15px;
}

.confidence-inner-cards-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #111827;
    padding-bottom: 0;
}

.confidence-btn {
    padding: 27px 50px;
    width: 190px;
    height: 65px !important;
    background-color: #041E42 !important;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF !important;
    text-transform: capitalize;
}

/* carousel style is here */
.owl-item.active.center>div .confidence-inner-cards-heading{
   color: #FFFFFF !important;
}
.owl-item.active.center>div .confidence-inner-cards-text{
   color: #FFFFFF !important;
}
.owl-item.active.center>div .confidence-inner-cards-img{
  filter: brightness(7.25)
}
.owl-item.active.center>div {
    background-color: #4172A0;
    margin-top: 0px;
    padding: 60px 5px 1px 5px;
}
.owl-theme .owl-nav [class*='owl-next']{
    margin-left: 20px;
    background-color: transparent;
}
.owl-theme .owl-nav [class*='owl-next']:hover{
    background-color: transparent;
}

.owl-theme .owl-nav [class*='owl-prev']{
    margin-right: 20px;
    background-color: transparent !important;
}
@media screen and (max-width:1260px) {
    .confidence-inner #confidence-card-2 {
        margin-top: 0px;
    }

    .confidence-btn {
        margin-top: 30px;
    }
}
@media screen and (max-width:900px) {
    .confidence-inner-cards {
        margin: 0 auto;
    }
    .confidence-btn {
        margin-top: -50px;
    }
}

</style>