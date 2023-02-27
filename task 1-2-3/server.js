var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

   if (req.url == "/admin"){
      res.write("admin")
      res.end()}
   else if (req.url == "/users"){
      res.write("users")
      res.end()}
   else {
      fs.readFile('welcome.txt', function (err, data) { 
         res.write(data);
         res.end()
       })
      
   }
  

}).listen(3000);


