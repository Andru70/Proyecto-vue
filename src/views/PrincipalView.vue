
<template>

      <!-- Header Component -->
      <Header/>
      
      <!-- Div Padre Sección 2 -->
      <div class="grid grid-cols-10 mt-4 p-2 pr-4"> 

        <!-- Nav Component -->
        <Nav/>

        <!-- Main Component -->
        <!-- <Main/> -->
        
        <div class="col-start-3 col-end-11 justify-center border-4 border-double border-black rounded-lg w-full"> 

          <slot></slot>

        </div>

      </div>

      <!-- Footer Component -->
      <Footer/>

</template>


<script setup>

import { RouterLink, RouterView } from 'vue-router'

import Header from '@/components/Header.vue';

import Nav from '@/components/Nav.vue'

// import Main from '@/components/Main.vue'

import Footer from '@/components/Footer.vue'

</script>
