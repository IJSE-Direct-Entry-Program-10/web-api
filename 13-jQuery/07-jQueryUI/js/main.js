$("h1").draggable({
    revert: "invalid"
});

$("#container").droppable({
    drop: function( event, ui ) {
        ui.draggable.css('background-color', 'red');
    }
});
