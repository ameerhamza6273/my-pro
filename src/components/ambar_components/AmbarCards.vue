<template>
    <div>
        <v-container>
            <v-row class="ambar-cards">
                <!-- ambae card content is here-->
                <v-col cols="12" md="6" sm="12" class="ambar-cards-inner">
                    <p class="ambar-cards-blue-text">OUR MISSION</p>
                    <h1 class="ambar-cards-heading">Simplifying the Path to Your Green Card</h1>
                    <p class="ambar-cards-text mt-6">
                        At Ambar Immigration, our mission is to simplify the journey to a green card, empowering you with
                        the knowledge, guidance, and resources necessary for a successful application. We specialize in
                        assisting unskilled workers in navigating the complexities of the EB3 visa application process. Our
                        experienced team is dedicated to providing exceptional services tailored to the unique needs of
                        unskilled workers, ensuring transparency, integrity, and personalized attention throughout the
                        process.
                    </p>
                </v-col>
                <!-- ambae card image is here-->
                <v-col cols="12" md="6" sm="12">
                    <v-img src="Image Placeholder ambar (1).png" alt="user" class="ambar-cards-img mt-9"></v-img>
                </v-col>
            </v-row>
            <v-row class="ambar-cards">
                <!-- ambae card image is here-->
                <v-col cols="12" md="6" sm="12">
                    <v-img src="Image Placeholder ambar  (2).png" alt="user" class="ambar-cards-img mt-9"></v-img>
                </v-col>
                <!-- ambae card content is here-->
                <v-col cols="12" md="6" sm="12" class="ambar-cards-inner">
                    <p class="ambar-cards-blue-text">Expertise and Specialization</p>
                    <h1 class="ambar-cards-heading">Specialized Support for Unskilled Workers</h1>
                    <p class="ambar-cards-text mt-6">
                        With years of experience in the immigration industry, we have developed expertise in assisting
                        unskilled workers seeking employment opportunities in the United States. Our in-depth knowledge of
                        the EB3 visa program and its various job categories allows us to guide you through the specific
                        requirements and provide comprehensive support tailored to your needs. Whether you are seeking
                        employment in the agricultural, hospitality, construction, or manufacturing sectors, we are here to
                        help you navigate the pathway to your green card.
                    </p>
                </v-col>
            </v-row>
            <v-row class="ambar-cards">
                <!-- ambae card content is here-->
                <v-col cols="12" md="6" sm="12" class="ambar-cards-inner">
                    <p class="ambar-cards-blue-text">Celebrating Success Stories</p>
                    <h1 class="ambar-cards-heading">Your Dreams, Our Inspiration</h1>
                    <p class="ambar-cards-text mt-6">
                        We take immense pride in celebrating the success stories of our clients. Witnessing the
                        transformative impact of the EB3 visa on the lives of unskilled workers is what drives us. Each
                        milestone achieved reinforces our commitment to helping individuals like you build a brighter
                        future. Your dreams are our inspiration, and we are honored to be a part of your journey towards a
                        successful green card application.
                    </p>
                </v-col>
                <!-- ambae card image is here-->
                <v-col cols="12" md="6" sm="12">
                    <v-img src="Image Placeholder  ambar  (8).png" alt="user" class="ambar-cards-img mt-9"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    name: "ambarCards",
    data() {
        return {
            // 
        }
    }
}

</script>

<style>
/* style is here */
.ambar-cards {
    padding: 10px;
}

.ambar-cards-inner {
    align-self: center;
}

.ambar-cards-blue-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
    color: #4172A0;
    margin-bottom: 6px !important;
}

.ambar-cards-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 45px;
    color: #222222;
}

/* prevailing frame text style is here */

.ambar-cards-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #222222;
}
@media screen and (min-width:1900px) {
    .ambar-cards {
    margin-left: 175px;
    margin-right: 165px;
}
}
</style>