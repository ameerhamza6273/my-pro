<template>
    <div>
        <div class="process-hero-section">
            <h1 class="process-hero-section-title">EB-3 Process</h1>
        </div>
        <v-container>
        <div class="process-hero-section-text">
            <p>The <span class="text-link">EB-3 Unskilled</span> program is part of the Immigration and Nationality Act (the Act) amended in the year 1990.
                This program allows 10,000 people from around the world to get a green card to come, live and work in the
                United
                State as a permanent resident. You may read the complete act at the <u>United</u> <span class="text-link">States Department of Justice</span> or
                the
                <span class="text-link">summary</span> at the official Congress website.<br /> The US labor market has severe shortages and according to the US
                Chamber
                If every unemployed person in the country found a job, we would still have 4 million open jobs. This gives
                you an
                opportunity to come and work in the US as a permanent resident.</p>
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
.process-hero-section {
    background-image: url("@/assets/Image\ Placeholder\ Process.png") !important;
    min-height: 470px;
    background-position: cover;
    background-size: cover;
}

.process-hero-section-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 650;
    font-size: 153px;
    line-height: 140px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 5px 20px 50px rgba(0, 0, 0, 0.1);
    padding-top: 190px;
}

.process-hero-section-text {
    margin-top: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #222222;

}
.text-link{
    color: #4172A0 !important;
    text-decoration: underline;
}
/* media queries is here */
@media screen and (min-width:1900px) {
    .process-hero-section {
    min-height: 650px;
}
    .process-hero-section-title {
        font-size: 200px;
    line-height: 180px;
    padding-top: 280px;
    }
    .process-hero-section-text{
        margin-left: 190px;
        margin-right: 175px;
    }
}
@media screen and (max-width:960px) {
    .process-hero-section-title {
        font-size: 123px;
        line-height: 130px;
    }
}
@media screen and (max-width:600px) {
    .process-hero-section {
    min-height: 280px;
}
    .process-hero-section-title {
        font-size: 95px;
        line-height: 80px;
        padding-top: 120px;
    }
}
@media screen and (max-width:460px) {
    .process-hero-section {
    min-height: 200px;
}
    .process-hero-section-title {
        font-size: 65px;
        line-height: 70px;
        padding-top: 80px;
    }
}
</style>