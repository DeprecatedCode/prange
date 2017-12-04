import { StyleSheet as JSSStyleSheet, css } from 'aphrodite-jss'

export default class StyleSheet {
  static create(rawStyleSheet) {
    const styleSheet = JSSStyleSheet.create(rawStyleSheet)
    const getCompiledClassName = name => () => css(styleSheet[name])

    const compiled: any = (...args) =>
      args.filter(x => x).join(' ')

    Object.keys(styleSheet).forEach(name => {
      Object.defineProperty(compiled, name, {
        get: getCompiledClassName(name)
      })
    })

    return compiled
  }
}
