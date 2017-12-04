import { Component, h } from 'preact'

import style from './styles'

interface Props {
  top?: boolean
  middle?: boolean
  bottom?: boolean
  left?: boolean
  center?: boolean
  right?: boolean
  containerClass?: string
}

export default class Anchor extends Component<Props, {}> {
  render() {
    const { top, middle, bottom, left, center, right, containerClass, children } = this.props
    const layout: any = {}
    const transformations = []

    if (top) {
      layout.bottom = 'auto'
    }

    if (bottom) {
      layout.top = 'auto'
    }

    if (left) {
      layout.right = 'auto'
    }

    if (right) {
      layout.left = 'auto'
    }

    if (center) {
      layout.left = '50%'
      layout.right = 'auto'
      transformations.push('translateX(-50%)')
    }

    if (middle) {
      layout.top = '50%'
      layout.bottom = 'auto'
      transformations.push('translateY(-50%)')
    }

    layout.transform = transformations.join(' ')

    return <div class={style(style.anchor, containerClass)} style={layout}>
      {children}
    </div>
  }
}
