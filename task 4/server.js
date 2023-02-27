var http = require('http');
var generator = require('generate-password');
var password = generator.generate({
	length: 10,
	numbers: true
});
http.createServer(function(req,res){
  
res.write(password);
  res.end() ;
}).listen(8000);

console.log(password);