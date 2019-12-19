$(document).ready(function() {
    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function(event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });

    $("#resizable").resizable();

    $("#selectable").selectable();
})

// $("#draggable").draggable({ cancel: false });