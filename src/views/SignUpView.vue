

<template>

    <section class="absolute w-full h-full">
          
        <div class="container mx-auto px-4 h-full">
            <div class="flex content-center items-center justify-center h-full mx-4">

                <div class="w-full lg:w-4/12 px-4">

                    <div class="relative flex flex-col w-full mb-6 bg-blue-300 shadow-xl rounded-lg border-4 border-black border-double">
                                    
                        <div class="flex-auto lg:px-8 py-10 pt-3">
                                        
                            <div class=" text-center mb-3 font-bold">

                                <div class="flex content-center items-center justify-center bg-inherit rounded-lg mt-4 h-full" > 

                                 <img alt="User logo" class="logo" src="@/assets/userlogo.png" width="32" height="32" />

                                </div>

                                <p class="font-extrabold text-3xl mt-4 mb-5"> Sign Up </p>
                                            
                            </div>

                                <form>

                                    <div class="relative w-full mb-3">
                                        <input
                                        type="text"
                                        class="bg-white text-gray-700 border-0 px-3 py-3 rounded-full text-sm shadow-md focus:outline-none focus:ring w-full"
                                        placeholder="First Name"
                                        />
                                    </div>

                                    <div class="relative w-full mb-3">
                                        <input
                                        type="text"
                                        class="bg-white text-gray-700 border-0 px-3 py-3 rounded-full text-sm shadow-md focus:outline-none focus:ring w-full"
                                        placeholder="Last Name"
                                        />
                                    </div>

                                    <div class="relative w-full mb-3">
                                        <input
                                        type="email"
                                        class="bg-white text-gray-700 border-0 px-3 py-3 rounded-full text-sm shadow-md focus:outline-none focus:ring w-full"
                                        placeholder="Email"
                                        />
                                    </div>

                                    <div class="relative w-full mb-3">

                                        <input
                                        type="password"
                                        class="bg-white text-gray-700 border-0 px-3 py-3 rounded-full text-sm shadow focus:outline-none focus:ring w-full mb-3"
                                        placeholder="Password"
                                        style="transition: all 0.15s ease 0s;"
                                        />

                                    </div>

                                    <div class="text-center mt-6">
                                        
                                        <button
                                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                        type="button"
                                        style="transition: all 0.15s ease 0s;">
                                            Sign Up
                                        </button>

                                    </div>

                                    <div class="text-center mt-6">

                                        <button
                                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                        type="button"
                                        style="transition: all 0.15s ease 0s;">
                                            <RouterLink to="/"> Back </RouterLink>
                                        </button>

                                    </div>
                                        
                                </form>

                            </div>

                        </div>
                </div>

            </div>

        </div>

    </section>

   
</template>