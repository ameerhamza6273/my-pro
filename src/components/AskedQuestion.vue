<template>
    <div id="question">
        <v-container>
            <!-- asked question content is here -->
            <div class="asked-question">
                <div class="asked-question-heading">Frequently Asked Questions (FAQs)</div>
                <p class="asked-question-text mt-3">What our clients usually asked about our services and process.</p>
            </div>
            <!-- exponansion panel is here -->
            <v-row class="asked-question-expansion justify-center">
                <v-expansion-panels accordion flat v-model="panel">
                    <v-expansion-panel class="asked-question-expansion-style mt-7" v-for="(item, index) in expansionArray"
                        :key="index" :active-class="activeClass">
                        <v-expansion-panel-header class="asked-question-expansion-title" @click="marker = !marker">
                            {{ item.title }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="asked-question-expansion-text">
                            {{ item.text }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    name: "AskedQuestion",
    data() {
        return {
            marker: true,
            panel: 0,
            // array of object for expansion panels is here
            expansionArray: [
                {
                    title: "What is the EB3 program?", text: `The EB-3 Unskilled is a job-based immigration offered since 1990. 
                This program offers a US green card and the opportunity to come, work and live permanently in the United States.`},
                {
                    title: "What services does Ambar Immigration officer?", text: `The EB-3 Unskilled is a job-based immigration offered since 1990. 
                This program offers a US green card and the opportunity to come, work and live permanently in the United States.`},
                {
                    title: "Does Ambar Immigration help find the sponsor?", text: `The EB-3 Unskilled is a job-based immigration offered since 1990. 
                This program offers a US green card and the opportunity to come, work and live permanently in the United States.`},
                {
                    title: "How long does the EB-3 Unskilled process take?", text: `The EB-3 Unskilled is a job-based immigration offered since 1990. 
                This program offers a US green card and the opportunity to come, work and live permanently in the United States.`},
                {
                    title: "Do I have to do an interview with the employer?", text: `The EB-3 Unskilled is a job-based immigration offered since 1990. 
                This program offers a US green card and the opportunity to come, work and live permanently in the United States.`},
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

/* asked question style is here */
#question {
    margin-top: 70px;
    background-color: #041E42 !important;
    min-height: 830px;
    padding-bottom: 20px;
}

.asked-question-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 80px;
}

.asked-question-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.75;
}

/* expansion panel style is here */

.asked-question-expansion {
    max-width: 800px;
    margin: 0 auto;
    display: block;
    margin-top: 40px;
}

.asked-question-expansion-style {
    border-radius: 25px !important;
    box-shadow: 5px 20px 50px rgba(0, 0, 0, 0.05);
    padding: 3px !important;
}

.asked-question-expansion-title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 28px;
    color: #222222;
}

/* expansion panel icon style is here */
.v-application--is-ltr .v-expansion-panel-header__icon {
    border-radius: 50%;
    padding: 4px;
    border: 1px solid #4172A0;
}

.v-application--is-ltr .v-expansion-panel-header__icon .mdi-chevron-down{
    color: #4172A0 !important;
}

#question .active-panel-normal .v-expansion-panel-header__icon{
    background-color: #4172A0 !important;
}

#question .active-panel-normal .v-expansion-panel-header__icon .mdi-chevron-down{
    color: #FFFFFF !important;
}

.asked-question-expansion-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    color: #222222;
}
</style>