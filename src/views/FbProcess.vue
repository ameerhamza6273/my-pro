<template>
    <div>
        <!-- Fb Process Hero Section is here -->
        <HeroSection/>
        <!-- Prevailing Frame is here -->
        <PrevailingFrame/>
        <!-- Family Frame is here -->
        <FamilyFrame/>
    </div>
</template>
<script>

import HeroSection from '@/components/FbProcess_components/ProcessHeroSection.vue';
import PrevailingFrame from '@/components/FbProcess_components/PrevailingFrame.vue';
import FamilyFrame from '@/components/FbProcess_components/FamilyFrame.vue';

export default{
    name:"FbProcess",
    components: {
    HeroSection,
    PrevailingFrame,
    FamilyFrame,
},
    data(){
        return{
            pageTitle:'FB- Process', 
        }
    },
    mounted() {
        document.title = this.pageTitle;
    },
}

</script>
<style>

</style>