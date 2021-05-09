function save() {
    let correct = error() 

    if (correct) {
        //get elements
        const history = document.getElementById('history')
        const description = document.getElementById('description').value

        let money = document.getElementById('value').value
        money = money.replace(',', '.')

        const date = document.getElementById('date').value
        const type = document.getElementById('typeModal').textContent == '(Entrada)' ? true : false


        history.innerHTML += (
            `<div class="historyContent">
                <div class="historyDetails">
                    <span class="description">${description}</span>
                    <span class="money">R$ ${(String((Number(money)).toFixed(2))).replace('.',',')}</span>
                    <span class="date">${date}</span>
                </div>
                <img src="./assets/${type ? 'arrowUp' : 'arrowDown'}.svg" alt="type" width="35px"/>
            </div>
            `
        )


        transaction(Number(money), type)

        //show modal container
        document.getElementById('containerModal').style.visibility = 'hidden'

        //show modal
        document.getElementById('modal').style.display = 'none'

    }
}

function error() {
    //get input html elements
    const description = document.getElementById('description')
    const money = document.getElementById('value')
    const date = document.getElementById('date')
    
    //money to tests
    let moneyTest = Number((money.value.toString()).replace(',', '.'))

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

    } else if (isNaN(moneyTest)) {
        money.style.border = '1px solid red'
        error.textContent = 'Apenas numeros'

    } else {        
        return true
    }

    return false
}

function transaction(money, type) {
    const element = document.getElementById(type ? 'entry' : 'exit')
    let value = (element.textContent).substring(3)

    value = value.replace(',', '.')
    value = value.replace('-', '')

    value = (Number(value) + money).toFixed(2)

    value = value.replace('.', ',')    
    
    element.innerText = type ? `R$ ${value}` : `R$ -${value}`
    
    result = calculate()

    result = result.replace('.', ',')

    document.getElementById('total').textContent = `R$ ${result}`
}

function calculate() {
    const entry = document.getElementById('entry').textContent
    const exit = document.getElementById('exit').textContent
    let entryValue = entry.substring(3)
    let exitValue = exit.substring(3)

    //modifie string
    for (let i = 0; i < 2; i++) {
        let value = i <= 0 ? entryValue : exitValue

        value = value.replace(',', '.')
        value = value.replace('-', '')

        value = Number(value).toFixed(2)

        if (i <= 0) {
            entryValue = value
        } else {
            exitValue = value
        }
    }

    return (entryValue - exitValue).toFixed(2)
    
}
