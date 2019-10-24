

$("table").on("click" , "td" , function(){
    $(this).toggleClass("add");         
});


$("table").on("click" , "span" , function(ev){
    $(this).parent().parent().fadeOut("1000" , function(){
        $(this).remove();
    });

    ev.stopPropagation();
});

$("input[type='Text']").keypress(function(e){
    // alert();
    var value = $(this).val();
    if(e.which === 13)
    {
        $("table").append("<tr><td><span><i class ='fa fa-trash'></i></span> " + value + "</td></tr>")
        $(this).val("");
    }
})

$(".fa-plus").on("click" , function(){
    $("#main").fadeToggle("slow");
});