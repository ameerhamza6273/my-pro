<template>
    <div>
        <div class="job-hero-section">
           <!-- top bigimage section is here -->
        </div>
    </div>
</template>

<script>
export default {
    name: "JobHeroSection",
    data() {
        return {
            // 
        }
    }
}

</script>
<style>
/* style is here */
.job-hero-section {
    background-image: url("@/assets/Image\ Placeholder\ job.png") !important;
    min-height: 430px;
    background-position: cover;
    background-size: cover;
}

/* media queries is here */
@media screen and (min-width:1900px) {
    .job-hero-section {
    min-height: 650px;
}
}
@media screen and (max-width:960px) {
    .job-hero-section {
    min-height: 350px;
}
}
@media screen and (max-width:600px) {
    .job-hero-section {
    min-height: 280px;
}
}
@media screen and (max-width:460px) {
    .job-hero-section {
    min-height: 200px;
}
}
</style>