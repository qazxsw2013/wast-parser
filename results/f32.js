{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'add',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f32',
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'sub',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f32',
            operator: 'sub',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'mul',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'div',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'sqrt',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f32',
            operator: 'sqrt',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'min',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f32',
            operator: 'min',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'max',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f32',
            operator: 'max',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'ceil',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f32',
            operator: 'ceil',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'floor',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f32',
            operator: 'floor',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'trunc',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f32',
            operator: 'trunc',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'nearest',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f32',
            operator: 'nearest',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'abs',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f32',
            operator: 'abs',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'neg',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f32',
            operator: 'neg',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'copysign',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f32',
            operator: 'copysign',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'add'
        },
        {
          kind: 'export',
          name: 'sub'
        },
        {
          kind: 'export',
          name: 'mul'
        },
        {
          kind: 'export',
          name: 'div'
        },
        {
          kind: 'export',
          name: 'sqrt'
        },
        {
          kind: 'export',
          name: 'min'
        },
        {
          kind: 'export',
          name: 'max'
        },
        {
          kind: 'export',
          name: 'ceil'
        },
        {
          kind: 'export',
          name: 'floor'
        },
        {
          kind: 'export',
          name: 'trunc'
        },
        {
          kind: 'export',
          name: 'nearest'
        },
        {
          kind: 'export',
          name: 'abs'
        },
        {
          kind: 'export',
          name: 'neg'
        },
        {
          kind: 'export',
          name: 'copysign'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.000002p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.000002p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.b21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.721fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.721fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.d21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.521fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.521fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.d21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.b21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.721fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.721fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.d21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.521fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.521fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.d21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.000002p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.000002p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.721fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.b21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.721fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.521fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.d21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.d21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.521fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.721fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.b21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.721fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.521fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.d21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.d21fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.521fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p-147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p-147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p-147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p-147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep-22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep-22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep-22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep-22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p-124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p-124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p-124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p-124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p-147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p-147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p-147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p-147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p-124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p-124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p-124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p-124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.3bd3cep+5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.3bd3cep+5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.3bd3cep+5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.3bd3cep+5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep-22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep-22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep-22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep-22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.45f3p-129'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.45f3p-129'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.45f3p-129'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.45f3p-129'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.45f306p-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.45f306p-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.45f306p-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.45f306p-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-129'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-129'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-129'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-129'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.45f306p-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.45f306p-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.45f306p-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.45f306p-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-128'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-128'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-128'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-128'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb8p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb8p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb8p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb8p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.45f304p+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.45f304p+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.45f304p+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.45f304p+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.6a09e6p-75'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-126'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-63'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-1'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.6a09e6p-1'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p+0'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.921fb6p+2'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.40d932p+1'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep+127'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+63'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-infinity'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.cp+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.cp+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
        }]
      },
}