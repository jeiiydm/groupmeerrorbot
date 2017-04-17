var HTTPS = require('https');
//var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /gort/;

  if(request.text && botRegex.test(request.text.toLowerCase())) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = 'error_code.cpp:8:89: instantiated from here /usr/include/c++/4.6/bits/stl_algo.h:162:4: error: no match for ‘operator==’ in ‘__first.__gnu_cxx::__normal_iterator::operator* [with _Iterator = std::vector*, _Container = std::vector >, __gnu_cxx::__normal_iterator::reference = std::vector&]() == __val’ /usr/include/c++/4.6/bits/stl_algo.h:162:4: note: candidates are: /usr/include/c++/4.6/bits/stl_pair.h:201:5: note: template bool std::operator==(const std::pair&, const std::pair&) std::vector&) UNINSTALL';

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };
  
  body = {
	"bot_id" : botID,
	"text" : botResponse
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