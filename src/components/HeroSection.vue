<template>
    <div>
        <div class="hero-section">
            <!-- hero section content is here -->
            <p class="hero-section-text">Now could be the PERFECT time to start your</p>
            <h1 class="hero-section-heading">US Green Card</h1>
            <h6 class="hero-section-subheading mt-6">jOURNEY</h6>
            <div class="hero-section-small-text">
                We have a vast experience in EB-3 Unskilled hiring and immigration process.
                Our clients are our top priority and we have built a platform with the needs of our clients in focus so
                that they can find the latest job opportunities that lead to a US green card.</div>
            <!-- hero section button is here -->
            <div class="text-center">
                <v-btn class="hero-section-btn">Apply Now</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroSecion",
    data() {
        return {
            // 
        }
    }
}
</script>

<style>
/* hero section style is here */
.hero-section {
    background-image: url("../assets/ImagePlaceholder.png") !important;
    min-height: 680px;
    background-position: cover;
    background-size: 100% 100%;
    padding-bottom: 95px;
}

.hero-section .hero-section-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-size: 21px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 5px 20px 50px rgba(0, 0, 0, 0.05);
    padding-top: 95px;
    opacity: 0.8;
}

/* hero section heading is here */
.hero-section .hero-section-heading {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 650;
    font-size: 150px;
    line-height: 110px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 5px 20px 50px rgba(0, 0, 0, 0.1);
}

/* hero section subheading is here */
.hero-section-subheading {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 29px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 5px 20px 50px rgba(0, 0, 0, 0.05);
}

/* hero section small text is here */
.hero-section .hero-section-small-text {
    font-family: 'Poppins';
    font-style: normal;
    font-size: 15px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 35px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 51%;
    opacity: 0.9;
}

/* hero section button style is here */
.hero-section .hero-section-btn {
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
    margin-top: 60px;
}

/* media queries start from here */
@media screen and (min-width:1900px) {
    .hero-section .hero-section-text {
    font-size: 24px;
    padding-top: 150px;
}

/* hero section heading is here */
.hero-section .hero-section-heading {
    font-weight: 650;
    font-size: 170px;
    line-height: 150px;
}

/* hero section small text is here */
.hero-section .hero-section-small-text {
    font-size: 15px;
    margin-top: 60px;
    max-width: 42%;
}
.hero-section .hero-section-btn {
        margin-top: 90px;
        margin-bottom: 50px;
    }
}
@media screen and (max-width:960px) {
    .hero-section .hero-section-heading {
        font-size: 123px;
        line-height: 130px;
    }

    .hero-section .hero-section-small-text {
        max-width: 70%;
    }
}

@media screen and (max-width:600px) {
    .hero-section {
        min-height: 680px;
        background-position: bottom;
        background-size: cover;
        padding-bottom: 120px;
    }

    .hero-section .hero-section-heading {
        font-size: 95px;
        line-height: 80px;
    }

    .hero-section .hero-section-text {
        font-size: 26px;
        font-weight: normal !important;
    }

    .hero-section-subheading {
        font-weight: normal;
        font-size: 27px;
    }

    .hero-section .hero-section-small-text {
        max-width: 85%;
        font-size: 18px;
    }

    .hero-section .hero-section-btn {
        margin-top: 80px;
    }
}

@media screen and (max-width:520px) {

    .hero-section .hero-section-heading {
        font-size: 75px;
    }

    .hero-section .hero-section-text {
        font-size: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .hero-section-subheading {
        font-size: 23px;
    }

    .hero-section .hero-section-small-text {
        max-width: 90%;
        font-size: 18px;
    }
}

@media screen and (max-width:420px) {
    .hero-section .hero-section-heading {
        font-size: 65px;
        line-height: 70px;
    }

    .hero-section .hero-section-text {
        font-size: 17px;
    }

    .hero-section-subheading {
        font-size: 24px;
        line-height: 0px;
        margin-bottom: 50px;
    }
}</style>