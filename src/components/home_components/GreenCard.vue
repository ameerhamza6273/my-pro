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
                <v-col cols="12" md="4" sm="12" xs="12" class="green-card-inner">
                    <v-expansion-panels accordion flat v-model="panel" class="expansion">
                        <v-expansion-panel v-for="(item, index) in jobArray" :key="index" :active-class="activeClass">
                            <v-expansion-panel-header hide-actions class="expansion-title">
                                <img :src="item.img" alt="user" class="green-card-img"> {{ item.title }}
                            </v-expansion-panel-header>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
                <!-- image is here -->
                <v-col cols="12" md="8" sm="12" xs="12" class="green-card-inner2">
                    <div v-for="(item, index) in jobArray" :key="index">
                        <div v-if="index == panel" >
                            <p class="green-card-inner-text">{{ item.text }}</p>
                        </div>
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
                    img: "Green job.png"
                },
                {
                    title: "Pay the fee",
                    text: `Navigating the complex world of immigration law can be overwhelming, especially regarding the fees involved. 
                    At Ambar Immigration, we make it easy for you to pay the necessary fees for your application.`,
                    img: "Green fee.png"
                },
                {
                    title: "File PERM",
                    text: `Filing for a PERM or labor certificate is critical. Our experienced immigration attorneys can assist you with this process, ensuring that your application
                     is complete and error-free that all requirements are met.`,
                    img: "Green perm.png"
                },
                {
                    title: "File I-140",
                    text: `The I-140 petition is the next step in the employment-based green card process. Our team can help you file this petition, ensuring all required documentation
                     is submitted accurately and on time.`,
                    img: "Green 140.png"
                },
                {
                    title: "Consular Processing",
                    text: `Adjustment of status and consular processing are the final steps in the employment-based green card process. We can help you navigate these complex processes
                     and ensure all required documentation is submitted accurately and on time.`,
                    img: "Green proces.png"
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

#green-card .active-panel-normal {
    background: rgba(65, 114, 160, 0.10);
    border-radius: 8px !important;
    margin-top: 10px;
}
.v-expansion-panel--active > .v-expansion-panel-header {
    margin-top: 0px !important;
}
.green-card-inner .expansion-title {
    color: var(--gray-500, #6B7280);
    font-size: 20px;
    font-family: "Poppins";
    line-height: 20px;
    color: #111827;
    border-radius: 8px !important;
    background: rgba(224, 224, 224, 0.10);
    margin-top: 10px;
}

.green-card-inner .green-card-inner-text {
    color: var(--gray-900, #111827);
    font-size: 20px;
    font-family: 'Poppins';
    line-height: 34px;
}
.green-card-inner2{
    margin-top: 14%;
    padding: 10px 50px;
}
.green-card-img {
    max-width: 30px;
    margin-right: 20px;
}

/* media queries is here */
@media screen and (min-width:1900px) {
    #green-card {
    margin-right: 100px;
}
    .green-card-inner {
        padding-left: 200px;
    }
    .green-card-inner2{
    margin-top: 10%;
    padding: 10px 100px;
}
}

@media screen and (max-width:600px) {
    .green-card {
        margin-top: 0px;
    }
}

@media screen and (max-width:440px) {

}
</style>

