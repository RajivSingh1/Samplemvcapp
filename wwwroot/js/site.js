// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"

    $(document).ready(function () {
        $.ajax({
            url: "/test/testPartial",
            success: function (result) {
                alert(result);
            }
        });  
        });

