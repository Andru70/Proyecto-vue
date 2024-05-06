
<template>

    <!-- Div Izquierda -->
    <div class="col-span-2 bg-gray-50 border-4 border-double border-black rounded-lg ml-2 mr-3.5 p-2 w-72 h-96 flex flex-col menu-container"> 
        
        <!-- Div Menú Principal -->
       <div class="flex items-center justify-center mt-2 mb-4 "> <p class="font-semibold text-lg"> Menú Principal </p> </div> 

            <div class="flex flex-col items-center justify-center pt-2 px-4 ">  

                <!-- <RouterLink to="/filtrouno">Filtro de Datos 1</RouterLink>
                <RouterLink to="/test">Filtro de Datos 2</RouterLink> -->

                <router-link to="/filtrouno" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Filtro de Datos 1 </router-link>

                <div class="mb-1"></div>

                <router-link to="/filtrodos" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Filtro de Datos 2 </router-link>
                
            </div>
     
     </div>


</template>


<script setup>

import { RouterLink } from 'vue-router'

</script>

