
$(document).ready(function(){
  $("form#work").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#recreational").show();
  });

  $("form#recreational").submit(function(event){
    event.preventDefault();
    $("#recreational-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var recreationalTransportationMode = $(this).val();
      $('#work-responses').append(recreationalTransportationMode + "<br>");
    });
});
});
