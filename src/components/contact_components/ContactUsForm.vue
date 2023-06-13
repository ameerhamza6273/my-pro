<template>
    <div>
        <v-container>
            <div class="contact-form">
                <div>
                    <h1 class="contact-form-title">CONTACT INFORMATION</h1>
                    <v-row class="mt-13">
                        <v-col cols="12" sm="6">
                            <p class="contact-form-blue-text">PHONE</p>
                            <p class="contact-form-text">+1 (864) 770 4251</p>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <p class="contact-form-blue-text">EMAIL</p>
                            <p class="contact-form-text d-none d-md-flex" >info@ambarimmigration.com</p>
                            <p class="contact-form-text d-flex d-md-none">info @ambarimmigration .com</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <p class="contact-form-blue-text">OFFICE ADDRESS</p>
                            <p class="contact-form-text pr-10">500 E McBee Ave., Greenville, SC 29601, United States</p>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <p class="contact-form-blue-text">MEETING ADDRESS</p>
                            <p class="contact-form-text">1016 Old Boiling Springs Rd, Greer, SC 29650, United States</p>
                        </v-col>
                    </v-row>
                </div>
                <h1 class="contact-form-title mt-10">CONTACT US</h1>
                <v-form class="mt-6">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <label class="label-style">FIRST NAME</label>
                            <v-text-field class="input-style" placeholder="Amelia" outlined></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <label class="label-style">LAST NAME</label>
                            <v-text-field class="input-style" placeholder="Watson" outlined></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <label class="label-style">EMAIL ADDRESS</label>
                            <v-text-field class="input-style" placeholder="example@mail.com" outlined></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <label class="label-style">PHONE NUMBER</label>
                            <v-text-field class="input-style" placeholder="123 - 456 - 7890" outlined></v-text-field>
                        </v-col>
                    </v-row>
                    <label class="label-style">Message</label>
                    <v-textarea class="input-style" auto-grow placeholder="Message here" outlined rows="5"></v-textarea>
                    <v-btn class="contact-form-btn">Submit</v-btn>
                </v-form>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "contactUsForm",
    data() {
        return {
            // 
        }
    }
}

</script>
<style>
/* style is here */
.contact-form {
    padding: 10px;
    padding-bottom: 0;
}

.contact-form-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 45px;
    color: #222222;
}

.contact-form-blue-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 23px;
    line-height: 35px;
    letter-spacing: 0.25em;
    color: #4172A0;
    margin-bottom: 10px !important;
}

.contact-form-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 30px;
    color: #222222;
    max-width: 470px;
}

.contact-form .label-style {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #222222;
}

.contact-form .input-style {
    border-radius: 15px !important;
    margin-top: 10px !important;
}

.contact-form .input-style .v-input__control .v-input__slot {
    background-color: #F7F7F7;
}

.contact-form .v-text-field>.v-input__control>.v-input__slot fieldset {
    border-color: #F7F7F7 !important;
}

.contact-form .v-input--is-focused .v-input__slot {
    border: 2px solid #4172A0 !important;
}

.contact-form .input-style .v-input__control .v-text-field__slot {
    padding: 15px !important;
}

.contact-form .input-style::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #6B7280;
    opacity: 0.75;
}

.contact-form-btn {
    margin: 0 auto;
    display: block;
    padding: 7px 60px !important;
    width: 150px;
    height: 60px !important;
    background-color: #041E42 !important;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF !important;
    text-transform: capitalize;
    margin-top: 20px;
}

/* media queries is here */
@media screen and (min-width:1900px) {

    .contact-form {
        margin-left: 190px;
        margin-right: 175px;
    }
}
</style>