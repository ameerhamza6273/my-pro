<template>
    <div>
        <v-container>
            <!-- confidence content is here -->
            <div class="apply-frame">
                <!-- apply frame content is here -->
                <h1 class="apply-frame-heading">Applying is Easy</h1>
                <p class="apply-frame-text mt-4">Applying for a green card through our company is a simple and user-friendly
                    process.
                </p>
            </div>
            <!-- apply frame cards is here -->
            <div class="apply-frame-inner">
                <carousel :autoplay="false" :loop="true" :dots="false" :center="true" :slideBy=1 :navText="navText"
                    :navClass="navClass" :responsive="responsive">
                    <!-- all carousel cards is here -->
                    <v-card flat class="apply-frame-inner-cards" v-for="(item, index) in cardsArray" :key="index">
                        <img alt="user" :src="item.img" class="apply-frame-inner-cards-img">
                        <v-card-title class="apply-frame-inner-cards-heading">
                            {{ item.title }}
                        </v-card-title>
                        <v-card-text class="apply-frame-inner-cards-text">
                            <p>{{ item.text }}</p>
                        </v-card-text>
                    </v-card>
                </carousel>
            </div>
        </v-container>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: "ApplyFrame",
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
            cardsArray: [
                { img: "pay2.svg", title: "Pay the Fee", text: `We lead the market when it comes to EB-3 Unskilled application processing charges. Our pricing
                model gives our clients the opportunity to apply for the program without being a burden to their finances. An
                amazing instalment plan is also available to cater to the needs of EB-3 Unskilled aspirants.` },
                { img: "rocket.svg", title: "Your Journey Starts", text: `Now that you have selected a job and have paid the fees, your US green card journey has begun.
                Our administrative staff and team of attorneys will take care of you from now until you get your
                green card.` },
                { img: "account.svg", title: " Create Account", text: `We work with reputable employers and find them the right candidates to fill in their positions.
                We have several sponsors available and you may visit the client portal to choose a job and location that best fits your needs.` },
            ]

        }
    }
}
</script>

<style>
/*  apply frame syle is here */
.apply-frame {
    margin-top: 80px;
}

.apply-frame-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #222222;
}

.apply-frame-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #111827;
}

.apply-frame-inner {
    margin-top: 70px;
    min-height: 460px;
}

/* apply frame card style is here */

.apply-frame-inner-cards {
    border-radius: 24px !important;
    margin-top: 45px;
    padding: 60px 5px 1px 5px;
    max-width: 360px;
    min-height: 425px;
}

.apply-frame-inner-cards-img {
    margin: 0 auto;
    display: block;
    width: 25% !important;
    height: 60px;
}


.apply-frame-inner-cards-heading {
    justify-content: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    color: #222222;
    margin-top: 15px;
}

.apply-frame-inner-cards-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #111827;
}

/* carousel style is here */
.apply-frame-inner .owl-item.active.center>div .apply-frame-inner-cards-heading {
    color: #FFFFFF !important;
}

.apply-frame-inner .owl-item.active.center>div .apply-frame-inner-cards-text {
    color: #FFFFFF !important;
    opacity: 0.85;
}

.apply-frame-inner .owl-item.active.center>div .apply-frame-inner-cards-img {
    filter:brightness(78.25);
}

.apply-frame-inner .owl-item.active.center>div {
    background-color: #4172A0;
    margin-top: 0px !important;
}

.apply-frame-inner .owl-theme .owl-nav [class*='owl-next'] {
    margin-left: 20px;
    background-color: transparent;
}

.apply-frame-inner .owl-theme .owl-nav [class*='owl-next']:hover {
    background-color: transparent;
}

.apply-frame-inner .owl-theme .owl-nav [class*='owl-prev'] {
    margin-right: 20px;
    background-color: transparent !important;
}

@media screen and (min-width:1900px) {
    .apply-frame-inner {
        margin-left: 200px;

    }
}

@media screen and (max-width:1260px) {

    .apply-frame-inner-cards {
        padding: 35px 0px 1px 0px;
        min-height: 350px !important;
    }

    .apply-frame-inner-cards-heading {
        font-weight: 200;
        font-size: 25px;
        margin-top: 5px;
    }

    .apply-frame-inner-cards-text {
        font-weight: 100;
        font-size: 13px;
    }

    .apply-frame-inner-cards-text p {
        margin-bottom: 0 !important;
    }
}

@media screen and (max-width:900px) {
    .apply-frame-inner-cards {
        margin: 0 auto;
        padding: 60px 5px 1px 5px;
        height: 405px;
    }

    .apply-frame-inner-cards-heading {
        font-weight: 400;
        font-size: 28px;
        margin-top: 15px;
    }

    .apply-frame-inner-cards-text {
        font-weight: 300;
        font-size: 14px;
    }
}</style>
