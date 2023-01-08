const assert = require('assert');
const program = require('./index.js')({});

const input = { command: "stream", source: "Applications/Todo/Today", template: "todo-item-template", reconciler: "plain" };
const actual = program.log(input)
const expected = [ { command: 'stream', source: 'Applications/Todo/Today', template: 'todo-item-template', reconciler: 'plain' } ];

assert.deepEqual( actual , expected );
