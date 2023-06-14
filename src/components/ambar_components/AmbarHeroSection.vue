<template>
    <div>
        <!-- ambar hero image is here -->
        <div class="ambar">
            <p class="ambar-small-title">Your Path to a New Life</p>
            <h1 class="ambar-title">Ambar Immigration</h1>
        </div>
        <v-container>
            <!-- ambar content text is here -->
            <div class="ambar-inner">
                <p class="ambar-text">
                    The United States has always had labor shortages, which have become more severe in recent years.
                    Businesses and industries of all sizes
                    face unprecedented challenges in finding enough workers to fill openings. Ambar Immigration is a team of
                    experienced and dedicated immigration attorneys passionate about helping people achieve their dreams of
                    living and getting an EB 3 Unskilled Worker Visa to work in the United States. We understand that the
                    immigration process can be complex and confusing, so we are here to make it as easy as possible for
                    you.We offer a wide range of immigration services, including:<br/>
                <ul>
                    <li>Family-based immigration</li>
                    <li>Employment-based immigration</li>
                    <li> Investor immigration</li>
                    <li>Refugee and asylum cases</li>
                    <li>Deportation defense</li>
                    <li>Naturalization</li>
                </ul>
                    We have a proven track record of success in helping our clients achieve their immigration goals. We have
                    helped thousands obtain green cards, visas, and other immigration benefits.We are committed to providing
                    our clients with the highest quality legal representation and customer service. We can answer your
                    questions and provide the information you need to make informed decisions about your immigration case.If
                    you are looking for an experienced and dedicated immigration attorney, contact Ambar Immigration today.
                    We will help you achieve your dreams of living and working in the United States.
                </p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "AmbarHeroSection",
    data() {
        return {
            // 
        }
    }
}

</script>
<style>
/* style is here */
.ambar {
    background-image: url("@/assets/Image\ Placeholder\ ambar.png") !important;
    min-height: 430px;
    background-position: cover;
    background-size: cover;
}

.ambar-small-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    font-size: 25px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 5px 20px 50px rgba(0, 0, 0, 0.05);
    padding-top: 130px;
}

.ambar-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 650;
    font-size: 150px;
    line-height: 120px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 5px 20px 50px rgba(0, 0, 0, 0.1);
}

.ambar-inner {
    padding: 10px;
}

.ambar-text {
    margin-top: 37px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #222222;
}

/* media queries is here */
@media screen and (min-width:1900px) {
    .ambar {
        min-height: 650px;
    }

    .ambar-small-title {
        padding-top: 280px;
    }
    .ambar-inner{
        margin-left: 190px;
        margin-right: 175px;
    }
}

@media screen and (max-width:1100px) {
    .ambar-small-title {
        padding-top: 150px;
    }

    .ambar-title {
        font-size: 110px;
        line-height: 80px;
    }
}

@media screen and (max-width:960px) {
    .ambar {
        min-height: 350px;
    }

    .ambar-small-title {
        padding-top: 110px;
    }
}

@media screen and (max-width:800px) {
    .ambar-small-title {
        padding-top: 150px;
        font-size: 20px;
        line-height: 30px;
    }

    .ambar-title {
        font-size: 80px;
        line-height: 60px;
    }
}

@media screen and (max-width:600px) {
    .ambar {
        min-height: 280px;
    }

    .ambar-small-title {
        padding-top: 100px;
        font-size: 15px;
        line-height: 20px;
    }

    .ambar-title {
        font-size: 60px;
        line-height: 50px;
    }
}

@media screen and (max-width:460px) {
    .ambar {
        min-height: 200px;
    }

    .ambar-small-title {
        padding-top: 60px;
        font-size: 13px;
        line-height: 20px;
    }

    .ambar-title {
        font-size: 48px;
        line-height: 30px;
    }

}
</style>