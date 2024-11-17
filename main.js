const input = document.querySelector('#input');
const add = document.querySelector('#add')
const list = document.querySelector('#list');


add.addEventListener('click', (e) => {
    // list.innerHTML += `<li class="itemList">${input.value}</li>`;
    if(input.value === '') return;
    addTask(input.value);
    input.value = '';

})



function addTask(value) {
    const task = document.createElement('li');
    const close = document.createElement('button');

    task.className = 'itemList';
    task.innerHTML = value;

    close.className = 'close';
    task.appendChild(close);
    
    close.addEventListener('click', e => {
        task.remove();
    })

    task.addEventListener('click', (e) => {
        task.classList.toggle('itemList-active');
    })

    list.appendChild(task);
}
