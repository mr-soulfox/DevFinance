function save() {
    let correct = error() 

    if (correct) {
        console.log('Tudo certo')
    }
}

function error() {
    //get input html elements
    const description = document.getElementById('description')
    const money = document.getElementById('value')
    const date = document.getElementById('date')
    
    //local error
    const error = document.getElementById('error')

    //clear
    description.style.border = 'none'
    money.style.border = 'none'
    date.style.border = 'none' 
    error.textContent = ''


    if (description.value == '') {
        description.style.border = '1px solid red'
        error.textContent = 'Preencha a descrição'

    } else if (money.value == '') {
        money.style.border = '1px solid red'
        error.textContent = 'Preencha o valor'

    } else if (date.value == '') {
        date.style.border = '1px solid red'
        error.textContent = 'Escolha a data'

    } else {
        return true
    }

    return false
}
