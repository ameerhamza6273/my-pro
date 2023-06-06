<template>
  <div>
    <v-responsive>
    <!-- hero section is here -->
    <HeroSection />
    <!-- bottom section of hero is here -->
    <FrameBrands />
    <!-- apply frame is here -->
    <ApplyFrame/>
    <!-- green card is here -->
    <GreenCard/>
    <!-- IndividualFrame is here -->
    <IndividualFrame/>
    <!-- Testimonial is here -->
    <Testimonial/>
    <!-- ClientFrame is here -->
    <ClientFrame/>
    <!-- Confidevce js here -->
    <Confidence/>
    <!-- Question is here -->
    <AskedQuestion/>
    <!-- ImagesNavigater is here -->
    <ImagesNavigater/>
  </v-responsive>
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import FrameBrands from "../components/FrameBrands.vue";
import ApplyFrame from "@/components/ApplyFrame.vue";
import GreenCard from "@/components/GreenCard.vue";
import IndividualFrame from "@/components/IndividualFrame.vue";
import Testimonial from "@/components/Testimonial.vue";
import ClientFrame from "@/components/ClientFrame.vue";
import Confidence from "@/components/Confidence.vue";
import AskedQuestion from "@/components/AskedQuestion.vue";
import ImagesNavigater from "@/components/ImagesNavigater.vue";

export default {
  name: "Home",

  components: {
    HeroSection,
    FrameBrands,
    ApplyFrame,
    GreenCard,
    IndividualFrame,
    Testimonial,
    ClientFrame,
    Confidence,
    AskedQuestion,
    ImagesNavigater,
  },

};
</script>
