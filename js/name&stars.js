// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/teslamotors/repos', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td>' + status.stargazers_count+ '</td>';
    statusHTML += '</tr>';
  });
  $('tbody').html(statusHTML);
}
// Send request
request.send();