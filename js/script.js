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
            var title_id = songBySearch.data[i].id;
            var title = songBySearch.data[i].title;
            var artist = songBySearch.data[i].artist.name;
            var album =  songBySearch.data[i].album.title;
            var preview = songBySearch.data[i].preview;
           
            $results.append(`
                <div class="card" style="width: 18rem;">
                        <img class="card-image-top" src=" `+cover+`" >
                        <div class="card-body">       
                            <h5 class="card-title">`+artist+` / `+title+`</h5>
                            <p class="card-text">`+album+`</p>
                            <audio controls src="`+preview+`">
                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button value="`+title_id+`" id="fav" class="btn btn-danger"><i class="fa fa-heart fa-2x"></i> Ajouter aux favoris</button></small>
                        </div>
                </div>
            `
            
            )
        }
        
    
    })
    
})})