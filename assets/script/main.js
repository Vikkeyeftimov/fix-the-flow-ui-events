let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

//1 start click
let fronted = document.querySelector('a:nth-of-type(1)')

fronted.addEventListener('dblclick', front)
function front() {
  fronted.classList.toggle('fronted')
}
 //1 end 


 //2 start keydown
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('keypress', knopje)
function knopje(e) {
  if(e.key == 'o') {
    design.classList.toggle('design');
  } }
  //2 end 


  //3 start keydown
  let en = document.querySelector('a:nth-of-type(3)')

 en.addEventListener('keydown', knoppen)
   function knoppen(e) {
  if(e.key == 's') {
    en.classList.toggle('en') ;
  } }

//3 end


//4 