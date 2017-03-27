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
  var j = 79;
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
	case 29:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1024x638.jpeg.b9f264a31b154e43ba9bbc217bb2524c.large"
				}
		]};
		break;
	case 30:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/540x315.png.1085a655121f4ea1a5f6847bf93cb619.large"
				}
		]};
		break;
	case 31:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/768x768.jpeg.b36880cbba9140238525fce524c554c0.large"
				}
		]};
		break;
	case 32:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1024x638.jpeg.97cd7d8ecba943da9bba23facbd374e2.large"
				}
		]};
		break;
	case 33:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/640x595.jpeg.36f5a6f08d7d4713af5f388760f84acc.large"
				}
		]};
		break;
	case 34:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/615x960.jpeg.80d2c1f730964e72bf39e0b2c727e8fa.large"
				}
		]};
		break;
	case 35:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/844x1500.jpeg.7802fe732cc74aa38ac5c9734f9504c7.large"
				}
		]};
		break;
	case 36:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/844x1500.jpeg.dfa05da4ec36484bbef84a0ad312f5f9.large"
				}
		]};
		break;
	case 37:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/960x874.jpeg.b2c80a4736e3423998cb7a4a4a031492.large"
				}
		]};
		break;
	case 38:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/844x1500.jpeg.11df60047bc5421cb2dfc456d133c85b.large"
				}
		]};
		break;
	case 39:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/960x692.jpeg.d5408a60cd3e41dd8b3d6708d76d270f.large"
				}
		]};
		break;
	case 40:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/478x418.jpeg.95932272157d4fccabe34b77cf4cba7d.large"
				}
		]};
		break;
	case 41:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/720x1280.png.c3c13a3adf7d4d6385d42de90d5e3f63.large"
				}
		]};
		break;
	case 42:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/844x1500.jpeg.b48d1630978a4e319480e0527498304a.large"
				}
		]};
		break;
	case 43:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1080x1080.png.78d8d3880fac4a1c9f0f490320ced57b.large"
				}
		]};
		break;
	case 44:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/750x733.jpeg.de519cfe044e4db2b3b6c2ec1699841a.large"
				}
		]};
		break;
	case 45:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/385x1090.jpeg.c30d8a069626499ba6fda7474c7b21ad.large"
				}
		]};
		break;
	case 46:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1051x1400.jpeg.d070fec0bfaa4da8a527b917d9bb2862.large"
				}
		]};
		break;
	case 47:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1073x1080.jpeg.d5120ca64ada478dafd333d2f948eff3.large"
				}
		]};
		break;
	case 48:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/810x1080.jpeg.e67021397f2b47e7b073358d7f8a00ae.large"
				}
		]};
		break;
	case 49:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/720x1280.png.3cace32748574686947439f271b4f302.large"
				}
		]};
		break;
	case 50:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/619x452.jpeg.866de8e193524bafb00cc9a12dc200c9.large"
				}
		]};
		break;
	case 51:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1334x1008.jpeg.400796f7a1824a019ed00dbc3a080763.large"
				}
		]};
		break;
	case 52:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/720x1280.png.45b6ceafa29f4bd8b4be8918180df42f.large"
				}
		]};
		break;
	case 53:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/720x1280.png.17d61e99556e4b3c9b9c21027f6f5d93.large"
				}
		]};
		break;
	case 54:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/720x1280.png.a4cec99f859b47e3b5cdac0976250d6d.large"
				}
		]};
		break;
	case 55:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/720x1280.png.9f6a8719c1ca43388ce3a11c474cce82.large"
				}
		]};
		break;
	case 56:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/707x772.jpeg.7bc1267b4f134b278f8e37049e301e40.large"
				}
		]};
		break;
	case 57:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/869x1000.jpeg.0af3f6fbb4914e108b5a4e911b1952b0.large"
				}
		]};
		break;
	case 58:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/652x543.jpeg.f312e29454684168bd89958255377f50.large"
				}
		]};
		break;
	case 59:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1438x1500.jpeg.a5a0fd68523f416aa360c470d13357e1.large"
				}
		]};
		break;
	case 60:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/931x960.jpeg.62a84c6a99bc42f3ba7cfb46886bfdfe.large"
				}
		]};
		break;
	case 61:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/516x736.jpeg.7dc9441a755a44af986b99c61cc9644a.large"
				}
		]};
		break;
	case 62:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/958x1000.jpeg.938641ead7a7480e9187c7f9e2f692c4.large"
				}
		]};
		break;
	case 63:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/615x497.jpeg.5900401c8d3147738612e54877512b0f.large"
				}
		]};
		break;
	case 64:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/592x842.jpeg.09c1c745b95d420f8c0edb7d68976291.large"
				}
		]};
		break;
	case 65:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/632x539.jpeg.729e4d4151f640b4ab7ec544d98dc168.large"
				}
		]};
		break;
	case 66:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1080x1287.png.e36aacac6b194d51bbb816188fece367.large"
				}
		]};
		break;
	case 67:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/720x1280.png.29af74d1afb14c8f907a22dd3696723a.large"
				}
		]};
		break;
	case 68:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/750x774.png.d58e8fb74c264dbca9cb09010b9a552a.large"
				}
		]};
		break;
	case 69:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1080x1080.png.e3e710f8046a4871a050677070c8a2b8.large"
				}
		]};
		break;
	case 70:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1404x1500.jpeg.b07b175aad7a447b934b6dc0e6a71998.large"
				}
		]};
		break;
	case 71:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/480x438.jpeg.80144ce2b34745639564b117e54fa58e.large"
				}
		]};
		break;
	case 72:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/931x960.jpeg.80aa9ab9266e41cdbeaea17b2aba2202.large"
				}
		]};
		break;
	case 73:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/684x567.jpeg.c8114aeb9efb402692a119dfd0cddfe3.large"
				}
		]};
		break;
	case 74:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/750x750.jpeg.422a5b9a214f45e79a816c6351aae6a2.large"
				}
		]};
		break;
	case 75:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/750x578.jpeg.b6860e478f174bc29b4de07f8bd5de6d.large"
				}
		]};
		break;
	case 76:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/750x692.jpeg.a1dc9419fc34413bb854a12778fe12b5.large"
				}
		]};
		break;
	case 77:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/1494x1500.jpeg.aeab57288afa4f0a94294d9581a8996d.large"
				}
		]};
		break;
	case 78:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/552x473.jpeg.e1f3eb6a44f84166a41f9e96a80b3c40.large"
				}
		]};
		break;
	case 79:
		body = {
			"bot_id" : botID,
			"text" : botResponse,
			"attachments" : [
				{
				"type"  : "image",
				"url"   : "https://i.groupme.com/828x513.jpeg.5a4cf734bd714d4687ee9803eb746ff5.large"
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