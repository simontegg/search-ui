var mercury = require('mercury');

var Search = require('./');

console.log(Search)


mercury.app(document.body, Search().state, Search.render);
