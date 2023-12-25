const searchToggle = document.querySelector('.search-toggle')
const userToggle = document.querySelector('.user-toggle')
const searchBox = document.querySelector('.search-box')
const userBox = document.querySelector('.user-box')
const headerMenu = document.querySelector('.header-menu')
const openMenu = document.querySelector('.open-menu')
const html = document.querySelector('html')


let handleCancelBtn = (dir) => {
    if(dir == 1) {
        searchToggle.classList.toggle('active')
        searchBox.classList.toggle('active')
    }
    else if(dir == -1) {
        userToggle.classList.toggle('active')
        userBox.classList.toggle('active')
    }
    else if(dir == 0) {
        openMenu.classList.toggle('active')
        headerMenu.classList.toggle('active')
    }
}

searchToggle.addEventListener('click', () => {
    handleCancelBtn(1)
})
userToggle.addEventListener('click', () => {
    handleCancelBtn(-1)
})
openMenu.addEventListener('click', () => {
    handleCancelBtn(0)
})

