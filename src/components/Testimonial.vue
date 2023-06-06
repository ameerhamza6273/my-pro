<template>
    <div>
        <v-container>
            <v-row class="testimonial">
                <!-- testimonial title is here -->
                <v-col cols="12" md="5" sm="12" class="testimonial-inner">
                    <h1 class="testimonial-inner-heading">TESTIMONIALS</h1>
                    <p class="testimonial-inner-text mt-3">
                        What our Clients say!
                    </p>
                    <img src="Dots Ornament.png" alt="user" width="125px" class="testominail-image">
                </v-col>
                <!-- testimonial card is here -->
                <v-col cols="12" md="7" sm="12">
                    <v-card class="testimonial-card">
                        <v-card-text class="testimonial-card-text">
                            <p>
                                "Obtaining a green card through the EB3 process seemed like a daunting task, but thanks to
                                the expertise and dedication of Ambar Immigration,
                                it became a seamless journey. Their team guided me through every step, ensuring I had all
                                the necessary documentation and keeping me informed throughout.
                                I am grateful for their exceptional services and highly recommend Ambar Immigration to
                                anyone seeking a green card.
                            </p>
                        </v-card-text>
                        <v-card-title class="white--text testimonial-profile">
                            <v-avatar size="58">
                                <img alt="user" src="Image Placeholder (2).png">
                            </v-avatar>
                            <p class="ml-4 avatar-title">Ahmet</p>
                        </v-card-title>
                        <v-card-subtitle class="white--text avatar-subtitle mt-n10">Client from Turkey</v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Testimonial",
    data() {
        return {
            // 
        }
    }
}
</script>

<style>
/* testimonial style is here */
.testimonial {
    margin-top: 60px;
    padding: 10px;
}

.testimonial-inner-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    color: #222222;
}

.testimonial-inner-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 30px;
    color: #222222;
}

.testominail-image {
    display: -webkit-box;
    margin-left: auto;
    margin-top: 145px;
    margin-right: -52px;
}

/* testimonial card style is here */

.testimonial-card {
    background-color: #041E42 !important;
    box-shadow: 5px 20px 50px rgba(0, 0, 0, 0.05);
    border-radius: 25px !important;
    padding: 20px 15px;
}


.testimonial-card-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #FFFFFF !important;
    opacity: 0.75;
    padding-bottom: 0;
}

.avatar-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 30px;
}

.avatar-subtitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    font-size: 12px;
    line-height: 20px;
    margin-left: 72px;
}

/* media dueries star from here */
@media screen and (max-width:1260px) {
    .testominail-image {
        margin-top: 220px;
    }
}

@media screen and (max-width:960px) {
    .testominail-image {
        display: none;
    }
    .testimonial-inner-heading{
        text-align: center;
    }
    .testimonial-inner-text{
        text-align: center;
    }
}
</style>