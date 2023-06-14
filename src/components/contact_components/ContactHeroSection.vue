<template>
    <div>
        <!-- hero section & image is here -->
        <div class="check-eligibil">
            <h1 class="check-eligibil-title">Contact Us</h1>
        </div>
        <v-container>
            <!-- content is here -->
            <div class="check-eligibil-text">
                <h1 class="check-eligibil-heading">Want assistance with your immigration?</h1>
                <p class="check-eligibil-content">We're here to assist you! At Ambari Immigration, we have a team of
                    experienced and dedicated attorneys
                    who can assist
                    you with all your immigration needs. Whether you're looking to immigrate to the United States, Canada,
                    or another country,
                    we can help you navigate the complex immigration process and get the desired results.<br />
                    Immigration may be stressful and complex, so we're here to make it as simple as possible. We offer
                    consultation so that you can get all
                    your questions answered and learn more about how we can help you achieve your immigration goals.<br />
                    Make an appointment for your one-to-one consultation with us right away and allow us to assist you with
                    your immigration needs.
                </p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "ContactHeroSection",
    data() {
        return {
            // 
        }
    }
}

</script>
<style>
/* style is here */
.check-eligibil {
    background-image: url("@/assets/Image\ Placeholder\ Contact.png") !important;
    min-height: 430px;
    background-position: cover;
    background-size: cover;
}

.check-eligibil-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 650;
    font-size: 153px;
    line-height: 140px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 5px 20px 50px rgba(0, 0, 0, 0.1);
    padding-top: 170px;
}

.check-eligibil-text {
    padding: 10px;
}

.check-eligibil-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 40px;
    color: #222222;
    margin-top: 45px;
}

.check-eligibil-content {
    margin-top: 15px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #222222;
}

/* media queries is here */
@media screen and (min-width:1900px) {
    .check-eligibil {
        min-height: 650px;
    }

    .check-eligibil-title {
        font-size: 200px;
        line-height: 180px;
        padding-top: 280px;
    }
    .check-eligibil-text {
        margin-left: 190px;
        margin-right: 175px;
    }
}

@media screen and (max-width:960px) {
    .check-eligibil {
        min-height: 350px;
    }

    .check-eligibil-title {
        font-size: 110px;
        line-height: 130px;
        padding-top: 130px;
    }
}

@media screen and (max-width:600px) {
    .check-eligibil {
        min-height: 280px;
    }

    .check-eligibil-title {
        font-size: 95px;
        line-height: 80px;
        padding-top: 120px;
    }
    .check-eligibil-heading {
    font-weight: 600;
    font-size: 34px;
    line-height: 35px;
    text-align: center;
}
    .check-eligibil-content {
    text-align: center;
}
}

@media screen and (max-width:460px) {
    .check-eligibil {
        min-height: 200px;
    }

    .check-eligibil-title {
        font-size: 65px;
        line-height: 70px;
        padding-top: 80px;
    }
}
</style>