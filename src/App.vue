<script setup>
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";
import Home from "@/sections/Home.vue";
import Menu from "@/sections/Menu.vue";
import AboutUs from "@/sections/AboutUs.vue";
import Schedule from '@/sections/Schedule.vue'
import Footer from "./sections/Footer.vue";
import { onMounted, ref } from "vue";

const isLoading = ref(true);

onMounted (()=>{
  setTimeout(() => {
    isLoading.value = false; // Loading complete after 2 seconds
  }, 2000);
})

</script>
<template>
  <div class="container-fluid p-0">
    <!-- Display the loader while the project is loading -->
    <div v-if="isLoading" style="width: 100%;height: 100vh;" class="d-flex align-items-center justify-content-center">
      <Loading/>
    </div>

    <!-- Display the main content when loading is complete -->
    <div v-else>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div data-aos="fade-up" id="about" >
        <AboutUs />
      </div>
      <div data-aos="fade-up" id="menu" >
        <Menu />
      </div> 
      <div id="schedule">
        <Schedule />
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>


