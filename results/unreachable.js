{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return_i32'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{kind: 'unreachable'}]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return_f64'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{kind: 'unreachable'}]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'if'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'if_else',
            test: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            consequent: {kind: 'unreachable'},
            alternate: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'block'
          },
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {kind: 'unreachable'},
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return_i64'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            {kind: 'unreachable'}
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'call'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                id: 'return_i32'
              },
              expr: []
            },
            {kind: 'unreachable'}
          ]
        },
        {
          kind: 'export',
          name: 'return_i32'
        },
        {
          kind: 'export',
          name: 'return_f64'
        },
        {
          kind: 'export',
          name: 'if'
        },
        {
          kind: 'export',
          name: 'block'
        },
        {
          kind: 'export',
          name: 'return_i64'
        },
        {
          kind: 'export',
          name: 'call'
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'return_i32',
        body: []
      },
      failure: {
        kind: 'failure',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'return_f64',
        body: []
      },
      failure: {
        kind: 'failure',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'if',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'if',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'block',
        body: []
      },
      failure: {
        kind: 'failure',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return_i64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'call',
        body: []
      },
      failure: {
        kind: 'failure',
        value: 'unreachable executed'
      }
    }
  ]
}
