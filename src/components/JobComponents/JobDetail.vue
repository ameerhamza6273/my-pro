<template>
    <div id="job-detail">
        <v-container>
            <div class="job-detail">
                <h1 class="job-detail-title">Empowering Foreign Workers for a New Beginning</h1>
                <p class="job-detail-text">Design comps, layouts, wireframes—will your clients accept that you go about
                    things
                    the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that
                    huge, huge no no to forswear forever.</p>
                <p class="job-detail-text">The toppings you may chose for that TV dinner pizza slice when you forgot to shop
                    for foods, the paint you may slap on your
                    face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say,
                    there are some redeeming factors in
                    favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.
                </p>
            </div>
            <div class="job-terms">
                <h3 class="job-terms-title">uncertain terms that Lorem Ipsum is that hu</h3>
                <img class="job-terms-image" src="Job Detail (1).png" alt="user">
                <p class="job-terms-text mt-14">Design comps, layouts, wireframes—will your clients accept that you go about
                    things the facile way? Authorities in our business will tell in no
                    uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.</p>
                <p class="job-terms-text "> The toppings you may chose for that TV dinner pizza slice when you forgot to
                    shop
                    for foods, the paint you
                    may slap on your face to impress the new boss is your business. But what about your daily bread? Not so
                    fast, I'd say, there are some
                    redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take
                    into consideration.</p>
                <p class="job-terms-text"> Not so fast, I'd say, there are some redeeming factors in favor of greeking text,
                    as its use is merely the
                    symptom of a worse problem to take into consideration. </p>
                <p class="job-terms-text mb-14"> Design comps, layouts, wireframes—will your clients accept that you go
                    about
                    things the facile way? Authorities in our business will tell in
                    no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.</p>
            </div>
            <div class="job-terms">
                <img class="job-terms-image" src="Job Detail (2).png" alt="user">
                <p class="job-terms-text mt-14">Design comps, layouts, wireframes—will your clients accept that you go about
                    things the facile way? Authorities in our business will tell in no
                    uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.</p>
                <p class="job-terms-text "> The toppings you may chose for that TV dinner pizza slice when you forgot to
                    shop
                    for foods, the paint you
                    may slap on your face to impress the new boss is your business. But what about your daily bread? Not so
                    fast, I'd say, there are some
                    redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take
                    into consideration.</p>
                <p class="job-terms-text"> Not so fast, I'd say, there are some redeeming factors in favor of greeking text,
                    as its use is merely the
                    symptom of a worse problem to take into consideration. </p>
                <p class="job-terms-text"> Design comps, layouts, wireframes—will your clients accept that you go about
                    things the facile way? Authorities in our business will tell in
                    no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "JobDetail",
    data() {
        return {
        //   
        }
    }
}

</script>
<style>
/* style is here */
#job-detail {
    padding: 15px;
}

.job-detail-title {
    margin: 30px 100px 50px 100px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 82px;
    line-height: 100px;
    text-align: center;
    color: #111827;
}

.job-detail-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #222222;
    margin-top: 20px !important;
}

.job-terms-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    color: #222222;
    margin-top: 20px;
    margin-bottom: 15px !important;
}

.job-terms-image {
    width: 1000px;
    margin: 0 auto;
    display: block;
}

.job-terms-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #222222;
}

/* media queries is here */
@media screen and (min-width:1900px) {
    #job-detail {
        margin-left: 330px;
        margin-right: 330px;
    }
   
}

@media screen and (max-width:1260px) {
    .job-terms-image {
        width: 750px;
    }
}

@media screen and (max-width:960px) {
    .job-detail-title {
        margin: 30px 40px 50px 40px;
        font-weight: 600;
        font-size: 60px;
        line-height: 80px;
    }

    .job-terms-image {
        width: 700px;
    }
}

@media screen and (max-width:800px) {
    .job-terms-image {
        width: 600px;
    }
    
}

@media screen and (max-width:660px) {
    .job-detail-title {
        margin: 30px 10px 50px 10px;
        font-weight: 600;
        font-size: 45px;
        line-height: 60px;
    }

    .job-terms-image {
        width: 500px;
    }
}

@media screen and (max-width:550px) {
    .job-terms-image {
        width: 400px;
        height: 200px;
    }
}

@media screen and (max-width:450px) {
    .job-terms-image {
        width: 300px;
        height: 150px;
    }
   
}</style>