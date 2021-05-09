function saveHistory(saveCheckbox = false) {
    let checkbox = document.getElementById('save').checked

    if (checkbox) {
        const elements = getElements()

        for (let i = 0; i < elements[0].length; i++) {
            const element = elements[0][i]

            localStorage.setItem(elements[1][i], String(element))
        }
    }

    if (saveCheckbox == 'confirm') {
        localStorage.setItem('save', checkbox == true ? true : false)
    }
}

function getElements() {
    let history = document.getElementById('history').innerHTML

    const entry = ((document.getElementById('entry').textContent).substring(3)).replace(',', '.')
    const exit = (((document.getElementById('exit').textContent).substring(3)).replace(',', '.')).replace('-', '')

    return [[history, entry, exit],['history', 'entry', 'exit']]
}

function verifyHistory() {

    if (localStorage.getItem('save') == 'true' && localStorage.getItem('logged') == 'true') {
        document.getElementById('history').innerHTML = localStorage.getItem('history')
        document.getElementById('entry').textContent = `R$ ${localStorage.getItem('entry').replace('.', ',')}`
        document.getElementById('exit').textContent =`R$ -${localStorage.getItem('exit').replace('.', ',')}`

        let total = Number(localStorage.getItem('entry')) - Number(localStorage.getItem('exit'))
        document.getElementById('total').textContent = `R$ ${(String(total.toFixed(2))).replace('.', ',')}`

    }


}
