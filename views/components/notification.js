const div = document.querySelector('#notification');


export const createNotification = (isError, message) => {
    
    if (isError) {
        div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 flex justify-end">
            <p class="bg-red-700 rounded-lg font-bold p-4 w-3/12">${message}</p>
        </div>   
    </div>
    ` 
    } else {

    div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 flex justify-end">
            <p class="bg-green-500 rounded-lg font-bold p-4 w-3/12">${message}</p>
        </div>   
    </div>
    `
    }

}
