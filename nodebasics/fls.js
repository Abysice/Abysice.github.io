var fs = require("fs");
var path = require("path");
var dir = process.argv[0];
var extension = "." + process.argv[3];

function callback(err, files)
{
	for(var i = 0; i < files.length; i++)
	{
		if (path.extname(files[i]) == extension)
		{
			console.log(files[i]);	
		}
	}
}

fs.readdir(dir, callback); //returns contents of a directory as array
