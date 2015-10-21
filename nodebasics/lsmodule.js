var fs = require("fs");
var path = require("path");

function filtercb(err, files)
{
	if(err)
	 return(cbfun(err));

	for(var i = files.length - 1; i >= 0; i--)
	{	
		
		if(path.extname(files[i]) != fex)
		{
			files.splice(i, 1);	
		}
	}
	cbfun(null, files);
}
                                                                
var dir;
var fex;
var cbfun;

module.exports = function (dirname, fexten, cbfunc)
{	
	dir = dirname; //remove the path call later
	fex ="."+ fexten;
	cbfun = cbfunc;
	fs.readdir(dir, filtercb);
}
