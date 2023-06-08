<template>
    <div>
        <v-container>
            <v-row class="images-navigater pb-0">
                <!-- Images Navigater header is here -->
                <h1 class="images-navigater-heading"> Navigating the EB3 Green Card Journey: Insights and Guidance</h1>
                <v-col cols="12" sm="9" class="pl-0">
                    <p class="images-navigater-text mt-1">Discover the step-by-step process of obtaining an EB3 green
                        card and unlock the opportunities of permanent residency in the United States.
                    </p>
                </v-col>
                <v-col cols="12" sm="3">
                    <span class="images-navigater-link d-none d-sm-flex">See More Articles</span>
                </v-col>
            </v-row>
            <v-row class="images-navigater-inner">
                <!-- Images Navigater header and first colum is here -->
                <v-col cols="12" lg="7" md="7" sm="12" class="images-navigater-inner-big pl-0">
                    <img src="Image Placeholder (4).png" alt="user" class="images-navigater-big-img">
                    <p class="images-navigater-inner-blue-text">Understanding the EB3 Green Card Program</p>
                    <h1 class="images-navigater-inner-heading">Demystifying the EB3 Green Card Process</h1>
                    <!-- profile detail is here -->
                    <v-card flat>
                        <v-card-title class="ml-n3">
                            <v-avatar size="52">
                                <img alt="user" src="Image Placeholder (5).png">
                            </v-avatar>
                            <p class="ml-4 Image-title">Angus Smith</p>
                        </v-card-title>
                        <v-card-subtitle class="Image-subtitle mt-n10 ">May 19, 2023</v-card-subtitle>
                    </v-card>
                </v-col>
                <!-- Images Navigater second colum is here -->
                <v-col cols="12" lg="5" md="5" sm="12">
                    <v-row class="images-navigater-small-images">
                        <v-col cols="12" md="12" sm="6">
                            <img src="Image Placeholder (6).png" alt="user" class="images-navigater-small-img">
                            <p class="images-navigater-inner-blue-text">Steps to Obtain an EB3 Green Card</p>
                            <h1 class="images-navigater-inner-heading">Step-by-Step Guide: How to Secure an EB3 Green Card
                            </h1>
                        </v-col>
                        <v-col cols="12" md="12" sm="6">
                            <img src="Image Placeholder (7).png" alt="user" class="images-navigater-small-img">
                            <p class="images-navigater-inner-blue-text">Strategies for a Successful EB3 Application</p>
                            <h1 class="images-navigater-inner-heading">Mastering the EB3 Application: Proven Strategies for
                                Success</h1>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <span class="images-navigater-link d-flex d-sm-none mt-5 ml-4">See More Articles</span>
        </v-container>
    </div>
</template>

<script>

export default {
    name: "ImagesNavigater",
    data() {
        return {
            // 
        }
    }
}

</script>

<style>
/* .images navigater style is here*/
.images-navigater {
    padding: 15px;
}

.images-navigater-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #222222;
    margin-top: 90px;
}

.images-navigater-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #222222;
    max-width: 785px;
}

.images-navigater-link {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    text-decoration-line: underline;
    color: #4172A0;
    display: block;
    text-align: right !important;
    margin-right: 10px;
    cursor: pointer;
}

.images-navigater-inner {
    padding: 0 15px;
}

.images-navigater-big-img {
    width: 690px !important;
    height: 600px;
}

.images-navigater-small-img {
    max-width: 440px !important;
    max-height: 300px;
}

.images-navigater-inner-blue-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #4997D3;
    padding-top: 15px;
    margin-bottom: 0;
}

.images-navigater-inner-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 45px;
    color: #222222;
    margin-top: -10px;
}

.images-navigater-inner .Image-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: #222222;
}

.images-navigater-inner .Image-subtitle {
    margin-left: 55px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    color: #222222;
}

.images-navigater-small-images {
    margin-left: 10px;
}

/* media queries is here */
@media screen and (min-width:1900px) {
    .images-navigater{
        margin-left: 175px !important;
        margin-right: 130px;
    }
    .images-navigater-inner {
        margin-left: 175px !important;
        margin-right: 130px;
    }

    .images-navigater-big-img {
        width: 100% !important;
    }

    .images-navigater-small-img {
        width: 130%;

    }
}

@media screen and (max-width:1265px) {
    .images-navigater-big-img {
        width: 525px !important;
        height: 550px;

    }

    .images-navigater-small-img {
        width: 350px !important;
    }
}

@media screen and (max-width:965px) {
    .images-navigater-inner-big {
        margin-left: 10px;
        padding-right: 0;
    }

    .images-navigater-big-img {
        width: 95% !important;
    }
}

@media screen and (max-width:800px) {
    .images-navigater-small-images {
        margin-left: -15px;
    }
}

@media screen and (max-width:740px) {
    .images-navigater-small-img {
        width: 95% !important;
    }
}

@media screen and (max-width:600px) {
    .images-navigater-inner-big{
        margin-top: -35;
    }
    .images-navigater-big-img {
        width: 100%;
        height: 250px;
    }

    .images-navigater-small-img {
        width: 100% !important;
        height: 210px;
    }
}</style>