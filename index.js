var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send("{\"createOrderDataResponse\":{\"orderID\":\"98623896986\",\"error\":{\"errorMessage\":\"\",\"errorCode\":\"\"}}}");
});
//Update 24/06
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
