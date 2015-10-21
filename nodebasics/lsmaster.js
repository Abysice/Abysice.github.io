var mymodule = require('./lsmodule.js');
var dirname = process.argv[2];
var fext = process.argv[3];

function callback(err, data)
{	
	for(var i = 0; i < data.length; i++)
	{
		console.log(data[i]);	
	}
}
mymodule(dirname,fext,callback);
