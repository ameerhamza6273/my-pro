<template>
    <div id="green-card">
        <v-container>
            <!-- content is here -->
            <div class="green-card">
                <h1 class="green-card-heading">Steps to Green Card (EB-3 Unskilled)</h1>
                <p class="green-card-text mt-5 mb-10">Achieve your dream of obtaining a green card through the EB-3
                    Unskilled category by following our simplified steps to success.</p>
            </div>
                <!-- green card is here -->
            <v-row class="mt-10" justify="center">
                <v-col cols="12" md="6" sm="12" xs="12" class="green-card-inner">
                    <v-expansion-panels accordion flat v-model="panel" class="expansion">
                        <v-expansion-panel v-for="(item, index) in jobArray" :key="index" :active-class="activeClass">
                            <v-expansion-panel-header hide-actions class="expansion-title">
                                <span class="title-span"></span> {{ item.title }}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="expansion-text">
                                {{ item.text }}
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
                <!-- image is here -->
                <v-col cols="12" md="6" sm="12" xs="12">
                    <div v-for="(item, index) in jobArray" :key="index">
                        <img alr="user" v-if="index == panel" :src="item.img" width="400" height="460"
                            class="green-card-img">
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "GreenCard",
    data() {
        return {
            panel: 0,
            imageOfArray: "",
            // green card array is here
            jobArray: [
                {
                    title: "Choose a job",
                    text: "Looking for a new job opportunity in the United States? We are here to help you choose the right job that fits your qualifications and expertise.",
                    img: "image 1.png"
                },
                {
                    title: "Pay the fee",
                    text: `Navigating the complex world of immigration law can be overwhelming, especially regarding the fees involved. 
                    At Ambar Immigration, we make it easy for you to pay the necessary fees for your application.`,
                    img: "undraw_online_payments_re_y8f2.png"
                },
                {
                    title: "File PERM",
                    text: `Filing for a PERM or labor certificate is critical. Our experienced immigration attorneys can assist you with this process, ensuring that your application
                     is complete and error-free that all requirements are met.`,
                    img: "undraw_certificate_re_yadi.png"
                },
                {
                    title: "File I-140",
                    text: `The I-140 petition is the next step in the employment-based green card process. Our team can help you file this petition, ensuring all required documentation
                     is submitted accurately and on time.`,
                    img: "undraw_contract_re_ves9 1.png"
                },
                {
                    title: "Consular Processing",
                    text: `Adjustment of status and consular processing are the final steps in the employment-based green card process. We can help you navigate these complex processes
                     and ensure all required documentation is submitted accurately and on time.`,
                    img: "undraw_thought_process_re_om58.png"
                },
            ]
        }
    },
    computed: {
        activeClass() {
            return this.edited ? 'active-panel-edited' : 'active-panel-normal';
        }
    }
}
</script>

<style>
/* content style is here */

#green-card {
    padding: 15px;
}

.green-card {
    margin-top: 40px;
}

.green-card-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #222222;
}

.green-card-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    color: #111827;
}

/*  green card style is here*/

.expansion {
    max-width: 440px;
}

#green-card .active-panel-normal {
    background-color: rgba(65, 114, 160, 0.1) !important;
    min-height: 200px;
}

.green-card-inner .expansion-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    color: #111827;
    padding-left: 37px;
    padding-bottom: 0;
}

.green-card-inner .expansion-title .title-span {
    background: #4172A0 !important;
    max-width: 3px;
    left: 40px;
    left: 37px;
    height: 20px;
    margin-right: 18px;
}

.green-card-inner .expansion-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 25px;
    color: #1F2937;
    /* margin-top: -13px; */
    padding: 0 50px 0px 35px;
    border-radius: 5px 5px 5px 5px;
}

.green-card-inner .expansion-text::before {
    content: '';
    position: absolute;
    background: #4172A0;
    width: 3px;
    left: 37px;
    margin-top: -30px;
    height: 155px;
}

.green-card-img {
    margin-left: 150px;
}

/* media queries is here */
@media screen and (min-width:1900px) {
    .green-card-inner{
        padding-left: 200px;
        
    }
    .green-card-img{
        margin-left: 300px;
        
    }
}
@media screen and (max-width:1000px) {
    .green-card-img {
        margin-left: 50px;
    }
}
@media screen and (max-width:960px) {
    .green-card-img {
        float: right;
    }
}
@media screen and (max-width:600px) {
    .green-card {
    margin-top: 0px;
}
}
@media screen and (max-width:440px) {
    .green-card-img {
        max-width: 300px !important;
        height: 300px;
    }
}
</style>

