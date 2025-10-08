const react = 'test'

export default {
  meta: {
    name: 'demo',
  },
  rules: {
    'demo-rule': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow identifier references named "react"',
        },
        messages: {
          noReact: 'Identifier "react" is not allowed',
        },
        schema: [],
      },
      create(context) {
        return {
          Identifier(node) {
            if (node.name === 'react') {
              context.report({
                node,
                messageId: 'noReact',
              })
            }
          },
        }
      },
    },
  },
}
