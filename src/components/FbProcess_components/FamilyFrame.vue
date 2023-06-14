<template>
    <div>
        <v-container>
            <!-- family frame title & text is here -->
            <div class="family-frame">
                <h1 class="family-frame-heading">Family of EB-3 Visa Holders</h1>
                <p class="family-frame-text">If your I-140 petition is approved, your spouse and unmarried children under the age of 21 may be eligible to apply for admission to the United States
                     in EW4 (spouse of an “other worker”), and EW5 (child of an “other worker”).</p>
                     <v-btn class="family-frame-btn">Apply Now</v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: "prevailingFrame",
    components: { carousel },
    data() {
        return {
        //    
        }
    }
}
</script>

<style>

/* style is here */

.family-frame {
    padding: 15px;
    margin-top: 40px;
}

.family-frame-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #222222;
}

.family-frame-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    color: #111827;
    margin-top: 13px !important;
}

.family-frame-btn{
    margin: 0 auto;
    display: block;
    padding: 27px 50px;
    width: 190px;
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
    margin-top: 40px;
}
/* media quries is here */
@media screen and (min-width:1900px) {
    .family-frame{
        margin-left: 165px;
        margin-right: 145px;
    }
}
</style>