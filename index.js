var debug = require('debug')('grid-ui');
var h = require('virtual-hyperscript');
var input = require('geval/multiple');
var event = require('value-event/event')
var valueEvent = require('value-event/value');
var changeEvent = require('value-event/change');
var Observ = require('observ');
var ObservStruct = require('observ-struct');
var ObservArray = require('observ-array');

var ItemComponent = require('./lib/ItemComponent');

module.exports = SearchComponent;




function SearchComponent () {

  var state = ObservStruct({
    search: ObservStruct({
      list: ObservArray([
        ObservStruct({
          item: ItemComponent(...).state
        })
        ])
    })
  });

  return { state: state };
}





search.render = function (state) {
  return h('ul')
  ;
}
