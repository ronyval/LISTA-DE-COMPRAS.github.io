function addItem() {
    var inputField = document.getElementById("itemInput");
    var inputValue = inputField.value;
    if (inputValue === '') {
        alert("Por favor, ingresa un ítem válido.");
    } else {
        var itemList = document.getElementById("itemList");
        var listItem = document.createElement("li");
        listItem.innerHTML = `<span onclick="toggleItem(this)">${inputValue}</span>`;
        itemList.appendChild(listItem);
        inputField.value = '';
    }
}

function toggleItem(item) {
    item.classList.toggle("completed");
}
