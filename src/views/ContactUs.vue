<template>
    <div>
        <!-- Fb Process Hero Section is here -->
        <ContactHeroSection />
        <!-- ContactUs Form is here-->
        <ContactUsForm />
    </div>
</template>

<script>

import ContactHeroSection from "@/components/contact_components/ContactHeroSection.vue";
import ContactUsForm from "@/components/contact_components/ContactUsForm.vue";
export default {
    name: "ContactUs",
    components: {
        ContactHeroSection,
        ContactUsForm,
    },
    data() {
        return {
            pageTitle: 'Contact Us',
        }
    },
    mounted() {
        document.title = this.pageTitle;
    },
}

</script>