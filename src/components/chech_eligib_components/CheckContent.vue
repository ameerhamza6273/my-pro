<template>
    <div id="check-content">
        <v-container>
            <v-row class="check-content">
                <v-col cols="12" lg="4" md="4" sm="6">
                    <v-text-field label="Search" color="blach" append-icon="mdi-magnify"></v-text-field>
                    <h4 class="check-content-title mt-10">CATEGORIES</h4>
                    <v-row class="mt-5 pl-2 check-content-all-battuns" >
                        <v-btn class="check-content-btn" depressed color="primary">All</v-btn>
                        <v-btn class="check-content-btn" depressed v-for="(item , index) in buttensArray"
                        :key="index">{{ item.text }}</v-btn>
                    </v-row>
                    <v-divider class="mt-10" max-width="300px"></v-divider>
                    <h4 class="check-content-title mt-8">POPULAR</h4>
                    <div class="mt-4">
                        <v-card v-for="(item, index) in papularCardArray" :key="index" class="papular-card" flat>
                            <img :src="item.img" alt="user" class="papular-card-img" width="100%">
                            <v-card-text class="ml-n3 pb-0 pt-2">
                                <p class="papular-card-bluetext">{{ item.bluText }}</p>
                                <h4 class="papular-card-title">{{ item.title }}</h4>
                                <p class="papular-card-subtitle">{{ item.subtitle }}</p>
                            </v-card-text>
                        </v-card>
                    </div>
                </v-col>
                <!-- big side column is here -->
                <v-col cols="12" lg="8" md="8" sm="6">
                    <h4 class="check-content-title mt-5">CATEGORIES</h4>
                    <v-card flat>
                        <img src="Image Placeholder Recent (1).png" alt="" width="100%" class="mt-12">
                        <v-card-text>
                            <p class="recent-card-bluetext">EB-3 Visa</p>
                            <h4 class="recent-card-title">Empowering Unskilled Workers for a New Beginning</h4>
                        </v-card-text>
                        <v-card-title class="recent-awatar">
                            <v-avatar size="50">
                                <img alt="user" src="Recent Profile.png">
                            </v-avatar>
                            <p class="ml-4 recent-awatar-title">Angus Smith</p>
                        </v-card-title>
                        <v-card-subtitle class="recent-awatar-subtitle mt-n10">August 15, 2023</v-card-subtitle>
                    </v-card>
                    <v-row class="mt-5">
                        <v-col cols="12" lg="6" md="6" sm="12">
                            <img src="Image Placeholder Recent (2).png" alt="user" width="100%">
                            <p class="recent-card-bluetext">EB-3 Visa</p>
                            <h4 class="recent-card-title">How the EB3 Visa Empowers Unskilled Workers</h4>
                        </v-col>
                        <v-col cols="12" lg="6" md="6" sm="12">
                            <img src="Image Placeholder Recent  (3).png" alt="user" width="100%">
                            <p class="recent-card-bluetext">SUCCESS</p>
                            <h4 class="recent-card-title">Inspiring Tales of Unskilled Workers Thriving in the USA</h4>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" lg="6" md="6" sm="12">
                            <img src="Image Placeholder Recent  (4).png" alt="user" width="100%">
                            <p class="recent-card-bluetext">OPPORTUNITIES</p>
                            <h4 class="recent-card-title">How the EB3 Visa Opens Doors for Unskilled Workers</h4>
                        </v-col>
                        <v-col cols="12" lg="6" md="6" sm="12">
                            <img src="Image Placeholder Recent  (5).png" alt="user" width="100%">
                            <p class="recent-card-bluetext">EB-3 Visa</p>
                            <h4 class="recent-card-title">Empowering Unskilled Workers for a New Beginning</h4>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    name: "CheckContent",
    data() {
        {
            return {
                buttensArray:[
                    {text:"Fee Structure"},{text:"Legal"},{text:"Green Card"},{text:"Workforce"},
                    {text:"Jobs"},{text:"Visa Process"},{text:"Legal"},{text:"Labor Market"},
                ],
                papularCardArray: [
                    { img: "Image Placeholder  Popular (1).png", bluText: "EB-3 Visa", title: " A Comprehensive Guide for Unskilled Workers", subtitle: "April 3, 2023" },
                    { img: "Image Placeholder Popular  (2).png", bluText: "OPPORTUNITIES", title: "How the EB3 Visa Opens Doors for Unskilled Workers", subtitle: "March 12, 2023" },
                    { img: "Image Placeholder Popular  (3).png", bluText: "EB-3 VISA", title: "Your Pathway to a Rewarding Career in the United States", subtitle: "February 17, 2023" },
                    { img: "Image Placeholder Popular  (4).png", bluText: "EB-3 VISA", title: "A Bridge to Success for Unskilled Workers", subtitle: "January 8, 2023" },
                ]
            }
        }
    }
}

</script>

<style>
/* style is here */
#check-content {
    padding: 10px;
}
/* input style is here */
.check-content .v-text-field>.v-input__control>.v-input__slot {
    padding: 5px;
    max-width: 325px;
}
/* title style is here */
.check-content .check-content-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 600;
    font-size: 37px;
    line-height: 45px;
    color: #222222;
}
/* buttons style is here */
.check-content .check-content-btn {
    margin: 4px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    color: #222222;
    text-transform: capitalize;
}

.check-content .v-divider {
    max-width: 325px;
}
/* papular cards style is here */
.papular-card{
    max-width: 87%;
}
.check-content .papular-card-bluetext {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #4172A0;
    margin-bottom: 3px !important;
}

.check-content .papular-card-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #222222;
}

/* recent card style is here */
.check-content .recent-awatar {
   padding-top: 0;
}
.check-content .recent-awatar-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 35px;
    color: #222222;
}

.check-content .recent-awatar-subtitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: #222222;
    margin-left: 65px;
}

.check-content .recent-card-bluetext {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #4172A0;
    margin-bottom: 3px !important;
}

.check-content .recent-card-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 35px;
    color: #222222;
}
/* media quieres is here */
@media screen and (min-width:1900px) {
    .check-content {
    margin-left: 190px;
    margin-right: 175px;
}
}
@media screen and (max-width:600px) {
    .check-content .v-text-field>.v-input__control>.v-input__slot{
        margin: 0 auto !important;
        /* display: block; */
    }
    .check-content .v-divider {
    max-width: 100% !important;
}
.check-content-all-battuns{
    justify-content: center;
}
.papular-card{
    max-width: 100%;
}
.check-content .check-content-title {
    text-align: center;
}
.check-content .papular-card-bluetext {
   text-align: center;
}
.papular-card-title{
    text-align: center;
}
.papular-card-subtitle{
    text-align: center;
}
.check-content .recent-card-bluetext {
   text-align: center;
}

.check-content .recent-card-title {
   text-align: center;
}
}
</style>