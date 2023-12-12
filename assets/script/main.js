let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let fronted = document.querySelector('a:nth-of-type(1)')

fronted.addEventListener('dblclick', front)
function front() {
  fronted.classList.toggle('fronted')
}


let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('keypress', knopje)
function knopje(e) {
  if(e.key == 'o') {
    design.classList.toggle('design');
  } }
