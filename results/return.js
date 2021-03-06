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
            name: 'dummy'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-i32'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'unop',
              type: 'i32',
              operator: 'ctz',
              expr: {
                kind: 'return',
                expr: null
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-i64'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'unop',
              type: 'i64',
              operator: 'ctz',
              expr: {
                kind: 'return',
                expr: null
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-f32'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'return',
                expr: null
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-f64'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'return',
                expr: null
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'nullary'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'return',
            expr: null
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'unary'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '3'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-func-first'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-func-mid'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'dummy'
              },
              exprs: []
            },
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-func-last'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'nop'},
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'dummy'
              },
              exprs: []
            },
            {
              kind: 'return',
              expr: null
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-func-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {kind: 'nop'},
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'dummy'
              },
              exprs: []
            },
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-block-first'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'return',
                expr: null
              },
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-block-mid'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              {
                kind: 'return',
                expr: null
              },
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-block-last'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {kind: 'nop'},
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              {
                kind: 'return',
                expr: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-block-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {kind: 'nop'},
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-loop-first'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                }
              },
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-loop-mid'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '4'
                }
              },
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-loop-last'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {kind: 'nop'},
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '5'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_if-cond'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'br_if',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              test: {
                kind: 'return',
                expr: null
              },
              expr: null
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_if-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'drop',
                body: [{
                  kind: 'br_if',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  test: {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '8'
                    }
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '7'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_if-value-cond'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'drop',
                body: [{
                  kind: 'br_if',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '6'
                  },
                  expr: {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '9'
                    }
                  }
                }]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '7'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_table-index'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'br_table',
                exprs: [{
                  kind: 'return',
                  expr: {
                    kind: 'const',
                    type: 'i64',
                    init: '9'
                  }
                }],
                body: [
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                ]
              }]
            },
            {
              kind: 'const',
              type: 'i64',
              init: '-1'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_table-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '10'
                    }
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                ],
                body: [
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                ]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '7'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_table-value-index'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '6'
                  },
                  {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '11'
                    }
                  }
                ],
                body: [
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                ]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '7'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-return-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i64',
                init: '7'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-if-cond'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                }
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-if-then'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'return',
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '3'
                  }
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  }
                }]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-if-else'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  }
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'return',
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '4'
                  }
                }]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-select-first'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '5'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            test: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-select-second'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            else: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '6'
              }
            },
            test: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-select-cond'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            else: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            test: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '7'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f'
          },
          expos: [],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-1'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call-first'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'f'
            },
            exprs: [
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '12'
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call-mid'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'f'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '13'
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call-last'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'f'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '14'
                }
              }
            ]
          }]
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'sig'
          },
          expr: {
            kind: 'func',
            id: null,
            params: [{
              kind: 'param',
              items: [
                {
                  kind: 'item',
                  type: 'i32'
                },
                {
                  kind: 'item',
                  type: 'i32'
                },
                {
                  kind: 'item',
                  type: 'i32'
                }
              ]
            }],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'table',
          expo: null,
          index: [],
          items: {
            kind: 'elem',
            items: [{
              kind: 'identifier',
              name: 'f'
            }]
          }
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call_indirect-func'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'sig'
            },
            exprs: [
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '20'
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call_indirect-first'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'sig'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '21'
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call_indirect-mid'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'sig'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '22'
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call_indirect-last'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'sig'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '23'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-set_local-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '17'
                }
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '-1'
            }
          ]
        },
        {
          kind: 'memory',
          impo: null,
          expo: null,
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
          expos: [{
            kind: 'literal',
            value: 'as-load-address'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'f32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'f32',
                init: '1.7'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-loadN-address'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i64',
            size: 8,
            sign: true,
            offset: 0,
            align: 0,
            expr: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i64',
                init: '30'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-store-address'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'f64',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '30'
                }
              },
              data: {
                kind: 'const',
                type: 'f64',
                init: '7'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '-1'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-store-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '2'
              },
              data: {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '31'
                }
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '-1'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-storeN-address'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '32'
                }
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '7'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '-1'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-storeN-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '2'
              },
              data: {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '33'
                }
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '-1'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-unary-operand'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'neg',
            expr: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'f32',
                init: '3.4'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-binary-left'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '10'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-binary-right'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'i64',
              init: '10'
            },
            right: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i64',
                init: '45'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-test-operand'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '44'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-compare-left'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
            operator: 'le',
            left: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '43'
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '10'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-compare-right'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'ne',
            left: {
              kind: 'const',
              type: 'f32',
              init: '10'
            },
            right: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '42'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-convert-operand'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'i64',
            operator: 'wrap',
            expr: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '41'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-grow_memory-size'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'grow_memory',
            expr: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '40'
              }
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-i32',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-i64',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-f32',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-f64',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nullary',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'unary',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-func-first',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-func-mid',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-func-last',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-func-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-block-first',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-block-mid',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-block-last',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-block-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-loop-first',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-loop-mid',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-loop-last',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-br-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-br_if-cond',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-br_if-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-br_if-value-cond',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-br_table-index',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-br_table-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-br_table-value-index',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '11'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-return-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-if-cond',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-if-then',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-if-then',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-if-else',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-if-else',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-select-first',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-select-first',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-select-second',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-select-second',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-select-cond',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-call-first',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-call-mid',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-call-last',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-call_indirect-func',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '20'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-call_indirect-first',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '21'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-call_indirect-mid',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-call_indirect-last',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-set_local-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '17'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-load-address',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-loadN-address',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '30'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-store-address',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '30'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-store-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-storeN-address',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-storeN-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '33'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-unary-operand',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '3.4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-binary-left',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-binary-right',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '45'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-test-operand',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-compare-left',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '43'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-compare-right',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-convert-operand',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '41'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-grow_memory-size',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '40'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-value-empty-vs-num'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: null
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-value-void-vs-num'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {kind: 'nop'}
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-value-num-vs-num'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '1'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    }
  ]
}
