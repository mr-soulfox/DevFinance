function register() {
    //get elements
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    
    //verify 
    let complete = () => {
        if (email.length <= 0 || password.length <= 0) {
            return false
    
        }

        return true
    }

    if (complete) {        
        //save
        getSave(name, email, password, 'save')
        
        //redirect
        document.location.replace('/')

    } else {
        alert('Preencha tudo')

    }
}

function getSave(name = 'user9000', email, password, type) {

    if (type == 'save') {
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        localStorage.setItem('logged', true)

    } else {
        let emailStorage = localStorage.getItem('email')
        let passwordStorage = localStorage.getItem('password')

        return [emailStorage, passwordStorage]

    }

}
