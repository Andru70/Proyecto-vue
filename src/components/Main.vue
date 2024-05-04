
<template>

    <!-- Contenedor de Estadísticas y otra información -->
    <div class="col-start-3 col-end-11 justify-center border-4 border-double border-black rounded-lg w-full"> 

        <router-view />
        <!-- <div class="border-2 border-black rounded-lg mx-9 mt-5 p-4 h-auto"> 

          <p class="font-semibold text-lg"> Stats </p> 
          
          <div class="flex justify-center items-center h-full">
            
            <div class="w-5/6">

              Aquí importa y utiliza el componente BarChart 
             <BarChart :labels="labels" :data="salesData" />

            </div>

          </div>
          
        </div>

        <div class="flex justify-center mt-5 mb-5"> 

          <div class="col-span-3 border-2 border-black w-2/5 p-4 mx-10 h-80 rounded-lg font-semibold"> Info </div>
          <div class="col-span-3 border-2 border-black w-2/5 p-4 mx-10 h-80 rounded-lg font-semibold"> Info 2 </div>

        </div>
       -->
      </div>

    
</template>


<script setup>

import { RouterLink, RouterView } from 'vue-router'


</script>
