let items = [];
function addItem() {
    const itemName = document.querySelector('#itemName').value;

    let item = {
        name: itemName,
        checked: false
    };
    items.push(item);

    document.querySelector('#itemName').value = '';
}

function showItemsList() {
    const sectionlist = document.querySelector(".list");
    sectionlist.textContent = "";

items.sort((itemA, itemB) => Number (itemA.checked) - Number(itemB.checked));

    items.map((item, index) => {
        sectionlist.innerHTML += `
        <div class="item">
            <div>
                <input type="checkbox" name="list" id='item-${index}'  ${item.checked && "checked"}>
                <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                    <img src="./assets/assets/checked.svg" alt="checked">
                </div>
                <label for="item-${index}" onclick="checkItem('${item.name}')">${item.name}</label>
            </div>
            <button onclick="removeItem('${item.name}')">
                <img src="./assets/assets/trash-icon.svg" alt="trash icon">
            </button>
        </div>
        `;
    });

    localStorage.setItem('items', JSON.stringify(items));
}

function removeItem(itemName) {
    const itemIndex = items.findIndex(item => item.name === itemName);
    const divwarning = document.querySelector('.warning');

    divwarning.classList.remove('hide-warning');

    setTimeout(() => {
        divwarning.classList.add('hide-warning');
    }, 4000);


    if (itemIndex > -1) {
        items.splice(itemIndex, 1);
    }   
    showItemsList();


}
 function addideWarningClass() {
    document.querySelector('.warning').classList.add('hide-warning');
}
function checkItem(itemName) {
    const item=items.find(item => item.name === itemName);
    item.checked = !item.checked;
    showItemsList();
}

function verifyLocalStorageItems() {
    const localStoredItems = localStorage.getItem('items');
    if (localStoredItems) {
        items = JSON.parse(localStoredItems);
        showItemsList();
    }
}
verifyLocalStorageItems();