var HTTPS = require('https');
//var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /a/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = '';

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };
  var j = 8;
  var i = getRandomInt(0, j);
  switch(i){
	case 0:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/500x381.png.46727e60ac1b447aa4b07a685077c88d.large"
				}
		]}
		break;
	case 1:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1172x1500.jpeg.b7cde19e70b44c23b03c3decc6d5ebff"
				}
		]}
		break;
	case 2:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1334x834.jpeg.85da3350ccee4fa29efa60c346acf59e.large"
				}
		]}
		break;
	case 3:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/620x400.jpeg.41c83692e33845378b6b1be6472340dd.large"
				}
		]}
		break;
	case 4:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1143x1200.jpeg.f90bbdb282364d1889f20e1022181276.large"
				}
		]}
		break;
	case 5:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/980x1276.png.08d5a2d7876c472d9a71f38da81eaa37.large"
				}
		]}
		break;
	case 6:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/617x1088.jpeg.c3c57cc974144a9f985921d3e55c777f.large"
				}
		]}
		break;
	case 7:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/750x635.png.0afecf08c3424e65bb6b84ace0ffcb45.large"
				}
		]}
		break;
	case 8:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1061x1268.png.05bb9250dbe94462979814dc73ca8c36.large"
				}
		]}
		break;
	}
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;