const navbar = document.querySelector('#navbar');

const createNaveHome = () => {
    navbar.innerHTML = `
        <div class="flex md:hidden">
            <button id="hamburger">
              <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
             
            </button>
        </div>
        <div class=" toggle  hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
            <a href="/signup" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Registrate
            </a>
            <a href="/login" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Login
            </a>
            <a href="#aboutus" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Frase
            </a>
            
        </div>
    
       
                 <div class="relative w-full h-[500px]" id="home">
            <div class="absolute inset-0 opacity-70">
               <img src="/images/dance.png"" alt="Background Image" class="object-cover object-center w-full h-full" />
        
            </div>
            <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
                <div class="md:w-1/2 mb-4 md:mb-0">
                    <h1 class="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Bailar es como <br>
                     soñar con los pies</h1>
                    <p class="font-regular text-xl mb-8 mt-4">¡No pierdas la oportunidad de inscribirte <br>
                     en las mejores competencias de baile!</p>
                </div>
            </div>
        </div>
        
        
         <section class="py-10" id="services">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">PARTICIPA YA!</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/images/hiphop.png" alt="wheat flour grinding"
                            class="w-full h-64 object-cover">
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-medium text-gray-800 mb-2">SIENTE LA MUSICA</h3>
                            <p class="text-gray-700 text-base">CUANDO BAILAS PUEDES DISFRUTAR DEL LUJO DE SER TU MISMO</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/images/salsa.png" alt="salsa"
                            class="w-full h-64 object-cover">
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-medium text-gray-800 mb-2">DISFRUTALA</h3>
                            <p class="text-gray-700 text-base">LA DANZA ES EL LENGUAJE OCULTO DEL ALMA</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/images/presentacion.png" alt="Coffee"
                            class="w-full h-64 object-cover">
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-medium text-gray-800 mb-2">ERES ARTE AL BAILAR</h3>
                            <p class="text-gray-700 text-base">LA DANZA NO ES MAS QUE EL REFLEJO DE LO QUE NUESTRO CUERPO CONVIERTE EN ARTE
        
                            </p>
        
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/images/urbano.png" alt="Coffee"
                            class="w-full h-64 object-cover">
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-medium text-gray-800 mb-2">LA MEJOR CONEXION</h3>
                            <p class="text-gray-700 text-base"> ES BAILE ES UNA DE LAS FORMAS MAS PERFECTAS DE COMUNICACION CON LA INTELIGENCIA INFINITA
                            </p>
                        </div>
                    </div> 
                    
                    <div
                        class="bg-white rounded-lg bg-gradient-to-tr shadow-lg overflow-hidden min-h-full">
                        <div class="text-center text-white font-medium"></div>
                        <img src="/images/grupo.png" alt="Coffee"
                            class="w-full h-64 object-cover rounded-t-lg">
                        <div class="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                            <h3 class="text-xl font-medium text-gray-800 mb-2">SER MEJOR CADA DIA</h3>
                            <p class="text-gray-700 text-base">
                                LA DANZA NO ESTA EN EL PASO, SINO ENTRE PASO A PASO
                            </p>
                        </div>
                    </div>
        
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/images/ballet.png" alt="papad"
                            class="w-full h-64 object-cover">
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-medium text-gray-800 mb-2">VIVE EL BAILE</h3>
                            <p class="text-gray-700 text-base">EL BAILE PUEDE REVELAR TODO EL MISTERIO QUE LA MUSICA CONCEDE
                            </p>
                        </div>
                    </div>
        
                </div>
            </div>
        </section> 
        
       
         <section class="bg-gray-100" id="aboutus">
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div class="max-w-lg">
                        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">FRASE</h2>
                        <p class="mt-4 text-gray-600 text-lg">
                           El baile es una forma de expresión artística y cultural que ha sido parte de la humanidad desde tiempos remotos. A través del movimiento rítmico del cuerpo, el baile permite transmitir emociones, contar historias y celebrar tradiciones. Es una manifestación de la creatividad humana y una manera única de comunicarse sin palabras. Cada estilo de baile tiene sus propias características y técnicas distintivas, lo que hace que cada uno sea una expresión única de la cultura y la identidad de un grupo o comunidad.</p>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <img src="/images/frase.png" alt="About Us Image" class="object-cover rounded-lg shadow-md">
                    </div>
                </div>
            </div>
        </section>

       
        
        
   
`;
};

const createNaveBailes = () => {
    navbar.innerHTML = `
        
        <div class=" toggle  hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
            <button id="close-btn" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Cerrar Sesion</button>
            
            
        </div>
    
    
`;
};


if (window.location.pathname === '/'){
    createNaveHome();
} else if (window.location.pathname === '/bailes/'){
    createNaveBailes();
}


const closeBtn = navbar.children[0].children[0];
closeBtn.addEventListener('click', async e => {
    
    
    try {
        await axios.get('/api/logout');
        window.location.pathname = '/login';
    } catch (error) {
       console.log(error);
        
    }
    
    
});

    

