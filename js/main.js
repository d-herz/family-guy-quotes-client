//add class of 'hidden' to section, which (from CSS) will set display to 'none'
document.querySelector('section').classList.add('hidden')

//add event listener to the button, when button clicked run the getFetch function
document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){

  //assign the heroku link to a variable for use later
  const url = `https://family-guy-database-builder.herokuapp.com/api`

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
      //random num generator for quote index
      let num = Math.floor(Math.random() *data.length) 

      //these 2 query selectors insert the quote into h2 and author into h3
      document.querySelector('h2').innerText = '"'+data[num].quote+'"'

      document.querySelector('h3').innerText = '-' + data[num].author


      //now conditionals to show/un-hide the images

      if(data[num].author ==='Peter Griffin'){
        document.getElementById('PG').classList.remove('hidden')

      }else if(data[num].author ==='Stewie Griffin'){
        document.getElementById('SG').classList.remove('hidden')
        
      }else if(data[num].author ==='Brian Griffin'){
        document.getElementById('BG').classList.remove('hidden')
        
      }else if(data[num].author ==='Lois Griffin'){
        document.getElementById('LG').classList.remove('hidden')
        
      }else if(data[num].author ==='Chris Griffin'){
        document.getElementById('CG').classList.remove('hidden')
        
      }else if(data[num].author ==='Meg Griffin'){
        document.getElementById('MG').classList.remove('hidden')
        
      }else if(data[num].author ==='Glen Quagmire'){
        document.getElementById('GQ').classList.remove('hidden')
        
      }else if(data[num].author ==='Joe Swanson'){
        document.getElementById('JS').classList.remove('hidden')
        
      }else if(data[num].author ==='Cleveland Brown'){
        document.getElementById('CB').classList.remove('hidden')
        
      }else if(data[num].author ==='Mayor West'){
        document.getElementById('MW').classList.remove('hidden')
        
      }


    })
    
    .catch(err => {
      console.log(err)
    })

}