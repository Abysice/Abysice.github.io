var net = require('net');
var date = new Date();

var server = net.createServer(function(socket){
	//YYYY-MM-DD hh:mm
	var d = date.getFullYear() + "-";
	if (date.getMonth() + 1 < 10){
		d += 0;
		d += date.getMonth() + 1;
	}
	else{d += date.getMonth();}
	d += "-";
	d += date.getDate();
	d += " ";
	if (date.getHours.toString.length < 1){
		d += 0;
		d += date.getHours();
	}
	else {d += date.getHours();}
	d += ":";
	d += date.getMinutes();
	d += "\n";
	socket.end(d);
});
server.listen(process.argv[2]);
