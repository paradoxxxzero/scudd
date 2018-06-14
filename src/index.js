import React from 'react'

export const scuddiff = (prev, next, name, kind) => {
  const prevKeys = Object.keys(prev)
  const nextKeys = Object.keys(next)
  const newKeys = nextKeys.filter(k => !prevKeys.includes(k))
  const removedKeys = prevKeys.filter(k => !nextKeys.includes(k))
  const table = {}
  removedKeys.forEach(k => {
    table[k] = { before: prev[k], after: '<<deleted>>' }
  })
  newKeys.forEach(k => {
    table[k] = { before: '<<added>>', after: next[k] }
  })

  const diffKeys = nextKeys
    .filter(k => !newKeys.includes(k))
    .filter(k => prev[k] !== next[k])
  diffKeys.forEach(k => (table[k] = { before: prev[k], after: next[k] }))
  if (removedKeys.length || newKeys.length || diffKeys.length) {
    /* eslint-disable no-console */
    console.log('Diff in', kind, 'found for component', name)
    console.table(table)
    /* eslint-enable no-console */
    return true
  }
  return false
}

export default class ScuddComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const name = this.displayName || this.constructor.displayName
    return (
      scuddiff(this.props, nextProps, name, 'props') ||
      scuddiff(this.state, nextState, name, 'state')
    )
  }
}
