<template>
    <div>
        <!-- hero section image is here -->
        <div class="check-eligibil">
            <h1 class="check-eligibil-title">Ambar Blogs</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "CheckHeroSection",
    data() {
        return {
            // 
        }
    }
}

</script>
<style>
/* style is here */
.check-eligibil {
    background-image: url("@/assets/Image\ Placeholder\ Check.png") !important;
    min-height: 430px;
    background-position: cover;
    background-size: cover;
}

.check-eligibil-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 650;
    font-size: 153px;
    line-height: 140px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 5px 20px 50px rgba(0, 0, 0, 0.1);
    padding-top: 175px;
}

/* media queries is here */
@media screen and (min-width:1900px) {
    .check-eligibil {
    min-height: 650px;
}
    .check-eligibil-title {
        font-size: 200px;
    line-height: 180px;
    padding-top: 280px;
    }
}
@media screen and (max-width:960px) {
    .check-eligibil {
    min-height: 350px;
}
    .check-eligibil-title {
        font-size: 110px;
        line-height: 130px;
        padding-top: 130px;
    }
}
@media screen and (max-width:600px) {
    .check-eligibil {
    min-height: 280px;
}
    .check-eligibil-title {
        font-size: 95px;
        line-height: 80px;
        padding-top: 120px;
    }
}
@media screen and (max-width:460px) {
    .check-eligibil {
    min-height: 200px;
}
    .check-eligibil-title {
        font-size: 65px;
        line-height: 70px;
        padding-top: 80px;
    }
}
</style>