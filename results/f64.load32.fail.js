{
  kind: 'script',
  body: [{
    kind: 'module',
    body: [
      {
        kind: 'memory',
        int: {
          kind: 'literal',
          value: 1,
          raw: [
            [' '],
            '1'
          ]
        },
        int1: null,
        segment: []
      },
      {
        kind: 'func',
        id: null,
        expo: null,
        imp: null,
        type: null,
        params: [{
          kind: 'param',
          items: [{
            kind: 'item',
            type: 'i32'
          }]
        }],
        result: {
          kind: 'result',
          type: 'f64'
        },
        local: [],
        body: [{
          kind: 'load',
          type: 'f64',
          size: 32,
          sign: null,
          offset: 0,
          align: 0,
          expr: {
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }
        }]
      }
    ]
  }]
}