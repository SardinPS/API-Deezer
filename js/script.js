

$.ajax({
    url : 'https://api.deezer.com/search?q=eminem&output=jsonp',
    dataType : 'jsonp'
}).done(function(musiques) {

    console.log(musiques);

    document.querySelector('#results').innerHTML =
            musiques.data.map(m => m.title).join('<br>');

});

const $formSearch = $('#formSearch');
const $song = $formSearch.find('#Song');
console.log($song);
const $results = $('#results');

$formSearch.on('submit', function(event) {
    event.preventDefault();

    const song = $song.val();
    
    getSongBySearch(song).then(title => {
        $results.html(
            `<div class="card" style="width: 22rem;">
                <div class="card-body">
                    <h5 class="card-title">${title.album} / ${title.title}</h5>
                    <audio controls src ="${title.preview}">
                </div>
            </div>`
        );
    });
});

function getSongBySearch(songSearch){
    songSearch = encodeURIComponent(songSearch);
    let promise = fetch(`https://api.deezer.com/search?q=${songSearch}&output=jsonp`)
                    .then(res => res.json());
}


