//http://www.omdbapi.com/?apikey=6763aa3f&
// 6763aa3f
let movieName = document.getElementById('input')
let main =   document.querySelector('main')

document.getElementById('btn').addEventListener('click',function(){
fetch(`https://www.omdbapi.com/?apikey=6763aa3f&t=${movieName.value}&`)
    .then(response=>response.json())
    .then(data=>{
    main.innerHTML = `<div id='content'>
                            <img src="${data.Poster}" alt="movie poster" id="movie-poster">
                            <div id="movie-description">
                                <h3>${data.Title}</h3>
                                <div class="item2">
                                    <p>${data.Runtime}</p>
                                    <p>${data.Genre}</p>
                                    <p class="item2-child3">    
                                        <img src="images/Watchlist_icon.png" class="watchlist-icon"/>
                                        <span>Watchlist</span>
                                    </p>     
                                </div>
                                <p>${data.Plot}</p>
                            </div>  
                         </div>
                         <hr>` 
        console.log(data)
    })
})
