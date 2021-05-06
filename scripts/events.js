//show/hide gear svg in user image
document.getElementById('config').addEventListener('mouseover', () => {
    document.getElementById('gearUser').style.display = 'block'
})
document.getElementById('config').addEventListener('mouseout', () => {
    document.getElementById('gearUser').style.display = 'none'
})

//show/hide user menu
document.getElementById('config').addEventListener('click', () => {
    const userMenu = document.getElementById('userMenu').style.display
    document.getElementById('userMenu').style.display = userMenu == 'none' ? 'flex' : 'none'
})

//menu content
if (localStorage.getItem('logged')) {
    document.getElementById('notLogged').style.display = 'none'
    document.getElementById('logged').style.display = 'block'

} else {
    document.getElementById('logged').style.display = 'none'
    document.getElementById('notLogged').style.display = 'block'

}

//show/hide modal
function modal(type) {
    //show container
    const visibility = document.getElementById('containerModal').style.visibility
    document.getElementById('containerModal').style.visibility = visibility == 'hidden' ? 'visible' : 'hidden'

    //show modal
    const display = document.getElementById('modal').style.display
    document.getElementById('modal').style.display = display == 'none' ? 'block' : 'none'

    //modifie typeModal
    document.getElementById('typeModal').textContent = `(${type})`

    //clear inputs
    document.getElementById('value').value = ''
    document.getElementById('description').value = ''
    document.getElementById('date').value = ''

    //clear errors
    document.getElementById('description').style.border = 'none'
    document.getElementById('value').style.border = 'none'
    document.getElementById('date').style.border = 'none' 
    document.getElementById('error').textContent = ''
}
