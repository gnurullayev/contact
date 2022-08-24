const elForm = document.querySelector(".form");
const elInputName = elForm.querySelector(".js-name-input");
const elInputLastname = elForm.querySelector(".js-lastname-input");
const elInputPhone = elForm.querySelector(".js-phone-input");
const elList = document.querySelector(".js-list");

//check
let todos = JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : [];

// setList locolStorage
function setTodoList() {
    localStorage.setItem("list", JSON.stringify(todos))
}

//Show todo list
function showTodoList () {
    elList.innerHTML = null;

    todos.forEach((item,i) => {
        elList.innerHTML += `
            <li class="list-group-item list-group-item-info text-secondary d-flex justify-content-between align-items-center">
                <span class="name-span">${item.name}</span>
                <span class="lastname-span">${item.lastName}</span>
                <a class="phone-link" href=tel:${item.phone} >${item.phone}</a>
                <button onclick = (deletItem(${i})) class="btn btn-danger">Delete</button>
            </li>
        `
    });
}
showTodoList()

// addTodos
elForm.addEventListener("submit",function (e) {
    e.preventDefault()

    todos.push({
        name: elInputName.value.trim(),
        lastName: elInputLastname.value.trim(),
        phone: elInputPhone.value.trim()
    })

    elForm.reset()
    setTodoList()
    showTodoList()
})

function deletItem(id) {
    console.log(id);
    let deletTodos = todos.filter((item,i) => {
        return id !== i
    })

    todos = deletTodos;
    setTodoList()
    showTodoList()
}


