<template>
    <div>
        <!-- Fb Process Hero Section is here -->
       <EmployeHeroSection/>
       <!-- EmployeForm is here -->
       <EmployeForm/>
    </div>
</template>

<script>

import EmployeHeroSection from "@/components/employe_components/EmployeHeroSection.vue";
import EmployeForm from "@/components/employe_components/EmployeForm.vue";

export default{
    name: "EmployeService",
    components: {
        EmployeHeroSection,
        EmployeForm,
},
    data(){
        return{
            pageTitle:'Employer Services',
        }
    },
    mounted() {
        document.title = this.pageTitle;
    },
}

</script>