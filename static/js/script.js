$(document).ready(function () {
  $("#ajaxForm").keypress(function (e) {
    //Enter key
    if (e.which == 13) {
      return false;
    }
  });

  function ajaxCallRequest(f_method, f_url, f_data) {
    //$("#dataSent").val(unescape(f_data));
    var f_contentType = "application/x-www-form-urlencoded; charset=UTF-8";
    $.ajax({
      url: f_url,
      type: f_method,
      contentType: f_contentType,
      dataType: "json",
      data: f_data,

      success: function (data) {
        //console.log('Success Hit');
        //console.log(data);
        $("#numbers").html("");

        var column_data =
          '<thead><tr><th scope="col">#</th><th scope="col">Number</th></tr></thead>';

        $("#numbers").append(column_data);

        var row_data = "";
        var term = 0;
        for (var arr in data) {
          row_data += "<tr>";
          row_data += "<th>" + term + "</th>";
          row_data += "<td>" + data[arr] + "</td>";
          row_data += "</tr>";
          term += 1;
        }
        $("#numbers").append(row_data);
      },
      error: function (data) {
        //console.log('Error');
        console.log(data);
      },
    });
  }

  $("#sendQueryString").click(function (event) {
    event.preventDefault();
    var form = $("#ajaxForm");
    var method = form.attr("method");
    var url = form.attr("action") + "fibonacci";
    var data = $(form).serialize();
    //console.log(data);
    ajaxCallRequest(method, url, data);
  });
});
