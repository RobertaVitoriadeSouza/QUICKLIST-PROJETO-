const itens = []
function addItem(item) {
    const itemName = document.querySelector('#itemName').value

    const item = {
        name: itemName,
        checked: false
    }
    itens.push(item)

    document.querySelector('#item').value = ''
}
function showItemsList() {
    const sectionlist = document.querySelector(".list")
    itens.map((item, index) => {
       sectionlist.innerHTML += `
        <div class="item">
        <div>
        <input type="checkbox" name="list" id= 'item-${index}' >

        <div class = "custom-checkbox">
         <img src="./assets/assets/checked.svg" alt="checked">
        </div>
        <label for="item-${index}">${item.name}</label>
        </div>

        <button>
        <img src="./assets/assets/trash-icon.svg" alt="trash icon">
        </button>
        </div>
    })

    }
