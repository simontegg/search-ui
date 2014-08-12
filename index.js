var debug = require('debug')('grid-ui');
var h = require('virtual-hyperscript');
var input = require('geval/multiple');
var event = require('value-event/event')
var valueEvent = require('value-event/value');
var changeEvent = require('value-event/change');
var Observ = require('observ');
var ObservStruct = require('observ-struct');

module.exports = search;

function search () {

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
  return h('div', [
    state.value,
    h('input', {
      type: 'text',
      name: 'search',
      value: state.value,
      'ev-event': changeEvent(state.events.change),
    })
  ])
  ;
}
