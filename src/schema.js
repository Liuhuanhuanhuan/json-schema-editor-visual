const schema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  properties: {
    majorRiskDTO: {
      type: 'object',
      properties: {
        count: {
          type: 'string',
        },
        proportion: {
          type: 'string',
        },
        majorRiskCount: {
          type: 'string',
        },
        commonlyRisk: {
          type: 'string',
        },
      },
      readonly: ['count', 'proportion', 'majorRiskCount', 'commonlyRisk'],
    },
    unResolvedProblemDTO: {
      type: 'object',
      properties: {
        count: {
          type: 'string',
        },
        proportion: {
          type: 'string',
        },
        majorUnResolvedProblem: {
          type: 'string',
        },
        commonlyUnResolvedProblem: {
          type: 'string',
        },
        arr: {
          type: 'array',
          items: {
            type: 'number',
          },
          readonly: ['items'],
        },
        arr1: {
          type: 'array',
          items: {
            type: 'number',
          },
        },
        arr3: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              a: {
                type: 'number',
              },
              b: {
                type: 'number',
              },
            },
            readonly: ['a', 'b'],
          },
          readonly: ['items'],
        },
      },
      readonly: [
        'majorRiskDTO',
        'arr',
        'count',
        'arr3',
        'unResolvedProblemDTO',
      ],
    },
  },
  required: ['majorRiskDTO', 'count', 'unResolvedProblemDTO'],
  readonly: ['majorRiskDTO', 'count', 'unResolvedProblemDTO'],
}

const standardSchema = {
  type: 'object',
  properties: {
    majorRiskDTO: {
      type: 'object',
      properties: {
        count: {
          type: 'string',
        },
        proportion: {
          type: 'string',
        },
        majorRiskCount: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
          },
        },
        commonlyRisk: {
          type: 'string',
        },
      },
    },
    // unResolvedProblemDTO: {
    //   type: 'object',
    //   properties: {
    //     count: {
    //       type: 'string',
    //     },
    //     proportion: {
    //       type: 'string',
    //     },
    //     majorUnResolvedProblem: {
    //       type: 'string',
    //     },
    //     commonlyUnResolvedProblem: {
    //       type: 'string',
    //     },
    //     arr: {
    //       type: 'array',
    //       items: {
    //         type: 'number',
    //       },
    //     },
    //     arr1: {
    //       type: 'array',
    //       disableEdit: 'all',
    //       items: {
    //         type: 'number',
    //       },
    //     },
    //     arr3: {
    //       type: 'array',
    //       items: {
    //         type: 'object',
    //         properties: {
    //           a: {
    //             type: 'number',
    //           },
    //           b: {
    //             type: 'number',
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
  },
  required: ['majorRiskDTO', 'count', 'unResolvedProblemDTO'],
}

const notStandardSchema = {
  type: 'object',
  properties: {
    majorRiskDTO: {
      type: 'object',
      disableEdit: 'all',
      properties: {
        count: {
          type: 'string',
        },
        proportion: {
          type: 'string',
        },
        majorRiskCount: {
          type: 'object',
          properties: {
            people: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                arr3: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      a: {
                        type: 'number',
                      },
                      b: {
                        type: 'number',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        commonlyRisk: {
          type: 'string',
        },
      },
    },
    unResolvedProblemDTO: {
      type: 'object',
      disableEdit: 'self',
      properties: {
        count: {
          type: 'string',
        },
        proportion: {
          type: 'string',
        },
        majorUnResolvedProblem: {
          type: 'string',
        },
        commonlyUnResolvedProblem: {
          type: 'string',
        },
        arr: {
          type: 'array',
          disableEdit: 'all',
          items: {
            type: 'number',
          },
        },
        arr1: {
          type: 'array',
          items: {
            type: 'number',
          },
        },
        arr3: {
          type: 'array',
          items: {
            type: 'object',
            disableEdit: 'self',
            properties: {
              a: {
                type: 'number',
              },
              b: {
                type: 'number',
              },
            },
          },
        },
      },
    },
  },
  required: ['majorRiskDTO', 'count', 'unResolvedProblemDTO'],
}

export { standardSchema, notStandardSchema }
