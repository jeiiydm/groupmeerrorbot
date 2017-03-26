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
  var j = 82;
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
		]};
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
		]};
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
		]};
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
		]};
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
		]};
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
		]};
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
		]};
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
		]};
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
		]};
		break;
	case 9:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/447x326.jpeg.75b0adf815304462912157efa96cca5b.large"
				}
		]};
		break;
	case 10:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/530x293.jpeg.dd32041ec7a54c9c956a9b8a1ac69bbd.large"
				}
		]};
		break;
	case 11:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/958x572.png.57d16966821f499a8e1165c1f79b60b3.large"
				}
		]};
		break;
	case 12:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1340x1500.jpeg.857b7e4091f04ee88b1969418a0ac9fd.large"
				}
		]};
		break;
	case 13:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1125x1018.png.eb1942bbfe534fb2bbf1398ba1c0265d.large"
				}
		]};
		break;
	case 14:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1439x1371.png.e2e25cf6b44d4dc38fe7b863424caac7.large"
				}
		]};
		break;
	case 15:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/844x1500.png.28d7b239afed496ab5b478cab1add174.large"
				}
		]};
		break;
	case 16:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1114x1244.jpeg.69f47f5679a34bd08c74726319b97be0.large"
				}
		]};
		break;
	case 17:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/720x471.jpeg.795563e6363849bdad412f456a16b0d4.large"
				}
		]};
		break;
	case 18:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1024x638.png.c438ad3e60c34cd9ac904992f2070bb4.large"
				}
		]};
		break;
	case 19:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1024x638.png.ffb9fb5466bd4369a9eebf0e6b96b358.large"
				}
		]};
		break;
	case 20:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/738x775.png.7ec08bd456664d99ae88de731059271c.large"
				}
		]};
		break;
	case 21:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/761x1176.png.9cea6fb0e83d434eaa184478c80447bb.large"
				}
		]};
		break;
	case 22:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/844x1500.png.4ae46bd1d1224a12803537d564259b46.large"
				}
		]};
		break;
	case 23:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/748x740.png.41f32f45fa244431b0e4f7b8094b028a.large"
				}
		]};
		break;
	case 24:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/640x625.png.fcd5c1e5b39745dc8596be0612f0563a.large"
				}
		]};
		break;
	case 25:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/920x1500.png.12e4134120cf469a871bd5220befcf3a.large"
				}
		]};
		break;
	case 26:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1024x638.png.6391a9dc15974dc3bb27541670040d0c.large"
				}
		]};
		break;
	case 27:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1332x889.png.aceaca5273fc40408c2515da8dcc7f75.large"
				}
		]};
		break;
	case 28:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/640x384.jpeg.b49249f9b4ae4740b512f73d98522367.large"
				}
		]};
		break;
	default:;
	}

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