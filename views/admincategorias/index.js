let tasks = [];


const addTask = async () => {
    //input de categoria
    const taskInput = document.getElementById('taskInput');
    //input de precio
    const priceInput = document.getElementById('priceInput');
    //input de categoria
    const taskText = taskInput.value.trim();
    const taskPrice = priceInput.value.trim();

    const { data } = await axios.post('/api/admincategorias', { text: taskText, price: taskPrice });
    console.log(data);
    //comparo precio y categoria
    if (taskText !== '' && taskPrice !== '') {
        tasks.push({ text: taskText, price: taskPrice, isEditing: false });
        taskInput.value = '';
        priceInput.value = '';
        renderTasks();
    }
}

(async () => {
    try {
        const { data } = await axios.get('/api/admincategorias'); 
        console.log(data);

        tasks = data;
        renderTasks();
    } catch (error) {
        window.location.pathname = '/login'  
    }  
})();

function editTask(index) {
    tasks[index].isEditing = true; 
    
    
    renderTasks();
}

async function saveTask(index) {
    const taskText = document.getElementById(`editInput${index}`).value.trim();
    const taskPrice = document.getElementById(`editPrice${index}`).value.trim();
    console.log(taskPrice);
    console.log(taskText);
    
    
    if (taskText !== '' && taskPrice !== '') {
        tasks[index].text = taskText;
        tasks[index].price = taskPrice;
        tasks[index].isEditing = false;
        renderTasks();
    }

    const category = tasks[index];

        try {
            const { data } = await axios.put(`/api/admincategorias/${category.id}`, { text: taskText, price: taskPrice });
    console.log(data);
            console.log(data);
            
        } catch (error) {
         console.log(error);
            
        }
    }
    



async function  deleteTask(index) {
    const category = tasks[index];
    console.log(category);
    console.log(category.id);
    


    try{
       const {data}= await axios.delete(`/api/admincategorias/${category.id}`);
        console.log('enviado datos',data);
        

            // Actualizar la lista de tareas
        tasks.splice(index);
        renderTasks();

    }catch(error){
        console.log(error);
        alert('Error al eliminar la categoría');
    }


}


function renderTasks() {
    const taskList = document.getElementById('taskList');
    console.log(taskList);
    
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center p-3 bg-gray-100 rounded shadow-sm';
        if (task.isEditing) {
            li.innerHTML = `
                <input id="editInput${index}" type="text" class="w-full p-2 border border-gray-300 rounded" value="${task.text}">
                <input id="editPrice${index}" type="number" class="w-full p-2 border border-gray-300 rounded ml-2" value="${task.price}">
                <button onclick="saveTask(${index})" class="ml-2 bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300">Guardar</button>
            `;
        } else {
            li.innerHTML = `
                <span class="flex-1">${task.text} - $${task.price}</span>
                <div class="flex space-x-2">
                    <button onclick="editTask(${index})" class="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300">Editar</button>
                    <button onclick="deleteTask(${index})" class="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300">Eliminar</button>
                </div>
            `;
        }
        taskList.appendChild(li);
    });
}


