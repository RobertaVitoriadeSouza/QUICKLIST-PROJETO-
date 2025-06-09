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