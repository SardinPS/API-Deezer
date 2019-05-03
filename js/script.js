$(document).ready(function() {
    'use strict';

const $formSearch = $('#formSearch');
const $song = $formSearch.find('#Song');
var $rank = $formSearch.find('#Rank');

const $results = $('#results');


$formSearch.on('submit', function(event) {
    event.preventDefault();

    const song = $song.val();
    const order = $rank.val();

    $.ajax({
        url : "https://api.deezer.com/search?q="+ song +"&order="+ order +"&output=jsonp",
        dataType : 'jsonp'
    }).done(function(songBySearch) {

        $results.empty();

        for (let i = 0; i < songBySearch.data.length; i++) {
            var cover = songBySearch.data[i].album.cover_medium;
            var title = songBySearch.data[i].title;
            var artist = songBySearch.data[i].artist.name;
            var album =  songBySearch.data[i].album.title;
            var preview = songBySearch.data[i].preview;

           
            $results.append(`

            <div class="card-group">
                <div class="card" style="width: 21rem;">
                        <img class="card-image-top" src=" `+cover+`" >
                        <div class="card-body">       
                            <h5 class="card-title">`+artist+` / `+title+`</h5>
                            <p class="card-text">`+album+`</p>
                            <audio controls src="`+preview+`">
                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button><i class="fa fa-heart fa-2x"></i> Ajouter aux favoris</button></small>
                        </div>
                    </div>
                

            `
            
            )
        }
    
    })
})})



    /*getSongBySearch(song).then(title => {
        $results.html(
            `<div class="card" style="width: 22rem; margin: 50px auto;">
                <div class="card-body">
                ${title.data.map(title => (
                    `   <img src="${title.album.cover}">
                        ${title.album.title}
                     <h4 class="card-title">${title.artist.name} / ${title.title}</h4>
                     <button id="fav" style="margin: 10px auto;" value="${title.id}"><i class="fa fa-heart"></i>Ajouter au favoris</button>
                    <audio controls src ="${title.preview}">
                    `
                )).join('')}
                   
                </div>
            </div>`
        );
        var $fav = $('#fav').val();

        $('#fav').click(function(){

             localStorage.getItem($fav, $fav);


            if(localStorage.getItem($fav, $fav) == true){
                localStorage.removeItem($fav, $fav);
            }
            else{
                localStorage.setItem($fav, $fav);
            }

            


        })
        
        
    });
});



 

for (var i = 0; i < localStorage.length; i++) {

    var key = localStorage.key(i);
  
    var value = localStorage.getItem(key);
  
    console.log('Key: ' + key + ', Value: ' + value);  
}

})*/