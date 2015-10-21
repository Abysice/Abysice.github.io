http = require('http');
bl = require('bl');
var counter = 0;
var dat;

function callbackhell(dater)
{
	http.get(process.argv[2+counter], function(response){
        	response.pipe(bl(function (err,data){
               		if(counter < 3)
			{
				counter++;
				console.log(data.toString())
				callbackhell(data);
			}
	 	}));
	 });
}

callbackhell(dat);
