<template>
    <div>
        <v-container>
            <div class="employe-form">
                <!-- employe form is here -->
                <h1 class="employe-form-title">CONTACT US</h1>
                <v-form class="mt-11">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <label class="label-style">FIRST NAME</label>
                            <v-text-field class="input-style" placeholder="Amelia" outlined></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <label class="label-style">EMAIL ADDRESS</label>
                            <v-text-field class="input-style" placeholder="amelia@mail.com"
                                outlined></v-text-field>
                        </v-col>
                    </v-row>
                    <label class="label-style">Message</label>
                    <v-textarea class="input-style" auto-grow placeholder="Message here" outlined rows="5"></v-textarea>
                    <v-btn class="employe-form-btn">Submit</v-btn>
                </v-form>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "EmployeForm",
    data() {
        return {
            // 
        }
    }
}

</script>
<style>
/* style is here */
.employe-form {
    padding: 10px;
    padding-bottom: 0;
}

.employe-form-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 45px;
    color: #222222;
}

.employe-form .label-style {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #222222;
}

.employe-form .input-style {
    border-radius: 15px !important;
    margin-top: 10px !important;
}

.employe-form .input-style .v-input__control .v-input__slot {
    background-color: #F7F7F7;
}
.employe-form .v-text-field > .v-input__control > .v-input__slot fieldset {
  border-color: #F7F7F7 !important;
}
.employe-form .v-input--is-focused .v-input__slot {
  border: 2px solid #4172A0 !important;
}

.employe-form .input-style .v-input__control .v-text-field__slot {
    padding: 15px !important;
}

.employe-form .input-style::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #6B7280;
    opacity: 0.75;
}
.employe-form-btn{
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

    .employe-form {
        margin-left: 190px;
        margin-right: 175px;
    }
}


</style>