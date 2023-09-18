// Remember to import the data and Dog class!
import {dogs} from './data.js'
import {Dogs} from './Dog.js'

function renderClick(event)
{   
    // render(event.target.id)
   
    if(event.target.id==='heart-icon')
    {
        dog.hasBeenLiked = true
        // console.log(dog.hasBeenLiked)
    }
    else
    {
        dog.hasBeenNoped = true
    }
   
    document.querySelector('main').innerHTML+=dog.badgeHtml(event.target.id)
    setTimeout(()=>{
        if(dogs.length>0){
         dog = new Dogs(dogs.shift())
         render()
         dog.hasBeenSwiped = true
        //  dog.hasBeenLiked = true
        }
    },1000)
}

function render(){
 document.querySelector('main').innerHTML = dog.dogHtml()
//  if(event)
//     document.querySelector('main').innerHTML+=dog.badgeHtml(event)
 
}
document.querySelector("#heart-icon").addEventListener('click',renderClick)
document.querySelector("#cross-icon").addEventListener('click',renderClick)


let dog = new Dogs(dogs.shift())
console.log(dog.name)
render()