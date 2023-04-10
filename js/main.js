//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


let image = document.querySelector('img')
let iframe = document.querySelector('iframe')

document.querySelector('button').addEventListener('click', getPhoto)


function getPhoto(){
    let selection = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=suRJvfGnAIqKcB7plDlxoBoyAFqeabCymkyfQJ0k&date=${selection}`
   

fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
       

      console.log(data)  
      document.querySelector('h2').innerText = data.title

      if(data.media_type == "image"){
        document.querySelector('img').src = data.url
        image.classList.remove("hidden")
        iframe.classList.add("hidden")
      } else if(data.media_type == "video"){
        document.querySelector('iframe').src = data.url
        image.classList.add("hidden")
        iframe.classList.remove("hidden")
      } else {
        console.log("uknown media type", data.media_type)
      }

      document.querySelector('h3').innerText = data.explanation
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 

}

