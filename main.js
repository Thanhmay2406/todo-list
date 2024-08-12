function addTask(task)
{
    let ul = document.getElementById('todo-list');
    let li = document.createElement('li'); //create li tab inside ul

    li.textContent = task;

    let delete_button = document.createElement('button');
    delete_button.textContent = "X";
    delete_button.style.width = '30px';
    delete_button.addEventListener('click' , function(){
        ul.removeChild(li);
    });

    li.addEventListener('click' , function(){
        li.classList.toggle('completed');
    });

    li.appendChild(delete_button);
    ul.appendChild(li);
}

document.getElementById('add-btn').addEventListener('click',function(){
    let input = document.getElementById('todo-input').value; //get value from text input
    if (input.trim()) // check if detete space front and back string has char
    {
        addTask(input);
        document.getElementById('todo-input').value ='';
    }
});