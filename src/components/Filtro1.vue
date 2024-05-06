
<template>

    <PrincipalView>

        <div v-if="datosCargados" class="col-start-3 col-end-11 justify-left flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 ml-4"> 

            <div class="mt-2 p-2 flex flex-row w-2/3 space-x-6"> 

                <select id="periodo" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    
                    <option selected disabled value> Periodo </option>
                    <option v-for='periodo in opcionesSetPeriodos' :key="periodo" :value="periodo"> {{ periodo }} </option>
                   
                </select>

                <select id="facultad" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    
                    <option selected disabled value> Facultad </option>
                    <option v-for='facultad in opcionesSetFacultades' :key="facultad" :value="facultad"> {{ facultad }} </option>

                </select>

                <select id="programa" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    
                    <option selected disabled value> Programa </option>
                    <option v-for='programa in opcionesSetProgramas' :key="programa" :value="programa"> {{ programa }} </option>

                </select>

                
            </div>

            <div>

                <button @click="consultar" id="btnConsultar" type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Consultar </button>

            </div>

        </div>


        <div class="flex flex-col space-y-2 md:space-y-0 md:space-x-4 mx-6 h-auto mt-2 mb-4">

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-300">

                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs font-semibold text-white bg-blue-600 ">
                        <tr>

                            <th scope="col" class="px-6 py-3">
                                Periodo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Facultad
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Programa
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='fila in dataTable' class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                           
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ fila.periodo }}
                            </th>
                            <td class="px-6 py-4">
                                {{ fila.facultad }}
                            </td>
                            <td class="px-6 py-4">
                                {{ fila.programa }}
                            </td>
                            
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>

    </PrincipalView>


</template>


<script setup>

import axios from 'axios';
import { ref, onMounted, computed } from 'vue'
import PrincipalView from "@/views/PrincipalView.vue"

const data = ref([]);
const dataTable = ref([]);
const datosCargados = ref(false);
const url = 'https://www.datos.gov.co/resource/r86y-229a.json';

var opcionesSetPeriodos = new Set();
var opcionesSetFacultades = new Set();
var opcionesSetProgramas = new Set();

let select1, select2, select3; 
let defaultPeriodoValue = null;
let defaultFacultadValue = null;
let defaultProgramaValue = null;



// Cargar datos al montar el componente
onMounted(loadData);

// Función para cargar los datos
async function loadData() {

    try {

        const response = await axios.get(url);

        data.value = response.data
        opcionesSelect();
        datosCargados.value = true; 
        
    } catch (error) {

        console.error('Error al cargar los datos:', error);
    }
}


// Función para seleccionar opciones únicas
function opcionesSelect() {

    data.value.forEach(fila => {
        opcionesSetPeriodos.add(fila.periodo);
        opcionesSetFacultades.add(fila.facultad);
        opcionesSetProgramas.add(fila.programa);
    });

    // Convertir Set a Array y ordenar alfabéticamente
    const facultadesArray = Array.from(opcionesSetFacultades).sort((a, b) => a.localeCompare(b));
    const programasArray = Array.from(opcionesSetProgramas).sort((a, b) => a.localeCompare(b));
    
    // Limpiar los Sets
    opcionesSetFacultades.clear();
    opcionesSetProgramas.clear();
    
    // Llenar los Sets con los arrays ordenados
    facultadesArray.forEach(facultad => opcionesSetFacultades.add(facultad));
    programasArray.forEach(programa => opcionesSetProgramas.add(programa));

}


// Función para consultar datos
function consultar() {

    select1 = document.getElementById("periodo")
    select2 = document.getElementById("facultad")
    select3 = document.getElementById("programa")

    defaultPeriodoValue = select1.options[0].value; // Almacenar el valor de la primera opción
    defaultFacultadValue = select2.options[0].value; // Almacenar el valor de la primera opción
    defaultProgramaValue = select3.options[0].value; // Almacenar el valor de la primera opción

    var urltemp;
    var parametersCount = 0;
    

    if (select1 !== null && select1 !== undefined && select1.value !== '') {
        
        urltemp = url.concat("?","periodo=", select1.value );
        
        parametersCount++;

    }


    if (select2 !== null && select2 !== undefined && select2.value !== '') {

        if(parametersCount == 0){

            var paramEncoded = encodeURIComponent(select2.value)
            urltemp = url.concat("?","facultad=", paramEncoded);
      
            
        }else if(parametersCount == 1){

            var paramEncoded = encodeURIComponent(select2.value)
            urltemp = urltemp.concat("&","facultad=", paramEncoded );

        }

        parametersCount++;

    }
   

    if (select3 !== null && select3 !== undefined && select3.value !== '') {

        if(parametersCount == 0){

            var paramEncoded = encodeURIComponent(select3.value)
            urltemp = url.concat("?","programa=", paramEncoded);

        }else if(parametersCount > 0){

            var paramEncoded = encodeURIComponent(select3.value)
            urltemp = urltemp.concat("&","programa=", paramEncoded );

        }

        parametersCount++;

    }

    console.log(urltemp)


    if (parametersCount > 0) {

        getData(urltemp).
            then(data => {
                // console.log(data); 
                dataTable.value = data;
                select1.value = defaultPeriodoValue;
                select2.value = defaultFacultadValue;
                select3.value = defaultProgramaValue;
        
            })
            .catch(error => {
                console.error(error);
        });
        
    }else{
        alert("Debe seleccionar al menos una opcion válida en alguno de los filtros disponibles")
    }
}


async function getData(urltemp) {

    try {

        var tempResponse = await axios.get(urltemp);
        return tempResponse.data;
        
    }catch (error) {

        console.error(error);

    }

}


</script>