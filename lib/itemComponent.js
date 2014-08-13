var debug = require('debug')('grid-ui');
var h = require('virtual-hyperscript');
var input = require('geval/multiple');
var event = require('value-event/event')
var valueEvent = require('value-event/value');
var changeEvent = require('value-event/change');
var Observ = require('observ');
var ObservStruct = require('observ-struct');
var ObservArray = require('observ-array');

module.exports = InputComponent;

function ItemComponent() {

  var events = input(["change"]);

  var state = ObservStruct({
    value: Observ(""),
    events: events,
  });

  events.change(function (data) {
    state.value.set(data.search);
  });

  return { state: state };
}





search.render = function (state) {
  return h('input', {
      type: 'text',
      name: 'search'
    })
  );
}