var fs = require("fs");
var buf = fs.readFileSync(process.argv[2]);
var doc = buf.toString();
var lines = doc.split("\n");

console.log(lines.length - 1);
