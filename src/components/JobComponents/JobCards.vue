<template>
    <div id="job-card">
        <v-container>
            <div>
                <p class="job-card-text">P O P U L A R T O P I C S</p>
                <v-row>
                    <v-col cols="12" sm="9" class="pl-0">
                        <h1 class="job-card-title ml-4">Ambar Blogs</h1>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <span class="job-card-link d-none d-sm-flex">See More Articles</span>
                    </v-col>
                </v-row>
            </div>
            <v-row class="job-all-cards">
                <v-col cols="12" sm="6">
                    <v-card flat class="job-card">
                        <v-img src="Image Placeholder blue.png" alt="user" class="job-card-img align-end">
                            <v-card-title class="ml-n3">
                                <v-avatar size="42">
                                    <img alt="user" src="Image Placeholder pro.png">
                                </v-avatar>
                                <p class="ml-4 Image-title white--text">Angus Smith</p>
                            </v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card flat class="job-card">
                        <v-img src="Image Placeholder agre.png" alt="user" class="job-card-img align-end">
                            <v-card-title class="ml-n3">
                                <v-avatar size="42">
                                    <img alt="user" src="Image Placeholder pro.png">
                                </v-avatar>
                                <p class="ml-4 Image-title white--text">Angus Smith</p>
                            </v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    name: "JobCards",
    data() {
        return {
            //    
        }
    }
}
</script>

<style>
#job-card {
    margin-top: 90px;
}

.job-card-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 30px;
    color: #4997D3;
}

.job-card-title {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 100px;
    color: #222222;
}

.job-card-link {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    float: right;
    text-decoration-line: underline;
    color: #4172A0;
    margin-top: 40px;
    margin-right: 10px;
}

.job-all-cards{
    margin-top: 30px;
}
</style>