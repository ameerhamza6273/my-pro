<template>
    <div>
        <!-- Fb Process Hero Section is here -->
       <JobHeroSection/>
       <!-- Job Detail section is here-->
       <JobDetail/>
       <!-- Job Crousel is here -->
       <JobCrousel/>
      <!-- Job Cards is here-->
      <JobCards/>
    </div>
</template>

<script>

import JobHeroSection from '@/components/JobComponents/JobHeroSection.vue';
import JobDetail from '@/components/JobComponents/JobDetail.vue';
import JobCrousel from '@/components/JobComponents/JobSlider.vue';
import JobCards from '@/components/JobComponents/JobCards.vue';

export default{
    name:"JobView",
    components: {
        JobHeroSection,
        JobDetail,
        JobCrousel,
        JobCards,
},
    data(){
        return{
            pageTitle:'Jobs', 
        }
    },
    mounted() {
        document.title = this.pageTitle;
    },
}

</script>