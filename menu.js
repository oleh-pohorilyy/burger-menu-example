const menu = document.querySelector('#menu')
const button = document.querySelector('#menu-button')

button.addEventListener('click', () => {
  menu.classList.toggle('open')
})

window.addEventListener('resize', () => {
  if(window.innerWidth < 500) return
  if(!menu.classList.contains('open')) return

  menu.classList.remove('open')
})

document.addEventListener('mousedown', (event) => {
  if(menu.contains(event.target) || event.target === button) return

  menu.classList.remove('open')
}, { bubbles: false })
