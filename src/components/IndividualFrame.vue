<template>
    <div>
        <v-container>
            <v-row class="individual-frame">
                <!-- individual frame content is here-->
                <v-col cols="12" md="6" sm="12" class="individual-frame-inner">
                    <h1 class="individual-frame-heading">Individual Assistance Program (IAP)</h1>
                    <p class="individual-frame-text mt-6">
                        While the EB-3 Unskilled program is a long yet straightforward process, your personal circumstances
                        could make it unique.
                        We have started an Individual Assistance Program called IAP to help you before and after starting
                        your process.
                        If you think you are in a unique or complex situation, you may contact us to schedule a call.
                    </p>
                    <!-- individual frame button is here-->
                    <v-btn class="individual-frame-btn">Schedule a Call</v-btn>
                </v-col>
                <!-- individual frame image is here-->
                <v-col cols="12" md="6" sm="12">
                    <v-img src="Image Placeholder (1).png" alt="user" class="individual-frame-img mt-9" ></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "IndividualFrame",
    data() {
        return {
            // 
        }
    }
}
</script>

<style>
/* individual frame style is here */
.individual-frame {
    margin-top: 60px;
    min-height: 500px;
    padding: 10px;
}

.individual-frame-inner{
    align-self: center;
}

/* individual frame heading style is here */

.individual-frame-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 45px;
    color: #222222;
}

/* individual frame text style is here */

.individual-frame-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #222222;
}
/* individual frame button style is here */

.individual-frame-btn {
    padding: 27px 45px;
    width: 210px;
    height: 65px !important;
    background-color: #041E42 !important;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF !important;
    text-transform: capitalize;
    margin-top: 10px;
}

/* media queries start from here */

@media screen and (max-width:900px) {
    .individual-frame-heading{
        text-align: center !important;
    }
    .individual-frame-text{
        text-align: center !important;
    }
    .individual-frame-btn {
        margin: 0 auto;
        display: block;
        margin-top: 50px;
    }
    .individual-frame-img{
        min-height: 550px !important;
        border-radius: 20px !important
    }
}
</style>