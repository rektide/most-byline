var
  byline = require("byline"),
  most = require("most")

function mostByline(readableStream){
	var lines = byline(readableStream, {encoding: 'utf8'})
	return most.fromEvent("data", lines)
}

process.on("unhandledRejection", function(err){
	console.log(err)
})

module.exports= mostByline
module.exports.mostByline = mostByline
