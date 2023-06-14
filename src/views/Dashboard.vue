<template>
    <v-app>
      <v-app-bar app flat class="app-bar-style" height="90">
        <!-- app bar logo is here -->
        <div>
          <img alt="Vuetify Logo" src="logo_ambar (1).svg" width="165" @click="Ammbar" style="cursor: pointer;"/>
        </div>
  
        <v-spacer></v-spacer>
        <!-- app bar links is here -->
        <router-link v-for="item in menubarTitle" :key="item.title" :to="item.path" class="d-none d-md-block router-link-style">
          <v-btn text color="#EBF7FB" class="router-style">
            <span class="links-style">{{ item.title }}</span>
          </v-btn>
        </router-link>
  
        <v-spacer></v-spacer>
        <!-- app bar login btn is here -->
        <v-btn class="login-btn d-none d-sm-flex" depressed><span>Log in</span></v-btn>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none" size="60"></v-app-bar-nav-icon>
      </v-app-bar>
      <!-- navigation drawer is here-->
      <v-navigation-drawer v-model="drawer" right app temporary>
        <v-list-item style="background-color: #041e42e7 ;">
          <v-list-item-content>
            <v-list-item-title >
              <img src="Vector (1).png" alt="user" width="10px" class="ml-7"> 
              <img src="Vector (2).png" alt="user" width="20px" class="ml-8"> 
              <img src="instagram.png" alt="user" width="17px" class="ml-8"> 
              <img src="whatsapp.png" alt="user" width="20px" class="ml-8"> 
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="item in menubarTitle" :key="item.title" link :to="item.path">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn class="login-btn d-sm-none d-md-flex" depressed><span>Log in</span></v-btn>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
      <FooterView />
    </v-app>
  </template>
  
  <script>
  import FooterView from '../components/FooterView.vue';
  export default {
    name: "App",
    components: {
      FooterView,
    },
    data: () => ({
      pageTitle: 'Ambar Immigration',
      drawer: false,
      // links and path array
      menubarTitle: [
        { title: 'Home', path: "/home" },
        { title: 'EB-3 Process', path: "/process" },
        { title: 'Jobs', path: "/jobs" },
        { title: 'Check Eligibility', path: "/checkEligibility" },
        { title: 'Employer Services', path: "/employerServices" },
        { title: 'Contact Us', path: "/contactUs" },
      ]
    }),
    methods:{
      Ammbar(){
        this.$router.push("/ambar");
      }
    },
    mounted() {
        document.title = this.pageTitle;
    },
  };
  </script>
  
  <style>
  .v-main{
    margin-top: -50px !important;
  }
  .app-bar-style {
    padding: 0 50px;
    background-color: #FFFFFF !important;
  }
  
  /* app bar links style */

.router-link-style{
  text-decoration: none !important;
}

  .router-style {
    height: 90px !important;
    border-radius: 0% !important;
  }
  
  .router-style .links-style {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: #111827;
    text-transform: capitalize;
    text-decoration: none;
  }
  
  /* app bar login btn style */
  .login-btn {
    background-color: #041E42 !important;
    color: #FFFFFF !important;
    border-radius: 6px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    padding: 19px 32px !important;
    height: 50px !important;
  }
  
  /* active link style */
  .router-link-exact-active .router-style {
    background-color: rgba(4, 30, 66, 0.1);
    border-bottom: 2px solid #041E42 !important;
    font-weight: 800;
    color: #041E42 !important;
  }
  /* media queries is here */
  
  @media screen and (min-width:1900px) {
    .app-bar-style {
      padding: 0 100px !important;
    }
  }
  @media screen and (max-width:1200px) {
    .router-style .links-style {
      font-weight: 300;
      font-size: 12px;
    }
  }
  @media screen and (max-width:1150px) {
    .app-bar-style {
      padding: 0 20px !important;
    }
  }
  
  @media screen and (max-width:1050px) {
    .app-bar-style {
      padding: 0 10px !important;
    }
    .router-style .links-style {
      font-size: 11px;
    }
  }
  @media screen and (max-width:900px) {
    .app-bar-style {
      padding: 0 40px !important;
    }
  }
  @media screen and (max-width:600px) {
    .login-btn{
      margin-left: 13px;
      padding: 15px 25px !important;
    height: 40px !important;
    }
  }
  </style>