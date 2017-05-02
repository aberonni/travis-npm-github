var fs = require('fs');

fs.writeFile('hello.txt', 'Hello world!', function(err) {
	if(err) {
		return console.log(err);
	}

	console.log('The file was saved!');
}); 