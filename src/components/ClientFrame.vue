<template>
    <div>
        <v-container>
            <!-- client frame content is here -->
            <v-row class="clint-images justify-center">
                <img alt="user" src="Trustpilot_Logo_(2022).png" class="clint-images-logo">
                <img alt="user" src="google-ar21.png" class="clint-images-logo">
                <img alt="user" src="Yelp_Logo.png" class="clint-images-logo">
            </v-row>
            <div class="clint-images-inner">
                <!--  clint-images top content is here-->
                <h6 class="clint-images-inner-title">Clients Served</h6>
                <p class="clint-images-inner-text mt-5">We have helped over 10,000 people obtain their US Green Card through
                    the
                    EB3 process. We have served clients from over 100 countries.</p>
                <!--  clint-images bottom content is here-->
                <div class="div-bottom">
                    <div class="celebrity-text">
                        Take a look at our numbers for our credibility.
                    </div>
                    <v-row class="justify-center clint-action-div mt-10">
                        <div class="clint-action-first">
                            <h1 class="clint-percentage">10+</h1>
                            <p class="clint-view">Expertise in EB3 Process</p>
                        </div>
                        <div class="clint-action">
                            <h1 class="clint-percentage">30+</h1>
                            <p class="clint-view">Countries Served</p>
                        </div>
                        <div class="clint-action">
                            <h1 class="clint-percentage">9.2/10</h1>
                            <p class="clint-view">Client Satisfaction</p>
                        </div>
                        <div class="clint-action">
                            <h1 class="clint-percentage ">50+</h1>
                            <p class="clint-view">Client Success Stories</p>
                        </div>
                    </v-row>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "ClientFrame",
    data() {
        return {
            // 
        }
    }
}
</script>

<style>
/* clint images style is here */

.clint-images {
    margin-top: 15px;
}

.clint-images-logo {
    height: 40px;
    margin-left: 24px;
}

.clint-images-inner {
    background-image: url("../assets/Image\ Placeholder\ \(3\).png") !important;
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 90px;
    border-radius: 25px !important;
    padding: 50px 80px 50px 80px;
}

/* clint inner style is here */

.clint-images-inner-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #FFFFFF;
}

.clint-images-inner-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #ffffffe7 !important;
    max-width: 640px;
}

.clint-images-inner {
    position: relative;
}

.div-bottom {
    position: absolute;
    bottom: 50px;
}

.celebrity-text {
    width: 343px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    color: #fffffff3;
    display: -webkit-box;
    margin-left: auto;
}

.clint-action-first {
    margin-right: 40px;
}

.clint-action {
    margin-left: 50px;
    margin-right: 40px;
}

.clint-action::before {
    content: '';
    position: absolute;
    background: #FFFFFF;
    width: 1px;
    height: 70px;
    margin-left: -45px;
}

.clint-percentage {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 40px;
    color: #FFFFFF;
    text-align: center;
}

.clint-view {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 30px;
    color: #fffffff1;
}

/* media queries start from is here */

@media screen and (min-width:1900px) {
    .clint-images-inner {
        margin-left: 183px;
        margin-right: 167px;
    }
    .div-bottom{
        width: 88%;
    }
}

@media screen and (max-width:1260px) {
    .celebrity-text {
        padding-right: 70px;
    }

    .clint-action::before {
        display: none;
    }
}

@media screen and (max-width:830px) {
    .clint-action-first {
        margin-right: 20px;
    }

    .clint-action {
        margin-left: 10px;
    }
}

@media screen and (max-width:600px) {
    .clint-images-inner {
        padding: 30px 10px 30px 10px;
    }

    .clint-images-logo {
        height: 30px;
        margin: 10px;
    }

    .celebrity-text {
        padding-right: 44px;
    }

}

@media screen and (max-width:488px) {
    .clint-images-inner {
        height: 730px;
    }

    .clint-images-inner-title {
        font-size: 30px;
    }

    .clint-images-inner-text {
        font-size: 16px;
    }

    .clint-percentage {
        font-size: 20px;
    }

    .clint-view {
        font-size: 15px;
    }

    .celebrity-text {
        font-size: 15px;
    }
}

@media screen and (max-width:420px) {
    .clint-action-first {
        margin-right: 0px;

    }

    .clint-action {
        margin-right: 3px;
    }

    .clint-action-div {
        margin-left: -40px;
    }
}

@media screen and (max-width:380px) {
    .celebrity-text {
        padding-right: 35px;
    }
}
</style>