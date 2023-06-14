<template>
    <div>
        <v-responsive>
        <v-row class="login">
            <!-- image column is here -->
            <v-col cols="12" md="4" sm="12" class="login-frame1">
                <div class="login-content">
                    <img src="logo_footer.png" alt="user" class="login-img">
                    <h1 class="login-heading">Access Your Green Card Journey</h1>
                    <p class="login-text">Login or Sign Up to access your personalized green card journey with Ambar
                        Immigration. By logging in
                        or signing up, you can take advantage of our tailored services, track your application progress, and
                        receive important updates and notifications. Join us today and let us guide you towards achieving
                        your green card and realizing your American Dream.</p>
                </div>
            </v-col>
            <!-- form column is here -->
            <v-col cols="12" md="8" sm="12">
                <div class="login-inner">
                    <!-- form title is here -->
                    <h1 class="login-inner-title">Log in to Ambar</h1>
                    <p class="login-inner-text">Don’t have an account? <span class="login-inner-bluetext">Sign in
                            here</span></p>
                    <!-- google $ facebook buttons -->
                    <div class="login-inner-btns">
                        <v-btn class="login-inner-btn" outlined><img src="Logo (1).png" alt="user" width="17px"
                                class="mr-2"> Log in with Google</v-btn>
                        <v-btn class="login-inner-btn" outlined id="btn2"><img src="Logo (2).png" alt="user" width="17px"
                                class="mr-2">Log in with Facebook</v-btn>
                    </div>
                    <v-divider class="mt-5 mb-3"></v-divider>
                    <p class="line">OR</p>
                    <!-- form is here -->
                    <v-form class="login-form">
                        <label class="label-style">Email</label>
                        <v-text-field class="input-style" placeholder="someone@ambar.com" outlined></v-text-field>
                        <label class="label-style">Password</label>
                        <v-text-field class="input-style" placeholder="***********" outlined hint="Forgot Password?"
                         append-icon="mdi-eye-off" persistent-hint></v-text-field>
                        <v-btn class="login-btn" @click="login">Log in</v-btn>
                    </v-form>
                </div>
            </v-col>
        </v-row>
    </v-responsive>
    </div>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            // 
        }
    },
    methods:{
        login(){
            this.$router.push("/home");
        }
    }
}

</script>

<style>
/* style is here */
.login-frame1 {
    background-image: url("@/assets/Rectangle\ 465.png") !important;
    min-height: 104vh;
    background-position: center;
    background-size: cover;
    position: relative;
}

.login-content {
    position: absolute;
    top: 40%;
    left: 30%;
    transform: translate(-20%, -20%);
}

.login-img {
    max-width: 135px;
    margin: 0 auto !important;
    display: block;
}

.login-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 15px;
}

.login-text {
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

/* login inner style is here */

.login-inner {
    padding-top: 70px !important;
}

.login-inner-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    color: #041E42;
    text-align: center;
}

.login-inner-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #9CA3AF;
    margin-top: 10px;
    margin-bottom: 10px !important;
}

.login-inner-bluetext {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #4172A0;
}

.login-inner-btn {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px !important;
    line-height: 20px;
    text-transform: inherit;
    border: 1px solid #E0E0E9;
    border-radius: 10px;
    margin: 0 15px;
    padding-right: 50px !important;
}

.login-inner-btns {
    text-align: center;
}

.login-inner .v-divider{
        display: none ;
    }

.login-inner .line {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 30px;
    color: #9CA3AF;
    text-align: center;
    margin-top: 15px;
}

.login-inner .line::before,
.login-inner .line::after {
    display: inline-block;
    content: "";
    border-top: 1px solid #9ca3afb4 !important;
    transform: rotate(-180deg);
    width: 14rem;
    margin: -10px 1rem;
    transform: translateY(-1rem);
    top: 20px;
}
/* form style is here */
.login-inner .label-style {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #222222;
    justify-content: center;
}

.login-inner .input-style {
    border-radius: 15px !important;
    margin-top: 10px !important;
}

.login-inner .login-form {
    display: table;
    margin-left: auto;
    margin-right: auto;
    min-width: 510px !important;
}

.login-inner .input-style .v-input__control .v-input__slot {
    background-color: #F7F7F7;
    margin-bottom: 0;
}
.login-inner .input-style .v-input__control .v-input__slot {
    background-color: #F7F7F7;
    margin-bottom: 0;
}

.login-inner .v-text-field>.v-input__control>.v-input__slot fieldset {
    border-color: #F7F7F7 !important;
}

.login-inner .v-input--is-focused .v-input__slot {
    border: 2px solid #4172A0 !important;
}

.login-inner .input-style .v-input__control .v-text-field__slot {
    padding: 15px !important;
}

.login-inner .input-style::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #6B7280;
    opacity: 0.75;
}

.login-inner .input-style .v-messages__message {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 12px;
    color: #4172A0;
    margin-top: 8px !important;
    margin-left: -10px !important;
}
.login-inner .input-style .mdi-eye-off::before {
    margin-right: 25px !important;
    font-size: 0.8em;
}
.login-inner .login-btn {
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
    .login-frame1{
        display: none;
    }
    .login{
        padding: 15px;
    }
}
@media screen and (max-width:570px) {
    .login-inner .login-form {
        display: block;
        min-width: 210px !important;
        max-width: 450px;
    }
    .login-inner .line {
      display: none;
    }
    .login-inner .v-divider{
        display: block;
        margin: 0 7%;
    }
    #btn2{
        margin-top: 15px;
    }
    .login-inner-btns{
        margin-top: 25px;
    }
  
}
@media screen and (max-width:500px) {
    .login-inner .v-divider{
        display: block;
        margin: 0 0%;
    }
}
</style>