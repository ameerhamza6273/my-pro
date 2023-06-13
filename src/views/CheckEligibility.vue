<template>
    <div>
        <!-- Fb Process Hero Section is here -->
       <CheckHeroSection/>
       <!-- Check Content is here-->
       <CheckContent/>
    </div>
</template>

<script>

import CheckHeroSection from "@/components/chech_eligib_components/CheckHeroSection.vue";
import CheckContent from "@/components/chech_eligib_components/CheckContent.vue";
export default{
    name: "CheckEligibility",
    components: {
        CheckHeroSection,
        CheckContent,
},
    data(){
        return{
           pageTitle:'Check Eligibility', 
        }
    },
    mounted() {
        document.title = this.pageTitle;
    },
}

</script>