//add class of 'hidden' to section, which (from CSS) will set display to 'none'
document.querySelector('section').classList.add('hidden')

//add event listener to the button, when button clicked run the getFetch function
document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){

  const url = `https://breaking-bad-database-builder.herokuapp.com/api`

  document.querySelector('#PG').classList.add('hidden')
  document.querySelector('#SG').classList.add('hidden')
  document.querySelector('#BG').classList.add('hidden')
  document.querySelector('#LG').classList.add('hidden')
  document.querySelector('#CG').classList.add('hidden')
  document.querySelector('#MG').classList.add('hidden')
  document.querySelector('#GQ').classList.add('hidden')
  document.querySelector('#JS').classList.add('hidden')
  document.querySelector('#CB').classList.add('hidden')
  document.querySelector('#MW').classList.add('hidden')


}