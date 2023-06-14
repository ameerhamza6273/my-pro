<template>
    <div>
        <!-- hero section of image is here -->
        <div class="employe-service">
            <h1 class="employe-service-title">Employer Services</h1>
        </div>
        <v-container>
            <!-- employe text is tere -->
            <div class="employe-service-text">
                <p>The United States has always had labor shortages, but that has become more severe in recent years.
                    Businesses and industries of all sizes are facing unprecedented
                    challenges in finding enough workers to fill openings. To address this issue, the United States amended
                    its Immigration and Nationality Act (the Act) in 1990 enabling
                    10,000 people from around the world to come and work in the US to fill in entry level positions.<br />
                    We may help you to fill in your unskilled positions if you are facing labor shortages. The process will
                    provide you a predictable flow of workers which is inevitable for the growth of your business. Contact
                    us today and let us take care of your staffing needs.</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "HeroSection",
    data() {
        return {
            // 
        }
    }
}

</script>
<style>
/* style is here */
.employe-service {
    background-image: url("@/assets/Image\ Placeholder\ Employe.png") !important;
    min-height: 430px;
    background-position: cover;
    background-size: cover;
}

.employe-service-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 650;
    font-size: 153px;
    line-height: 140px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 5px 20px 50px rgba(0, 0, 0, 0.1);
    padding-top: 175px;
}

.employe-service-text {
    margin-top: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #222222;
    padding: 10px;
}

/* media queries is here */
@media screen and (min-width:1900px) {
    .employe-service {
        min-height: 650px;
    }

    .employe-service-title {
        font-size: 200px;
        line-height: 180px;
        padding-top: 280px;
    }

    .employe-service-text {
        margin-left: 190px;
        margin-right: 175px;
    }
}

@media screen and (max-width:960px) {
    .employe-service {
        min-height: 350px;
    }

    .employe-service-title {
        font-size: 110px;
        line-height: 130px;
        padding-top: 130px;
    }
}
@media screen and (max-width:760px) {

    .employe-service-title {
        font-size: 80px;
        line-height: 110px;
        padding-top: 140px;
    }
}

@media screen and (max-width:600px) {
    .employe-service {
        min-height: 280px;
    }

    .employe-service-title {
        font-size: 70px;
        line-height: 90px;
        padding-top: 120px;
    }
}

@media screen and (max-width:490px) {

    .employe-service-title {
        font-size: 55px;
        line-height: 70px;
        padding-top: 125px;
    }
}
@media screen and (max-width:460px) {
    .employe-service {
        min-height: 200px;
    }

    .employe-service-title {
        padding-top: 80px;
    }
}
@media screen and (max-width:380px) {

    .employe-service-title {
        font-size: 45px;
        line-height: 60px;
        padding-top: 90px;
    }
}

</style>