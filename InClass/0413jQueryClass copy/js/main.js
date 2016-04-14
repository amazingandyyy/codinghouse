$('body .parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    andy: function() {
        gallery: {
            enabled: true
        }
    }

    // other options
});

$('.dog2').magnificPopup({
    items: [{
        src: 'http://www.tntdownunder.com/image.php/media/content/_master/49183/images/dog-2012-labrador-retriever.jpg?file=media%2Fcontent%2F_master%2F49183%2Fimages%2Fdog-2012-labrador-retriever.jpg&width=450'
    }, {
        src: 'https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg'
    }, {
        src: 'http://www.tntdownunder.com/image.php/media/content/_master/49183/images/dog-2012-labrador-retriever.jpg?file=media%2Fcontent%2F_master%2F49183%2Fimages%2Fdog-2012-labrador-retriever.jpg&width=450'
    }, {
        src: $('<div>Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
    }],
    gallery: {
        enabled: true
    },
    type: 'image'
});
