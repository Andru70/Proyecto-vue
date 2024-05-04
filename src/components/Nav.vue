
<template>

    <!-- Div Izquierda -->
    <div class="col-span-2 bg-gray-50 border-4 border-double border-black rounded-lg ml-2 mr-3.5 p-2 w-72 h-96 flex flex-col menu-container"> 
        
        <!-- Div Menú Principal -->
       <div class="flex items-center justify-center"> <p class="font-semibold text-lg"> Menú Principal </p> </div> 

       <div class="flex flex-col items-center justify-center pt-2 px-4 ">  

        
           <!-- <RouterLink to="/filtrouno">Filtro de Datos 1</RouterLink>
           <RouterLink to="/test">Filtro de Datos 2</RouterLink> -->

           <router-link to="/filtrouno"> Filtro de Datos 1 </router-link>
           <router-link to="/filtrodos"> Filtro de Datos 2 </router-link>
          
       </div>
     
     </div>


</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

