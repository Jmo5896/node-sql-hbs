'use strict';
$(document).ready(() => {
    console.log('public js working with jquery');
    $('.update_item').on('click', function(event) {
        event.preventDefault();
        let updateId = $(this).val();
        console.log(updateId);

        $.ajax({
            url: `/api/update/${updateId}`,
            method: 'PUT'            
        }).then(function(data) {
            console.log(data);
            location.reload();
          });
        
    });

    $('.delete_item').on('click', function(event) {
        event.preventDefault();
        let deleteId = $(this).val();
        console.log(deleteId);

        $.ajax({
            url: `/api/delete/${deleteId}`,
            method: 'PUT'            
        }).then(function(data) {
            console.log(data);
            location.reload();
          });
        
    });

});