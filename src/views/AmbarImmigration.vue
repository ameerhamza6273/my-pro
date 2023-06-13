<template>
    <div>
      <!-- Ambar Hero Section -->
        <AmbarHeroSection/>
        <!-- Ambar Cards -->
        <AmbarCards/>
    </div>
</template>

<script>
import AmbarHeroSection from "@/components/ambar_components/AmbarHeroSection.vue";
import AmbarCards from "@/components/ambar_components/AmbarCards.vue";
export default{
    name: "AmbarImmigration",
     components: {
        AmbarHeroSection,
        AmbarCards,
},
    data(){
        return{
            pageTitle:'Ambar Immigration',
        }
    },
    mounted() {
        document.title = this.pageTitle;
    },
}

</script>
<style>

</style>