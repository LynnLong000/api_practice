$(document).ready(function() {
    var url = "https://newsapi.org/v1/sources";
    var data = {language:"en", country:"us"};
    $.ajax({
        url: url,
        data: data,
        type: "GET",
        success: function(response) {
            // console.log(response);
            // console.log(response.sources[2]);
            var sources = response.sources;
            // console.log(sources[2]);
            var html = "<select class='form-control' id='sourceOption'>";
            $.each(sources, function(index, source){
                // console.log(source);
                html += "<option value = '"+source.id+"'>" + source.name + "</option>";
            });
            html += "</select>";
           // console.log(html);
            $(".form-group").html(html);

        }
    });
    
    $("#source").submit(function(event){
        event.preventDefault();
        var id = $('#sourceOption').val();
        var url = 'https://newsapi.org/v1/sources';
        var data = {apikey:"b9c5d0d41c8b45e592490b7114c532ce",source:id};
        $.ajax({
            url:url,
            data:data,
            type:"GET",
            success:function(response){
                var articles = response.articles ;
                console.log(response);
                
                
            }
        });

        
    });
    
})