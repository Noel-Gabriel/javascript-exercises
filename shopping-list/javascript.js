let ul = document.querySelector(".item-list");
let input = document.querySelector(".input");
let button = document.querySelector(".confirmation");

function buttonClicked() {
    let currentInput = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const delete_button = document.createElement("button");

    span.textContent = currentInput;
    span.style["margin"] = "12px";
    delete_button.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(delete_button);

    ul.appendChild(li);

    delete_button.onclick = () => li.remove();

    input.focus();
}

button.onclick = () => buttonClicked();