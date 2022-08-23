//add class of 'hidden' to section, which (from CSS) will set display to 'none'
document.querySelector('section').classList.add('hidden')

//add event listener to the button, when button clicked run the getFetch function
document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){

  //assign the heroku link to a variable for use later
  const url = `https://breaking-bad-database-builder.herokuapp.com/api`

  //on function call, add class of 'hidden' to all of the image containers (so they disappear)
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

  //This conditional checks if the section is hidden, and unhides it. Mostly for asthetics so we don't have an empty container sitting there before the button is clicked for the first time
  if( document.querySelector('section').classList.contains('hidden')){
    document.querySelector('section').classList.toggle('hidden')
  }

  //this is our fetch function with a parameter of URL declared earlier
  //the 2nd .then is where we decide what to do with the objects being returned to us, which contain the quotes and author
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data[1].quote)
    })
    
    .catch(err => {
      console.log(err)
    })

}