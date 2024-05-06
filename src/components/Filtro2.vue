<template>

    <PrincipalView>

        <!-- https://www.datos.gov.co/resource/r86y-229a.json?$where=sexo_feme%20%3E%200 (URL SEXO > 0) -->
        <div v-if="datosCargados" class="col-start-3 col-end-11 justify-left flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 ml-4"> 

            <div class="mt-2 p-2 flex flex-row w-2/3 space-x-6"> 

                <select id="periodo" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    
                    <option selected disabled value> Periodo </option>
                    <option v-for='periodo in opcionesSetPeriodos' :key="periodo" :value="periodo"> {{ periodo }} </option>
            
                </select>

                <select id="opciones" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    
                    <option selected disabled value> Opción </option>
                    <option value="sexo_feme"> Sexo Femenino </option>
                    <option value="sexo_masc"> Sexo Masculino </option>
                    <option value="total_matricula"> Total inscritos </option>

                </select>

            
            </div>

            <div>

                <button @click="consultar" id="btnConsultar2" type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Consultar </button>

            </div>

        </div>

        <div class="flex flex-col space-y-2 md:space-y-0 md:space-x-4 mx-6 h-auto mt-2 mb-4">
            <canvas id="myChart" width="400" height="200"></canvas>
        </div>

    </PrincipalView>

</template>


<script setup>

import Chart from 'chart.js/auto';
import axios from 'axios';
import { ref, onMounted } from 'vue'
import PrincipalView from "@/views/PrincipalView.vue"

const data = ref([])
const datosCargados = ref(false);
const url = 'https://www.datos.gov.co/resource/r86y-229a.json';
const opcionesSetPeriodos = new Set();

let defaultPeriodoValue = null;
let defaultOpcionesValue = null;
let myChart;


onMounted(loadData);

async function loadData() {

    try {

        const response = await axios.get(url);
        data.value = response.data;
        opcionesSelect();
        datosCargados.value = true; 

    } catch (error) {

        console.error('Error al cargar los datos:', error);

    }
}


function opcionesSelect() {

    data.value.forEach(fila => opcionesSetPeriodos.add(fila.periodo));

}


async function consultar() {

    const select1 = document.getElementById("periodo");
    const select2 = document.getElementById("opciones");

    defaultPeriodoValue = select1.options[0].value; // Almacenar el valor de la primera opción
    defaultOpcionesValue = select2.options[0].value; // Almacenar el valor de la primera opción

    if (select1 !== null && select1 !== undefined && select1.value !== '') {
        if (select2 !== null && select2 !== undefined && select2.value !== '') {
            const urltemp = `${url}?periodo=${select1.value}&&$where=${select2.value}>0`;

            console.log(urltemp);

            try {

                const response = await axios.get(urltemp);
                const labels = response.data.map(item => item.programa);
                const values = response.data.map(item => parseInt(item[select2.value]));
                renderChart(labels, values, select2.value);

                select1.value = defaultPeriodoValue;
                select2.value = defaultOpcionesValue;

            } catch (error) {

                console.error('Error al obtener los datos:', error);

            }
        } else {

            console.log("Error: El segundo selector no tiene un valor seleccionado.");

        }

    } else {

        console.log("Error: El primer selector no tiene un valor seleccionado.");
    }
}


function renderChart(labels, values, selectValue) {
    const ctx = document.getElementById('myChart').getContext('2d');
    if (myChart) {
        myChart.destroy(); // Destruir la instancia anterior del gráfico si existe
    }

    const backgroundColors = generateBackgroundColors(values.length);
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: `Total de inscritos por carrera universitaria`,
                data: values,
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 25
                    },
                    grid: {
                        display: false // Esta línea elimina las líneas de la cuadrícula en el eje y
                    }
                },
                x: {
                    grid: {
                        display: false // Esta línea elimina las líneas de la cuadrícula en el eje x
                    },
                    ticks: {
                        font: {
                            weight: 'bold', // Establecer el peso de la fuente en negrita para los nombres de las carreras
                            color: 'black'
                        }
                    }
                }
            }
        }
    });
}

function generateBackgroundColors(length) {
    const colors = [
        'rgba(255, 99, 132, 0.2)', // Color para la primera barra
        'rgba(54, 162, 235, 0.2)', // Color para la segunda barra
        'rgba(255, 206, 86, 0.2)', // Color para la tercera barra
        'rgba(75, 192, 192, 0.2)', // Color para la cuarta barra
        'rgba(153, 102, 255, 0.2)', // Color para la quinta barra
        'rgba(255, 159, 64, 0.2)', // Color para la sexta barra
        'rgba(255, 99, 132, 0.4)', // Color adicional
        'rgba(54, 162, 235, 0.4)', // Color adicional
        'rgba(255, 206, 86, 0.4)', // Color adicional
        'rgba(75, 192, 192, 0.4)', // Color adicional
        'rgba(153, 102, 255, 0.4)', // Color adicional
        'rgba(255, 159, 64, 0.4)' // Color adicional
    ];
    const backgroundColors = [];
    for (let i = 0; i < length; i++) {
        backgroundColors.push(colors[i % colors.length]); // Repetir el patrón de colores cíclicamente
    }
    return backgroundColors;
}

</script>

