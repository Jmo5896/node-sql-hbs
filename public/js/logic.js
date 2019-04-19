'use strict';
$(document).ready(() => {
    console.log('public js working with jquery');
    $('.update_item').on('click', function(event) {
        event.preventDefault();
        let btnId = $(this).val();
        console.log(btnId);

        $.ajax({
            url: `/api/update/${btnId}`,
            method: 'PUT'            
        }).then(function(data) {
            console.log(data);
            location.reload();
          });;
        
    });

});