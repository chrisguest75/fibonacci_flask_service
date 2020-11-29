$(document).ready(function() {

  function ajaxCallRequest(f_method, f_url, f_data) {
    //$("#dataSent").val(unescape(f_data));
    var f_contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
    $.ajax({
      url: f_url,
      type: f_method,
      contentType: f_contentType,
      dataType: 'json',
      data: f_data,
      success: function(data) {
        var jsonResult = JSON.stringify(data);
        $("#results").val(unescape(jsonResult));

        



      }
    });
  }

  $("#sendQueryString").click(function(event) {
    event.preventDefault();
    var form = $('#ajaxForm');
    var method = form.attr('method');
    var url = form.attr('action') + 'fibonacci';
    var data = $(form).serialize();
    console.log(data);
    ajaxCallRequest(method, url, data);
  });
});

