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
            name: 'return-none'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '1'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'return-none'
          },
          id: {
            kind: 'identifier',
            name: 'return-none'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'empty'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'empty'
          },
          id: {
            kind: 'identifier',
            name: 'empty'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return-none',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'empty',
        body: []
      },
      expr: null
    }
  ]
}
