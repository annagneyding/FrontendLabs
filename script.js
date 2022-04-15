"use strict";

// обрабочик событий
window.addEventListener('load', () => {
    const form = document.querySelector("#new-todo-form");
    const input = document.querySelector("#new-todo-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // при отправке формы страница обновляться не будет 

        // TASK 

        const task = input.value;

        if (!task) {
            alert("Пожалуйста введите задачу..."); // если задачи нет, высылаем предупреждение
            return;
        }

        const task_el = document.createElement("div"); // константа для создания новой задачи
        task_el.classList.add("task");

        // CONTENT

        const task_content_el = document.createElement("div"); // константа для содержимого задачи
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        // INPUT 

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text"); // добавление класса текст
        task_input_el.type = "text";
        task_input_el.value = task; // введенная задача = задаче
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        // BUTTONS 

        const task_actions_el = document.createElement("div"); // константа для кнопок

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_edit_el); // д. метод вставляет элемент в конец родительского блока
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el); // в список элементов дабавляется задача

        input.value = '';

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus(); // установка курсора
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });


        let taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.classList.add('check');
        task_actions_el.appendChild(taskCheckbox);





    });

    const filterElements = document.querySelectorAll('input[name="filter"]');
    for (const filter of filterElements) {
        filter.addEventListener('change', (e) => {

            const listElements = document.querySelectorAll('div.task');
            for (let element of listElements) {
                element.style.display = 'flex';
            }
            console.log(e.target.value);

            switch (e.target.value) {
                case '1':
                    const checkedElements = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
                    for (let element of checkedElements) {
                        element.parentNode.parentNode.style.display = 'none';
                    }
                    break;
                case '2':
                    const notCheckedElements = document.querySelectorAll('input[type="checkbox"]:checked');
                    for (let element of notCheckedElements) {
                        element.parentNode.parentNode.style.display = 'none';
                    }
                    break;
                default:

            }

        });
    }


});