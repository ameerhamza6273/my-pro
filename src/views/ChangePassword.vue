<template>
    <div>
        <v-responsive>
            <!-- image column is here -->
        <v-row class="change-password">
            <v-col cols="12" md="4" sm="12" class="change-password-frame1">
                <div class="change-password-content">
                    <img src="logo_footer.png" alt="user" class="change-password-img">
                    <h1 class="change-password-heading">Access Your Green Card Journey</h1>
                    <p class="change-password-text">Login or Sign Up to access your personalized green card journey with Ambar
                        Immigration. By logging in
                        or signing up, you can take advantage of our tailored services, track your application progress, and
                        receive important updates and notifications. Join us today and let us guide you towards achieving
                        your green card and realizing your American Dream.</p>
                </div>
            </v-col>
            <!-- form column is here -->
            <v-col cols="12" md="8" sm="12">
                <div class="change-password-inner">
                    <h1 class="change-password-inner-title">Password Reset </h1>
                    <v-form class="change-password-form">
                        <label class="label-style">Email</label>
                        <v-text-field class="input-style" placeholder="someone@ambar.com" outlined></v-text-field>
                        <v-row>   
                        <v-checkbox color="indigo" hide-details size="4" class="ml-3"></v-checkbox>
                        <p class="label-style mt-5" style="font-size: 14px; line-height: 24px;">I agree to the <span style="text-decoration: underline;color: #4172A0;">Terms & Conditions</span></p>
                        </v-row> 
                        <v-btn class="change-password-btn">Submit</v-btn>
                    </v-form>
                </div>
            </v-col>
        </v-row>
    </v-responsive>
    </div>
</template>

<script>

export default {
    name: "ChangePassword",
    data() {
        return {
            // 
        }
    },
}

</script>

<style>
/* style is here */
.change-password-frame1 {
    background-image: url("@/assets/Rectangle\ 465.png") !important;
    min-height: 104vh;
    background-position: center;
    background-size: cover;
    position: relative;
}

.change-password-content {
    position: absolute;
    top: 40%;
    left: 30%;
    transform: translate(-20%, -20%);
}

.change-password-img {
    max-width: 135px;
    margin: 0 auto !important;
    display: block;
}

.change-password-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 15px;
}

.change-password-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.9;
    margin-top: 13px;
}

/* change-password inner style is here */

.change-password-inner {
    padding-top: 180px !important;
    padding-bottom: 70px !important;
}

.change-password-inner-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    color: #041E42;
    text-align: center;
}

.change-password-inner .label-style {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #222222;
    justify-content: center;
}

.change-password-inner .input-style {
    border-radius: 15px !important;
    margin-top: 10px !important;
    width: 400px;
}

.change-password-inner .change-password-form {
    display: table;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}

.change-password-inner .input-style .v-input__control .v-input__slot {
    background-color: #F7F7F7;
    margin-bottom: 0;
}

.change-password-inner .v-text-field>.v-input__control>.v-input__slot fieldset {
    border-color: #F7F7F7 !important;
}

.change-password-inner .v-input--is-focused .v-input__slot {
    border: 2px solid #4172A0 !important;
}

.change-password-inner .input-style .v-input__control .v-text-field__slot {
    padding: 10px !important;
}


.change-password-inner .input-style::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #6B7280;
    opacity: 0.75;
}


.change-password-inner .change-password-btn {
    margin: 0 auto;
    display: block;
    padding: 7px 60px !important;
    height: 50px !important;
    background-color: #041E42 !important;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF !important;
    text-transform: inherit;
    margin-top: 15px;
}
/* media quries is here */
@media screen and (max-width:960px) {
    .change-password-frame1{
        display: none;
    }
    .change-password{
    padding: 10px ;
}
}
@media screen and (max-width:420px) {
    .change-password .change-password-form {
        display: block;
        min-width: 210px !important;
        max-width: 450px;
    }
    
}

</style>