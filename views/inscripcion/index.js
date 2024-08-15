// Seleccion de los elementos en el html
const form = document.querySelector('#form');
const formBtn = document.querySelector('#form-btn');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const telefonoInput = document.querySelector('#telefono-input');
const edadInput = document.querySelector('#edad-input');
const categoriasInput = document.querySelector('#categorias-select');

const EMAI_VALIDATION = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const NAME_VALIDATION = /^[A-Z][a-zA-Z-ÿí\u00f1\u00d1]+(\s*[A-Z][a-zA-Z-ÿí\u00f1\u00d1]*)$/;
const TELEFONO_VALIDATION =  /^[0](212|412|414|424|416|426)[0-9]{7}$/;;
const EDAD_VALIDATION = /^\S[0-9]{1,1}$/;

//Validation
let nombreValidation = false;
let emailValidation = false;
let telefonoValidation = false;
let edadValidation = false;

const validation = (input, regexValidation) => {
    formBtn.disabled = nombreValidation && emailValidation && telefonoValidation && edadValidation ? false : true;
    console.log(nombreValidation && emailValidation && telefonoValidation && edadValidation );

    if (input.value === ''){
        input.classList.remove('outline-red-700', 'outline-2', 'outline');
        input.classList.remove('outline-green-700', 'outline-2', 'outline'); 
        input.classList.add('focus:outline-blue-300');
    } else if (regexValidation) {
        input.classList.remove('focus:outline-blue-300');
        input.classList.add('outline-green-700', 'outline-2', 'outline');
    } else {
        input.classList.remove('focus:outline-blue-300');
        input.classList.remove('outline-green-700', 'outline-2', 'outline');
        input.classList.add('outline-red-700', 'outline-2', 'outline');
    } 
};

// Eventos de los inputs

nameInput.addEventListener('input', e => {
    nombreValidation = NAME_VALIDATION.test(e.target.value);
    validation(nameInput, nombreValidation)
});

emailInput.addEventListener('input', e => {
    emailValidation = EMAI_VALIDATION.test(e.target.value);
    validation(emailInput, emailValidation)
});

telefonoInput.addEventListener('input', e => {
    telefonoValidation = TELEFONO_VALIDATION.test(e.target.value);
    validation(telefonoInput, telefonoValidation)
});

edadInput.addEventListener('input', e => {
    edadValidation = EDAD_VALIDATION.test(e.target.value);
    validation(edadInput, edadValidation)
});

// Assuming you have an array of tasks
const tasks = await axios.get('/api/admincategorias'); 
console.log(tasks);

// Get the select element
const categoriasIn = document.querySelector('#categorias-select');

// Loop through the tasks array and create options for each task
tasks.data.forEach(task => {
  const option = document.createElement('option');
  option.value = task.id;
  option.textContent = task.text;

  // Append the option to the select element
  categoriasIn.appendChild(option);
});

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const newInscrito = {
            nombre: nameInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            edad: edadInput.value,
            categorias: categoriasInput.value,
        }  
        console.log(newInscrito);
        
        const response = await axios.post('/api/inscritos', newInscrito);
        console.log(response);
        
    } catch (error) {
       console.log(error);
        
    }
   
});






