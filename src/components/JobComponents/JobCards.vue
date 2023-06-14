<template>
    <div id="job-card">
        <v-container>
            <div>
                <!-- job titles is here -->
                <p class="job-card-text">P O P U L A R T O P I C S</p>
                <v-row>
                    <v-col cols="12" sm="9" class="pl-0 pt-0">
                        <h1 class="job-card-title ml-4">Ambar Blogs</h1>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <span class="job-card-link d-none d-sm-flex">See More Articles</span>
                    </v-col>
                </v-row>
            </div>
            <!-- cards is here -->
            <v-row class="job-all-cards">
                <v-col cols="12" md="6" sm="12">
                    <v-card flat class="job-card">
                        <v-img src="Image Placeholder blue.png" alt="user" class="job-card-img align-end">
                            <v-card-subtitle class="job-card-subtitle-top pl-0">OPPORTUNITIES</v-card-subtitle>
                            <h1 class="job-card-heading white--text">Empowering Unskilled Workers for a New Beginning</h1>
                            <v-card-title class="pl-0">
                                <v-avatar size="46">
                                    <img alt="user" src="Image Placeholder pro.png">
                                </v-avatar>
                                <p class="ml-3 job-card-profile-title white--text">Angus Smith</p>
                            </v-card-title>
                            <v-card-subtitle class="job-card-subtitle-bottom mt-n10">August 15, 2023</v-card-subtitle>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-card flat class="job-card">
                        <v-img src="Image Placeholder agre.png" alt="user" class="job-card-img align-end">
                            <v-card-subtitle class="job-card-subtitle-top pl-0" >OPPORTUNITIES</v-card-subtitle>
                            <h1 class="job-card-heading white--text">Empowering Unskilled Workers for a New Beginning</h1>
                            <v-card-title class="pl-0">
                                <v-avatar size="46">
                                    <img alt="user" src="Image Placeholder pro.png">
                                </v-avatar>
                                <p class="ml-3 job-card-profile-title white--text">Angus Smith</p>
                            </v-card-title>
                            <v-card-subtitle class="job-card-subtitle-bottom mt-n10">August 15, 2023</v-card-subtitle>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
            <span class="job-card-link d-flex d-sm-none mt-5 ml-4">See More Articles</span>
        </v-container>
    </div>
</template>

<script>

export default {
    name: "JobCards",
    data() {
        return {
            //    
        }
    }
}
</script>

<style>
/* style is here */
#job-card {
    margin-top: 90px;
}

.job-card-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 30px;
    color: #4997D3;
}

.job-card-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 100px;
    color: #222222;
}

.job-card-link {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    float: right;
    text-decoration-line: underline;
    color: #4172A0;
    margin-top: 30px;
    margin-right: 10px;
    cursor: pointer;
}

/*  card style is here */
.job-all-cards {
    margin-top: 25px;
}

.job-card {
    height: 100%;
}

.job-card-img {
    max-height: 480px;
    border-radius: 20px !important;
    padding: 25px 25px 10px 25px;
}

.job-card-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 45px;
}

.job-card-profile-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
}

.job-card-subtitle-top {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
    opacity: 0.8;
    margin-bottom: -12px !important
}

.job-card-subtitle-bottom {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 24px;
    color: #FFFFFF;
    opacity: 0.8;
    margin-left: 42px;
}
/* media queries is here */
@media screen and (min-width:1900px) {
    #job-card {
    margin-left: 333px;
    margin-right: 333px;
}
}
@media screen and (max-width:600px) {
    .job-card-link{
    float: left;
}
.job-card-title {
   text-align: center;
}
.job-card-text {
   text-align: center;
}
}
@media screen and (max-width:465px) {
    .job-card-title {
    font-weight: 600;
    font-size: 60px;
    line-height: 80px;
}
.job-card-heading {
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
}
.job-card-img {
    padding: 10px 10px 5px 10px;
}
}
</style>